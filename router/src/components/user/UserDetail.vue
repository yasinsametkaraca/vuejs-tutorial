<template>
<div>
  <h3>user details</h3>
  <hr>
  <p>User Id: {{$route.params.userId}}</p>
  <hr>
  <router-link :to="{name:'UserEdit', params:{userId:$route.params.userId}, query:{username:'ysk'}, hash:'#data'}">Edit User</router-link> <!--:to="'/user/'+$route.params.userId+'/edit'"-->
</div>
</template>

<script>
export default {
  name: "UserDetail",

}
</script>

<style scoped>

</style>