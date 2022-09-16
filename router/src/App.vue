<template>
<!--
  <header-comp></header-comp>
-->
  <router-view name="header-top"></router-view>
  <router-view></router-view>
  <router-view name="header-bottom"></router-view>
</template>
<script>
/*
import HeaderComp from "@/components/HeaderComp";
*/

export default {
  components: {
    /*HeaderComp*/
  },
}
</script>
<style lang="scss">
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
