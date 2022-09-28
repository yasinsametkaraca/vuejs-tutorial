<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success shadow mb-5">
    <a class="navbar-brand" href="/auth">Authentication</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" style="display: flex; justify-content: space-between">
      <ul class="navbar-nav mr-auto">
        <router-link class="nav-item" to="/"><a class="nav-link">Home</a></router-link>
        <router-link class="nav-item" to="/about"><a class="nav-link">About</a></router-link>
      </ul>
      <ul class="navbar-nav" :class="logoutClass">
        <li class="nav-item">
          <a @click.prevent="logout" class="nav-link" href="#">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router/dist/vue-router";

export default {
  name: "HeaderComp",
  setup(){
    const logout= ()=> {
      store.dispatch("logout")
      router.push("/auth")
    }
    const store = useStore()
    const router = useRouter()
    const logoutClass= computed(()=> {
      return {
        'd-none': !store.getters.isAuth   //isAuth true ise display : false olur
      }
    })
    return {logout,logoutClass,store,router}
  }
}
</script>

<style scoped>

</style>