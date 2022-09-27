<template>
  <ul class="list-group" >
    <li class="list-group-item" v-for="user in userList" :key="user">{{user}}</li>
  </ul>

</template>

<script>

export default {
  name: "ListComp",
  props: ["userList"],
  setup(){

  }
}

</script>

<style scoped>

</style>