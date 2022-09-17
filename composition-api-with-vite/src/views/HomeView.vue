<template>

  <h1>COMPOSABLES İLE YAPILAN KISIM (HOMEVİEW)</h1>
  <hr>
  <div style="display: block; ">
    <h2>{{ title }}</h2>
    <input type="text" v-model="title"/>
    {{ titleLength }}
    <hr>
    <p v-if="show">
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
      enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
    </p>
    <button @click="show=!show">Open/Close Description</button>
    <hr>
    <!--Fonksiyonla nasıl yapılır!-->
    <p v-if="show">
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
      enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
    </p>
    <button @click="toggleDescription">Open/Close Description</button>
    <hr>
    <button @click="counter++">Counter++ : {{ counter }} : {{ oddorEven }}</button>
    <hr>
    <input type="text" v-model="searchText"/>
    <p v-if="isTyping">he is writing now</p>
  </div>
</template>

<script>
import Counter from "../composables/Counter.js";
import Header from "../composables/Header.js";
import Search from "../composables/Search.js";
import Toggle from "../composables/Toggle.js";

export default {
  setup() {

    const {counter,oddorEven}=Counter()
    const {title,titleLength}=Header()
    const {show,toggleDescription}=Toggle()
    const {searchText,isTyping}=Search()


    return {
      title, show, toggleDescription, searchText, isTyping, titleLength, oddorEven,counter
    }
  }
}
</script>