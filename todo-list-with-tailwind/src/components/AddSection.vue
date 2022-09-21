<template>
  <section>
    <input @keydown.enter="newItem" placeholder="Add to do..." type="text"  class="w-full mt-4 p-1 bg-gray-700 border-[1px] outline-noneErcan123. border-gray-500">
<!--    @keydown.enter="AddToDo($event.target.value) bunun amacı yazılan bilgiyi fonksiyon ile göndermesidir.-->
  </section>
</template>

<script>
export default {
  name: "AddSection",
  props: {
    AddToDo: Function
  },
  setup(props) {
    const newItem=(event)=> {
      props.AddToDo(event.target.value)
      event.target.value=""
    }
    return{newItem}
  }
}
</script>

<style scoped>

</style>