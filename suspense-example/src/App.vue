<template>  <!--dataya göre uygulamaların yüklenmesini istiyoruz ve componentlerin kullanılmadığında asenkron olmasını istiyoruz --> <!--suspense bileşenini, bir bileşen içinde başka bir bileşeni kullanıyorsanız o bileşen yüklenene kadar bir varsayılan göstermek, ya da bir bileşen ilk oluşturulduğunda gerekli veriler sunucudan gelene kadar bu defaultu göstermek için kullanabillirsiniz.-->
    <span v-if="error" class="error">{{error}}</span>
    <suspense v-else>  <!--Bütün aksiyonlar tamamlanmadan bu todos comp gözükmesin öncesinde loading gözüksün istersek kullanırız-->
      <template #default>
        <div>
          <user-comp></user-comp>
          <hr>
          <todos-comp></todos-comp>
        </div>
      </template>
      <template #fallback>   <!--//sayfa yüklenene kadar burası çalışır-->
        <div class="loader"></div>
      </template>
    </suspense>
</template>

<script setup>
/*import TodosComp from "./components/TodosComp.vue"*/
/*import UserComp from "./components/UserComp.vue"*/
import {defineAsyncComponent, onErrorCaptured, ref} from "vue";
const TodosComp = defineAsyncComponent(()=> import("./components/TodosComp.vue"))   //componentlerimizi performansa göre asenkron olarak yükleyebiliriz.
const UserComp = defineAsyncComponent(()=> import("./components/UserComp.vue"))   //componentlerimizi performansa göre asenkron olarak yükleyebiliriz.

const error=ref(null)
onErrorCaptured((e)=> {  //kullanıcıya hataları göstermek için kullanırız
  error.value = e
  return true
})
</script>

<style scoped>
.error { background-color: brown}

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
