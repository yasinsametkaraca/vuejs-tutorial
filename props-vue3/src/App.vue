<template>
   <div class="container flex">
      <user-comp :userList="userList" @newItem="userList.push($event)"></user-comp>  <!--UserComp dan gelen bilgiyi userlist e aktar. O bilgiyi emit ile yollayıp $event içerisinde alıyoruz.-->
   </div>
</template>

<script>

import { ref} from "vue";
import UserComp from "./components/UserComp"
export default {
  name: 'App',
  components: {
    UserComp
  },

  setup(){
    const userList= ref(["gfb","ultraslan","çarşı"])   //userList i önce usercomp a sonra listcomp a aktardık.
    return {userList}
  }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
