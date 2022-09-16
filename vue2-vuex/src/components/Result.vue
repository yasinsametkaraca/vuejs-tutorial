<template>
  <div>
    <p class="counter-container">Counter : {{ counter }}</p>
  </div>
</template>
<script>
export default {
  // props : ["counter"],
  computed: {
    counter() {
      // return this.$store.state.counter * 2;
      return this.$store.getters.getDoubleCounter;
    },
  },
};
</script>
<style scoped>
.counter-container {
  border: 1px solid #aa7f08;
  background-color: #fbbd08;
  padding: 10px 5px;
  font-size: 20px;
  color: #000;
}
</style>
