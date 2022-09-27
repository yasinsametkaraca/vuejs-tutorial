<template>
   <div class="container flex">
      <h3>Provide ve Inject bize componentler arası direk iletişim sağlar Bu örnekte app.vue dan listcomp a direk veri aktardık. Prop veya emit kullansaydık örneğin 3 comp arası iletişimi önce app.vue dan usercomp a ordan listcomp veya addcomp a gönderirdik</h3>
      <user-comp @newItem="userList.push($event)"></user-comp>  <!--UserComp dan gelen bilgiyi userlist e aktar. O bilgiyi emit ile yollayıp $event içerisinde alıyoruz.-->
   </div>
</template>

<script>

import {provide, ref} from "vue";
import UserComp from "./components/UserComp"
export default {
  name: 'App',
  components: {
    UserComp
  },

  setup(){
    const userList= ref(["gfb","ultraslan","çarşı"])   //userList i önce usercomp a sonra listcomp a aktardık.
    provide("userList",userList)  //provide ile app.vue dan direk listcomp a veri gönderdik. Gönderdiğimiz veriyi listcompdan inject ile aldık.

    const newItem=(item)=> {userList.value.push(item)}  //veriyi buradan addcomp a direk yolladık
    provide("newItem",newItem)

    return {userList,newItem}
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
