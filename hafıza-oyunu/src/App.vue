<template>
  <transition name="slide" mode="out-in">
    <component :is="activeComponent" @gameComponentEvent="activeComponent=$event"></component>
  </transition>
</template>

<script>
import GameCards  from "./components/GameCards"
import Failure  from "./components/Failure"
import Celebrate from "./components/Celebrate";

export default {
  components: {
    appGameCards: GameCards,
    appCelebrate: Celebrate,
    appFailure: Failure,
  },
  data(){
    return {
      activeComponent:"appGameCards",
    }
  }


}
</script>

<style scoped>


.slide-enter {

}
.slide-enter-active {
animation: slide-in 0.5s ease-out forwards;
}
.slide-leave {

}
.slide-leave-active {
  animation: slide-out 0.5s ease-out forwards;}

@keyframes slide-in {
  from {
    transform: translateX(-2000px);
  }
  to {
    transform: translateX(0px);
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(2000px);
  }
}
</style>