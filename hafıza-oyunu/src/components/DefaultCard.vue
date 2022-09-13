<template>
  <div class="game-card">
  </div>
</template>

<script>
export default {
  name: "Card",
  created() {

  }
}
</script>

<style scoped>

.game-card{
  width:202px;
  height:212px;
  border: 1px solid darkblue;
  border-radius:7px ;
  transition: box-shadow 0.7s;
  background-image: url("../assets/default.jpg");
  background-size: cover;
  background-position: center;
  margin-right: 20px;
  box-shadow: 0 9px 10px black;
}
.game-card:hover{
  box-shadow:   1px 10px 60px darkblue;
  transition: box-shadow 0.7s;
}
</style>