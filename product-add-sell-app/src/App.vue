<template>
  <div>
    <header-comp></header-comp>
    <router-view/>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import HeaderComp from "./components/share/Header"
import FooterComp from "./components/share/Footer"
import {useStore} from "vuex";
export default {
  components:{
    HeaderComp, FooterComp
  },
  setup(){
  const store =useStore()
  store.dispatch("getProductResult")
  store.dispatch("productlistFirebase")  /*sayfa her yenilendiğinde çağıracak */
  return{}
  }
}

</script>





<style lang="scss">
body {
  background-color: lightskyblue;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
