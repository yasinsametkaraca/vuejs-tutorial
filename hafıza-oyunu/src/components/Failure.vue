<template>
  <div class="failure-container">
    <h1 style="color:whitesmoke; font-size:4rem; font-weight: 1000; margin-bottom:3rem;">You did not guess correctly Game Over!!!</h1>
    <button  class="btn btn-danger btn-lg" @click="newGame">New Game</button>
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
.failure-container{
  background-color:firebrick;
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