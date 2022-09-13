<template>
<div>
  <p>{{message | reverseMessage }}</p>
</div>
</template>

<script>
export default {
  name:"Mixin",
  data(){
    message:'YSK'
  },
  filters:{
    reverseMessage(value){
      return value.split("").reverse().join("");
}
  }
}
</script>

<style scoped>

</style>