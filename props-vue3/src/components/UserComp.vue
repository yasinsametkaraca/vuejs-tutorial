<template>
  <div class="container flex">
    <list-comp :userList="userList"></list-comp>
    <add-comp @newItem="$emit('newItem',$event)"></add-comp>
  </div>

</template>

<script>
import ListComp from "@/components/ListComp";
import AddComp from "@/components/AddComp";
export default {
  props: ["userList"],
  emits : ["newItem"],  //burayı yazsak da olur yazmasak developer sürecinde görebilmek için iyi olur
  name: "UserComp",
  components: {
    ListComp,AddComp
  }
}
</script>

<style scoped>

</style>