<template>
  <div class="text-green-600">Doing Count : {{ doing }}</div>
  <div class="text-red-600">Done Count : {{ done }}</div>
</template>

<script>
import {computed} from "vue";

export default {
  name: "DoneDoing",
  props: {
    todoList: Array
  },
  setup(props) {
    const done = computed(() => props.todoList.filter(i => i.completed === true).length)
    const doing = computed(() => props.todoList.filter(i => i.completed === false).length)
    console.log(done, doing)
    return {done, doing}
  }
}
</script>

<style scoped>

</style>