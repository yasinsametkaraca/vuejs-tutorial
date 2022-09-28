<template>
<!--  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>-->
  <div>
    <HeaderComp></HeaderComp>
    <router-view/>
  </div>
</template>
<script>
import HeaderComp from "@/components/HeaderComp";
import {useStore} from "vuex";
export default {
  components:{
    HeaderComp,
  },
  setup() {
    const store = useStore()
    store.dispatch("createAuth")  //her sayfa yenilendiğinde token storedan silinmemiş olucak geçerliliğini sağlayacak (setup() create yerine geldi)
    return {store}
  }
}


</script>

