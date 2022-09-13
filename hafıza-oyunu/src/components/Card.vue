<template>
    <div class="game-card">
      <img style="border-radius: 6px;" :src="card.image">
    </div>
</template>

<script>
export default {
  props: ["card"]

}
</script>

<style scoped>

.game-card{
  width:202px;
  height:214px;
  border: 1px solid darkblue;
  border-radius:7px ;
  margin-right: 20px;
  transition: box-shadow 0.7s;
}
.game-card:hover{
  box-shadow:   1px 10px 60px darkblue;
  transition: box-shadow 0.7s;
}
</style>