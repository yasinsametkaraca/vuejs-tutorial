<template>
  <div class="game-container">
    <div>
      <h1 style="margin-bottom:10px; font-weight: bold; font-size: 10rem; font-family: 'Agency FB'" class="game-title">Hafıza Oyunu</h1>
    </div>
    <div>
      <h4 style="font-family: 'Agency FB';" class="game-description">Açık kartı seçtikten sonra, kapalı karta tıklayınız.</h4>
    </div>
    <div class="card-container" >
      <transition-group name="rotate" appear class="card-container">
        <app-card :key="card.id"
                  v-for="card in cards"
                  :card="card" @click.native="selectedCard=card.id"
                  :class= "{'card-shadow': selectedCard==card.id}">
        </app-card>  <!--:class vermemizin amacı üstüne basılınca shadow un kalmasını istememiz-->
      </transition-group>
    </div>

    <div class="card-container" style="margin-top: 60px;">
      <transition name="rotate-close-card" mode="out-in"  >
        <component :card="defaultCard" @click.native="showCard(defaultCard)" :is="activeCardComponent"></component>
      </transition>
    </div>
  </div>

</template>

<script>
import Card from "./Card"
import DefaultCard from "./DefaultCard"
import Celebrate from "./Celebrate";
export default {
  data(){
    return {
      cards:[
        {id: 1, component: "appCard",image:"/src/assets/card-1.PNG"},
        {id: 2, component: "appCard",image:"/src/assets/card-2.PNG"},
        {id: 3, component: "appCard",image:"/src/assets/card-3.PNG"},
        {id: 4, component: "appCard",image:"/src/assets/card-4.PNG"},
        {id: 6, component: "appCard",image:"/src/assets/card-5.PNG"},
        {id: 7, component: "appCard",image:"/src/assets/card-6.PNG"},
        {id: 8, component: "appCard",image:"/src/assets/card-7.PNG"},
        {id: 9, component: "appCard",image:"/src/assets/card-8.PNG"},
      ],
      selectedCard : null,
      defaultCard:{},
      activeCardComponent: "appCard",
    }
  },
  components:{
    appCard:Card,
    appDefaultCard:DefaultCard
  },
  created() {
    let index= Math.ceil(Math.random() * this.cards.length);
    this.defaultCard=this.cards[index-1]   //her sayfa yenilendiğinde default card ın içeriğini değiştirmesini için tanımladık.
    console.log(this.defaultCard)
    setTimeout(()=>{
      this.activeCardComponent="appDefaultCard"
    },0.0000001)
  },
  mounted() {
  },
  methods:{
    showCard(defaultCard){
      if (this.selectedCard == null) {
        alert("You must select a card before")
      }
      else {
        this.activeCardComponent=defaultCard.component
        setTimeout(()=>{
          if (this.selectedCard == defaultCard.id) {
            this.$emit("gameComponentEvent","appCelebrate");  /*app.vue de oyun doğru olursa burdan yolladığımız event ile appCelebrate ile Celebrate componenti çalışır.*/
          }else {
            this.$emit("gameComponentEvent","appFailure");
          }
        },1200)
      }
    }
  }
}
</script>

<style scoped>
  .game-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .card-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    flex-wrap: wrap;
  }
  .game-title{
    text-align: center;
    font-family: sans-serif;
    font-size:60px;
    color:darkslateblue;
    margin: 0 0 0 0;
  }
  .game-description{
    color: darkslategray;
    text-align: center;
    font-family: sans-serif;
    font-size:20px;
  }
  .card-shadow{
    box-shadow:0px 10px 66px darkturquoise !important;
    transition: box-shadow 0.5s;
  }

  /*
  Animation Transition Class
  */
  .rotate-enter {}
  .rotate-enter-active {
    animation: rotate ease-in-out 1.5s forwards;
  }
  .rotate-leave{ /*animasyon kapanırken başlangıçtaki olaylar*/}
  .rotate-leave-active {}
  @keyframes rotate{
    from {
      transform: rotateY(0);
    }
    to {
      transform: rotateY(1200deg);
    }
  }

  .rotate-close-card-enter {}
  .rotate-close-card-enter-active {
    animation: rotate-in ease-in-out 0.3s forwards;
  }
  .rotate-close-card-leave{
    animation: rotate-out ease-in-out 0.3s forwards;
  }
  .rotate-close-card-leave-active {}
  @keyframes rotate-in{
    from {
      transform: rotateY(90deg);
    }
    to {
      transform: rotateY(0);
    }
  }
  @keyframes rotate-out{
    from {
      transform: rotateY(0);
    }
    to {
      transform: rotateY(90deg);
    }
  }

</style>