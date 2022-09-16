<template>
  <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
    <ul class="nav nav-pills bg">
      <router-link exact active-class="active" style="margin:7px; font-size:large" to="/">Home</router-link>
      <router-link exact active-class="active" style="margin:7px; font-size:large" to="/about">About</router-link>
      <router-link  active-class="active" style="margin:7px; font-size:large" to="/user">User</router-link>
    </ul>

  </nav>
</template>

<script>
export default {
  name: "HeaderComp"
}
</script>

<style scoped>

</style>