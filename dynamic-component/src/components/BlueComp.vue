<template>
  <h4 class="text-amber-50 bg-primary">Blue Component</h4>
  <input>  <!--input içerisine birşey girilince ve sonra başka componente tıklanırsa içinde yazı kaybolur çünkü her basısta bu dinamik componentler mounted olur. Böyle olsun istemezsek keepalive kullanırız. (app.vue içinde kullandım)-->
</template>

<script>
export default {
  name: "BlueComp",
  mounted() {
    console.log("BlueComponent is mounted")
  },
  activated() {  //keep alive ile activated ve deactivated hooks lar gelir.
    console.log("BlueComponent is activated")
  },
  deactivated() {
    console.log("BlueComponent is deactivated")
  }
}
</script>

<style scoped>

</style>