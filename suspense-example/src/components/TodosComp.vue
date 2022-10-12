<template>
<h4>Todos</h4>
<ul> <!--v-if="isLoad"-->
  <li v-for="(todo,index) in todosList" :key="index">{{todo.title}}</li>
</ul>
<!--<div v-else>Todos Loading... </div>-->

</template>

<script setup>

import {ref} from "vue";

const todosList=ref([])
/*const isLoad=ref(false)*/
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
      todosList.value=json
      /*isLoad.value=true*/
    })

</script>

<style scoped>

</style>