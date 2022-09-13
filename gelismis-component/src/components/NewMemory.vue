<template>

  <div>
    <h1>New Memory componenti..</h1>
    <button @click="counter++">arttır</button>
    <p>{{counter}}</p>
  </div>

</template>




<script>
export default {
  data: function (){
    return {
      counter: 0
    }
  },
  destroyed() {
    console.log("destroyed")
  },
  activated() {
    console.log("activated")
  },
  deactivated() {
    console.log("deactivated")

  }
}

</script>


