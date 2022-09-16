<template>
    <div>
      <hr>
      <router-view></router-view>
      <hr>
      <button class="btn btn-success" @click="navigateHome">Back</button>
      <hr>
    </div>
</template>

<script>
import router from "@/router";
export default {
  name: "UserComp",
  setup(){
    const navigateHome =()=> {
      router.push('/user');
    }

    return{navigateHome}
  },
  /*methods: {
    navigateHome() {
      this.$router.push('/')
    }
  },*/
  created() {
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>