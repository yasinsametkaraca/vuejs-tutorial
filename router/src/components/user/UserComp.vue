<template>
    <div>
      <h2>User</h2>
      <hr>
      <button class="btn btn-success" @click="navigateHome">Home</button>
    </div>
</template>

<script>
import router from "@/router";
export default {
  name: "UserComp",
  setup(){
    const navigateHome =()=> {
      router.push('/');
    }

    return{navigateHome}
  }
}
</script>

<style scoped>

</style>