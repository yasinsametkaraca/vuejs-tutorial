<template>
<h4 class="text-amber-50 bg-danger">{{ title }}</h4>
</template>

<script>
export default {
  name: "RedComp",
  props: ["title"],
  mounted() {
    console.log("RedComponent is mounted")
  },
  activated() { //keep alive ile activated ve deactivated hooks lar gelir.
    console.log("RedComponent is activated")
  },
  deactivated() {
    console.log("RedComponent is deactivated")
  }
}
</script>

<style scoped>

</style>