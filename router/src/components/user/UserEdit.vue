<template>
<div>
  <hr>
  <h3>User Edit</h3>
  <hr>
  <p>Username: {{$route.query.username}}</p>
  <button class="btn btn-success" @click="save=true">Save</button>
  <div style="height: 800px;"></div>
  <p id="data">Scrool Behavior</p>
</div>
</template>

<script>
import { ref} from "vue";
import {onBeforeRouteLeave} from "vue-router/dist/vue-router";

export default {
  name: "UserEdit",
  setup(){
    const save=ref(false)
    onBeforeRouteLeave((to, from,next) => {
      console.log(to,from)
      // cancel the navigation and stay on the same page
      if(save.value){
        next()
      }else {
        const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
        if (answer){
          next()
        }else {
          next(false)
        }
      }
    })
    return{save,}
  }
}
</script>

<style scoped>

</style>