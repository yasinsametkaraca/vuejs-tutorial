<template>
  <button @click="$emit('newItem','gfb')">Add</button>  <!--burdan yaptığımız emit önce UserComp a gider. Ordan terar emit edip app.vue ye yollarız-->
</template>

<script>
export default {
  name: "AddComp"
}
</script>

<style scoped>

</style>