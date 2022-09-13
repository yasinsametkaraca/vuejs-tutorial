<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3">
      <h3 v-custom-on:click="method">Directive</h3>
      <button v-custom-on:click="clicked" class="btn btn-primary">Alert
      </button>
    </div>
    <div class="custom" v-custom-on:mouseleave="mouseLeave" v-custom-on:mousemove="mouseOn" ></div>
  </div>
</template>

<script>
export default {
  directives:{
    customOn:{
      bind(el,binding){
        let type=binding.arg
        let fn=binding.value
        el.addEventListener(type,fn)
        }
      }
    },

  methods:{
    clicked(){
      alert()
    },
    mouseLeave(){
      console.log("mouseleave")
    },
    mouseOn(){
      console.log("mouseon")
    },

}
}
</script>

<style>
.custom{
  height: 50px;
  width: 50px;
  border: 3px solid red;
}
</style>
