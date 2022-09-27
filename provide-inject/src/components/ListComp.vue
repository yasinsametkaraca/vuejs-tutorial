<template>
  <ul class="list-group" >
    <li class="list-group-item" v-for="user in userList" :key="user">{{user}}</li>
  </ul>

</template>

<script>

import {inject} from "vue";

export default {
  name: "ListComp",


  setup(){
    const userList = inject('userList')
    return {
      userList,
    }
  }
}

</script>

<style scoped>

</style>