<template>
  <div class="container">

        <input type="text" v-model="searchText">
        <ul>
          <li v-for="product in filteredText">{{product}}</li>
        </ul>
  </div>

</template>

<script>
import {ProductMixin} from "./ProductMixin";
export default {
  name: "Filters",
  mixins:[ProductMixin],
  created() {
    console.log("filters mixin")
  }
}
</script>

<style scoped>

</style>