<template>
  <div class="about">
    <h1>This is an about page</h1>
    <hr>
    <button class="btn btn-success" @click="navigateHome">Back</button>
  </div>
</template>
<script>
import router from "@/router";
export default {
  setup(){
    const navigateHome =()=> {
      router.push('/');
    }

    return{navigateHome}
  }
}

</script>
