<template>
  <div class="bg-gray-800 rounded-md shadow-md text-white w-1/2 mx-auto p-5 mt-8">
    <h3 class="text-center text-3xl">To Do List</h3>
    <add-section :AddToDo="AddToDo"></add-section>
    <!--AddSection componentinde alınan girilen bilgiyi burda AddToDo fonksiyon ile alıp işlicez-->
    <to-do-list @deleteEvent="deleteItem" :todoList="todoList"></to-do-list>  <!--todoList i gönderdik-->
    <!--@deleteEvent="deleteItem" bunun amacı deleteEvent gelirse deleteItem diye fonksiyon çalıştır.-->
  </div>

</template>
<script>
import AddSection from "./components/AddSection.vue";
import ToDoList from "./components/ToDoList.vue";
import {ref} from "vue";

export default {
  components: {AddSection, ToDoList},
  setup() {
    const todoList = ref([])
    const AddToDo = (todoText) => {
      todoList.value.push({
        id: new Date().getTime(),
        title: todoText,
        completed: false
      })
    }
    const deleteItem = (todo) => {
      console.log(todo)
      todoList.value = todoList.value.filter((todoList) => todoList.id != todo.id)
    }
    return {todoList, AddToDo, deleteItem}
  }
}
</script>