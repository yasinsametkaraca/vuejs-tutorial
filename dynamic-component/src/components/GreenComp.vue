<template>
  <h4 class="text-amber-50 bg-success">Green Component</h4>
  <slot></slot>
</template>

<script>
export default {
  name: "GreenComp",
  mounted() {
    console.log("GreenComponent is mounted")
  },
  activated() {    //keep alive ile activated ve deactivated hooks lar gelir.
    console.log("GreenComponent is activated")
  },
  deactivated() {
    console.log("GreenComponent is deactivated")
  }
}
</script>

<style scoped>

</style>