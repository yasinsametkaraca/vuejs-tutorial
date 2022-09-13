<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition</h3>
        <hr>
        <button class="btn btn-primary" @click="show=!show">Kutuyu Göster/Gizle</button>
        <br><br><br>
        <transition name="fade">
          <div class="alert alert-success" v-if="show">Alert Kutusu</div>
        </transition>
        <transition name="slide" type="animation" appear>  <!--type ın mantığı önce animation çalışır-->  <!--appear ile her sayfa yüklendiğinde çalışması için-->
          <div class="alert alert-warning" v-if="!show">Alert Kutusu</div>
        </transition>
        <br><br>

        <transition
            enter-class=""
            enter-active-class="animate__animated animate__bounce"
            leave-class=""
            leave-active-class="animate__animated animate__swing">
          <div class="alert alert-warning" v-if="!show">Alert Kutusu  <!--Hazır css classları ile çalıştık (animate.css diyerek bulabilirsiniz)--></div>
        </transition>
        <br><br><br><br><br><br><br>

        <select class="form-control" v-model="activeEffect">  <!--animasyonu dinamik olarak seçmek için-->
          <option value="fade">Fade</option>
          <option value="slide">Slice</option>
        </select>
        <transition :name="activeEffect">
          <div class="alert alert-success" v-if="show">Alert Kutusu</div>
        </transition>
        <transition :name="activeEffect" >
          <div class="alert alert-warning" v-if="show">Alert Kutusu</div>
        </transition>
        <br><br><br><br><br><br>

        <transition name="fade" mode="out-in" > <!--ilk önce out sonra in gerçekleşsin-->
          <div class="alert alert-warning" v-if="show" key="warning">İf Alert Kutusu</div> <!--iki divin farklı element olduğunu belirttik-->
          <div class="alert alert-success" v-else key="success">Else Alert Kutusu</div>
        </transition>

        <br><br><br><br><!-- JavaScript kullanarak animation ve transition yapacağız -->
        <button class="btn btn-primary" @click="showJavaScript=!showJavaScript">Kutuyu Göster/Gizle</button> <hr>
        <transition
          :css="false"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @after-enter-cancelled="afterEnterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @after-leave-cancelled="afterLeaveCancelled">
          <div class="alert alert-warning" v-if="showJavaScript" >Alert Kutusu (JavaScript) </div>
        </transition>   <!--:css="false" ile birlikte =Vue.js in css var mı yok mu diye bakmaması için yaptık çünkü bu tarafta javascript ile yapıyoruz-->

        <h3>Dinamik Componentlere animation eklemek</h3>  <!--burada yaptığımız yapı tabview mantığı vardır-->
        <button class="btn btn-danger" @click="activeComponent='appPost'">Post Open/Close</button>
        <button class="btn btn-warning" @click="activeComponent='appHome'">Home Open/Close</button>
        <transition name="fade" mode="out-in">
          <component :is="activeComponent"></component>  <!--Danger olan butona tıklanınca Post compenenti açılır. Warning butonuna basılınca Home componenti açılır-->
        </transition>

        <br><br><br><br><br><br><br><br><hr><hr>
        <button class="btn btn-primary" @click="addNewItem">Add New Item</button><hr>
        <ul class="list-group">
          <transition-group name="slide" >
            <li :key="number" class="list-group-item" v-for="(number,index) in numberList" @click="removeItem(index)">{{number}}</li>
          </transition-group>
        </ul>

       </div>
    </div>
  </div>
</template>

<script>
import Post from "./components/Post"
import Home from "./components/Home";
export default {
  components: {
    appPost: Post,
    appHome: Home
  },
  data(){
    return{
      show:false,
      activeEffect:"slice",
      showJavaScript:false,
      elementWidth:100,
      activeComponent: "",
      numberList:[1,2,3,4,5]
    }
},
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter")
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el,done){
      console.log("enter")
      let round=1;
      const interval=setInterval(()=>{
        el.style.width=(this.elementWidth+round*10)+"px";
        round++;
        if (round>20){
          clearInterval(interval)
          done() //bu callback ile animation biter.
        }
      },50)
    },
    afterEnter(el) {
      console.log("afterEnter")
    },
    afterEnterCancelled(el) {
      console.log("afterEnterCancelled")
    },
    beforeLeave(el) {
      console.log("beforeLeave")
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el,done) {
      console.log("leave")
      let round=1;
      const interval=setInterval(()=>{
        el.style.width=(this.elementWidth-round*10)+"px";
        round++;
        if (round>20){
          clearInterval(interval)
          done() //bu callback ile animation biter.
        }
      },50)
    },
    afterLeave(el) {
      console.log("afterLeave")
    },
    afterLeaveCancelled(el) {
      console.log("afterLeaveCancelled")
    },
    addNewItem(){
      const position=Math.floor(Math.random()*this.numberList.length)
      this.numberList.splice(position,0,this.numberList.length+1)  //random ekleme yapıyoruz
    },
    removeItem(index){
      this.numberList.splice(index,1); /*bu indexten itibaren 1 kayıtı sil*/
    }
  }

}
</script>

<style>

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition:opacity 1s;
}
.fade-leave{
  /*opacity: 1;*/     /*animasyon kapanırken başlangıçtaki olaylar*/
}
.fade-leave-active {
  transition: opacity 1s; /* animasyon kapanırken olan olaylar*/
  opacity: 0;
}

.slide-enter{}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave {}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute; /*bunun amacı li etiketi olan durumda silme olan element hareket edince diğer elementlerin ona ayak uydurması içindir*/
}
.slide-move {
  transition: transform 1s; /*Li etiketi olan işlemlerde eğer transform işlemi varsa geçişli yapar. (Son Yaptığımız işlem için)*/
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to{
    transform: translate(0px);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to{
    transform: translateY(20px);
  }
}
</style>
