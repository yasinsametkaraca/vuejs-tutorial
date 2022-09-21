<template>
  <div class="bg-gray-500 flex justify-between p-1 even:bg-gray-600 mb-2">
    <label :for="`todo${todoItem.id}`">
      <input v-model="todoItem.completed" type="checkbox"  :id="`todo${todoItem.id}`"/>
      <span>{{todoItem.title}}</span>
    </label>
    <button @click="deleteItem" class="bg-red-700 shadow-md rounded-md px-2 active:bg-red-900">Delete</button>
  </div>
</template>

<script>
export default {
  name: "ToDoListİtem",
  props: {
    todoItem: Object
  },
  setup(props,context) {
    const deleteItem = ()=>{
      context.emit("deleteEvent",props.todoItem)
    }
    return{deleteItem}
  }
}

</script>

<style scoped>

</style>