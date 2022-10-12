<template>
  <h4>Users</h4>
  <ul>  <!--v-if="isLoad"-->
    <li v-for="(user,index) in usersList" :key="index">{{user.name}}</li>
  </ul>
<!--  <div v-else>
    <h4>Loading...</h4>
  </div>-->

</template>

<script setup>

import {ref} from "vue";

const usersList=ref([])
const isLoad=ref(false)
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      usersList.value=json
      /*isLoad.value=true*/
    })


</script>

<style scoped>

</style>