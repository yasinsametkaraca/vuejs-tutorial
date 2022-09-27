<template>
  <div class="card shadow w-50">
    <h3>Shopping List</h3>
    <hr>
    <div class="flex justify-center ">
      <input class="mb-3" type="text" @keydown.enter="onSave">
    </div>
    <ul class="list-group" v-if="shoppingList.length>0">
      <li v-for="item in shoppingList" :key="item.id" class="list-group-item d-flex justify-content-between ">
        <span>{{ item.title }}</span>
        <button class="btn btn-sm btn-danger" @click="deleteItem(item)">Delete</button>
      </li>
    </ul>
    <div v-else>There are no items in the basket</div>
    <small v-if="shoppingList.length>0">There are {{ shoppingList.length }} items in the basket</small>
  </div>
</template>

<script setup>
import axios from "axios"
import {onMounted, ref} from "vue";

const onSave = (event) => {
  /*  alert(event.target.value);*/
  axios.post("http://localhost:3000/shoppingItems", {title: event.target.value, createdDate: new Date(), status: false})
      .then(response => {
        console.log("post", response)
        shoppingList.value.push(response.data)  //ekler eklemez gözüksün istiyoruz
        event.target.value = ""
        event.target.focus()
      })
}
const shoppingList = ref([])

const deleteItem = (item) => {
axios.delete(`http://localhost:3000/shoppingItems/${item.id}`).then(response => {
  console.log("delete", response)
  shoppingList.value= shoppingList.value.filter(i=>i.id!==item.id)  //direk sile basınca silmesi için
})

}
onMounted(() => {
  axios.get("http://localhost:3000/shoppingItems")
      .then(response => {
        shoppingList.value = response.data || []  //eger bir şey gelmezse boş bir data gönder
        console.log("shoppingList", shoppingList.value)
      })
})


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
