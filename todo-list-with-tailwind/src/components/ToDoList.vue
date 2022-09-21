<template>
  <section class=" mt-5">
    <to-do-list-item @deleteEvent="$emit('deleteEvent',$event)" v-for="todoItem in todoList" :key="todoItem.id" :todoItem="todoItem"></to-do-list-item> <!--to do list item componenti içerisinde kullanmak için burdan yolluyoruz liste elemanlarını-->
<!--    @deleteEvent="$emit('deleteEvent',$event)" bunun amacı todolistitem componentinden gelen veriyi alıp tekrar app.vue ye yollamak-->
    <span>You have {{todoLength}} things to do</span>
    <done-doing :todoList="todoList"></done-doing>  <!--todoListi gönderiyoruz donedoing componentine-->
  </section>
</template>

<script>
import ToDoListItem from "./ToDoListItem.vue"
import DoneDoing from "./DoneDoing.vue";
import {computed} from "vue";
export default {
  name: "ToDoList",
  components: {ToDoListItem,DoneDoing},
  props: {
    todoList:Array
  },
  setup(props) {
    const todoLength=computed(()=>props.todoList.length)
    return {todoLength}
  }
}
</script>

<style scoped>

</style>