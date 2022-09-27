<template>
  <div class="container flex">
    <list-comp ></list-comp>
    <add-comp ></add-comp>
  </div>

</template>

<script>
import ListComp from "@/components/ListComp";
import AddComp from "@/components/AddComp";
export default {
  name: "UserComp",
  components: {
    ListComp,AddComp
  }
}
</script>

<style scoped>

</style>