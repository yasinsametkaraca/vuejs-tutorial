<template>
  <div class="celebrate-container">
    <h1 style="color:darkolivegreen; font-size:4rem; font-weight: 1000; margin-bottom:3rem;">Congratulations!!! You answered correctly.</h1>
    <button  class="btn btn-success btn-lg" @click="newGame">New Game</button>
  </div>

</template>

<script>
export default {
  methods: {
    newGame: function ()  {
      this.$emit("gameComponentEvent","appGameCards");
    }
  }
}
</script>

<style scoped>
.celebrate-container{
  background-color:lightgrey;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
}

</style>