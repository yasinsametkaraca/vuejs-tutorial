<template>
  <div class="flex m-4">
    <div>
      <h3>{{username}}</h3>
    </div>
    <div>
      <input type="text" v-model="username"/>
    </div>
    <div>
      <button class="btn btn-primary mt-2" @click="increase">{{counter}}</button>
    </div>
    <hr>
    <div>
      <oddOrEven :counter="counter" @odd-event="alertOdd"/>  <!--veriyi alırken @ işareti, gönderirken : işareti kullanılır-->
    </div>
    <hr>
    <div>
      <h5>Name and Surname</h5>
      <input type="text" v-model="state.customer.name"/>
      <input type="text" v-model="state.customer.lastName"/>
      <p>{{state.customer.name}} {{state.customer.lastName}}</p>
    </div>
    <hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr>  <hr><hr><hr><hr><hr>  <hr><hr><hr><hr><hr>  <hr><hr><hr><hr><hr>

  </div>
  <h3>With Composables</h3>
  <home-view></home-view>

</template>

<script setup>
import oddOrEven from "./components/ShowOddorEven.vue"
import HomeView from "./views/HomeView.vue"
import {onMounted, reactive, ref, watch} from 'vue'
const username = ref("YSK")  /*expose kullanmadık çünkü script setup bunları otomatik yapar ve otomatik return eder*/
const counter = ref(0)
const increase= ()=> {
  counter.value++
}
const alertOdd= (odd)=> {
  alert(odd)
}

/*const name=ref("")
const lastName=ref("")*/
/*işin işine object girdiğinde reactive kullanmak daha doğrudur*/
const state = reactive({               /*reactive ler object almak zorundalar. Ref de object alabilir ama reactive tanımlasak daha iyi olur */ /*Reactiveler OptionApi deki data(){} gibidir. Birden fazla datayı böyle tutabiliriz.*/
  customer:{
    name:null,
    lastName:null
  },
/*  username:null,*/
})
console.log(state)
  watch(()=>JSON.parse(JSON.stringify(state.customer)),(newCustomer,oldCustomer)=>{             /*JSON yapınca çalışıyor bu işlem*/
  console.log(oldCustomer)
  console.log(newCustomer)
})

/*onMounted(()=> {
console.log("mounted")
})*/
</script>