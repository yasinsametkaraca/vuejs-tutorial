<template>
  <div class="card shadow w-50 b-2">
    <div>
      <button class="bg-danger" @click="activeComponent='RedComp'">Red Comp</button>
      <button class="bg-success" @click="activeComponent='GreenComp'">Green Comp</button>
      <button class="bg-primary" @click="activeComponent='BlueComp'">Blue Comp</button>
    </div>
    <hr>
<!--<red-comp :title="Red Component" ></red-comp>  Red componenti props ile veri alan green component i de slot ile veri alan component de olsa <component> yine çalışır
    <green-comp></green-comp>
    <blue-comp></blue-comp>-->
    <keep-alive>
      <component :is="activeComponent" title="Red Component (props)">
        <h3>Green Comp (Slots)</h3>
      </component>
    </keep-alive>
    <!--keepalive sayesinde her açılmada mounted olmaz-->
  </div>

</template>

<script>

import RedComp from "@/components/RedComp";
import BlueComp from "@/components/BlueComp";
import GreenComp from "@/components/GreenComp";
import {ref} from "vue";

export default {
  name: 'App',
  components: {
    RedComp,BlueComp,GreenComp
  },
  setup() {
    const activeComponent = ref("RedComp")
    return{
      activeComponent
    }
  }
}
</script>









<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
