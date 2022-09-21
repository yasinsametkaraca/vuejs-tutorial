<template>
  <div class="flex m-4">
    <div>
      <h3>{{ username }}</h3>
    </div>
    <div>
      <input type="text" v-model="username"/>
    </div>
    <div>
      <button class="btn btn-primary mt-2" @click="increase">{{ counter }}</button>
    </div>
    <hr>
    <div>
      <oddOrEven :counter="counter" @odd-event="alertOdd"/>
      <!--veriyi alırken @ işareti, gönderirken : işareti kullanılır-->
    </div>
    <hr>
    <div>
      <h5>Name and Surname</h5>
      <input type="text" v-model="state.customer.name"/>
      <input type="text" v-model="state.customer.lastName"/>
      <p>{{state.customer.name}} {{state.customer.lastName}}</p>
    </div>
  </div>

</template>

<script setup>
import oddOrEven from "../components/ShowOddorEven.vue"
import Utils from "../composables/Utils.js"
import ReactiveExample from "../composables/ReactiveExample";   /*App.vue de aynı yaptığımız işleri burda composables olarak tanımladık projede içerik arttıkça böyle ayrı ayrı oluşturup composables içinden çağırabiliriz.*/

const {username, counter, increase, alertOdd} = Utils()
const {state}=ReactiveExample()
</script>