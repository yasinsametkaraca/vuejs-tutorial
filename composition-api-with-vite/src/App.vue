<template>
  <div style="display: block; ">
    <h2>{{ title }}</h2>
    <input type="text" v-model="title"/>
    {{ titleLength }}
    <hr>
    <p v-if="show">
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
      enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
    </p>
    <button @click="show=!show">Open/Close Description</button>
    <hr>
    <!--Fonksiyonla nasıl yapılır!-->
    <p v-if="show">
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
      enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
    </p>
    <button @click="toggleDescription">Open/Close Description</button>
    <hr>
    <button @click="counter++">Counter++ : {{ counter }} : {{ oddorEven }}</button>
    <hr>
    <input type="text" v-model="searchText"/>
    <p v-if="isTyping">he is writing now</p>
    <hr><br><br><br><br><br>
    <homeview></homeview>
  </div>
</template>

<script>
import {computed, ref, watch, watchEffect} from 'vue'  /*reactive effect demektir ve reactive bir değişken tanımlamamızı sağlar*/
import Homeview from './views/HomeView.vue'
export default {
  components:{
    Homeview
  },
  setup() {     /*setup beforecreateden bile önce çalışırşekilde yapıldı*/
    const title = ref("Fenerbahçe");
    const show = ref(true);
    console.log(show); /*Ref bir object döndürür onun içinde value kısmında değerler yer alır. Bu yüzden show.value deriz*/
    const toggleDescription = () => {
      show.value = !show.value
    }

    const titleLength = computed(() => {
      return title.value.length + " Length Characters";
    })

    /*const titleLength = computed(() => title.value.length + " Length Characters")  /!*tek satır  olduğunda böylede yazılabilir*!/*/
    const counter = ref(0);
    const oddorEven = computed(() => (counter.value % 2 == 0 ? 'Even' : 'Odd'));
    /*watch([counter,oddorEven], (newValue, oldValue) => {
      console.log(oldValue,"=>",newValue)   /!*[0,'Even'] '=>' [1, 'Odd']*!/
    });*/
    watch([counter, oddorEven], ([newCounter, newoddorEven], [oldCounter, oldoddorEven]) => {
      console.log(oldCounter, "=>", newCounter)
      console.log(oldoddorEven, "=>", newoddorEven)
    });

    const searchText = ref("")
    const isTyping = ref(false)
    /*watch(searchText, () => {
      if (searchText.value.length > 0) {
        isTyping.value = true
        setTimeout(() => {
          isTyping.value = false   /!*böyle olunca çalışır ama doğru çalışmaz bunu watch effect ile yapmalıyız*!/
        }, 1000)
      }
    })*/
    watchEffect((onInvalidate) => {             /*computed gibi çalışır ama watch gibi davranır*/
      if (searchText.value.length > 0) {
        isTyping.value = true
        const typing = setTimeout(() => {
          isTyping.value = false
        }, 1000)
        onInvalidate(() => clearTimeout(typing))  /*  eğer yazmaya devam edilirse setTimeoutu iptal et*/
      }
    })

    return {
     counter, title, show, toggleDescription, searchText, isTyping, titleLength, oddorEven
    }
  }
}
</script>