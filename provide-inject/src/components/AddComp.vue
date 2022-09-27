<template>
  <button @click="newItem('ysk')">Add</button>
  <!--burdan yaptığımız emit önce UserComp a gider. Ordan terar emit edip app.vue ye yollarız-->
</template>

<script>
import {inject} from "vue";

export default {
  name: "AddComp",
  setup() {
    const newItem = inject("newItem")
    return {newItem}

  }
}
</script>

<style scoped>

</style>