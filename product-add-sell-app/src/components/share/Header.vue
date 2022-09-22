<template>
  <nav class="navbar  navbar-dark navbar-expand-lg " style="background-color: darkgreen">
    <router-link active-class="active" to="/"><a class="navbar-brand" href="#">Product List</a></router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link active-class="active" to="/product-add"><a class="nav-link">Add</a></router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="active" to="/product-sell"><a class="nav-link">Sell</a></router-link>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script>
export default {
  name: "HeaderComp"
}
</script>

<style scoped>

</style>