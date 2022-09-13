<template>
<div class="container">
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <br><br>
      <button @click="selectedComponents='appMemory'" class="btn-sm btn btn-primary">appMemory</button>
      <button @click="selectedComponents='appNewMemory'" class="btn-sm btn btn-primary">appNewMemory</button>
      <button @click="selectedComponents='appAuthor'" class="btn-sm btn btn-primary">appAuthor</button>
      <p>{{selectedComponents}}</p>
      <keep-alive>
        <component :is="selectedComponents">
          <h1 slot="heading">başlık</h1>
          <p >bu çok güzel anıydı..</p>
        </component>
      </keep-alive>


    </div>
  </div>
</div>
</template>

<script>
import Memory from "./components/Memory"
import NewMemory from "./components/NewMemory"
import Author from "./components/Author"


export default {
  components:{
    appMemory:Memory,
    appNewMemory:NewMemory,
    appAuthor:Author
  },
  data: function (){
    return{
      selectedComponents: "appMemory"
    }
  }
}
</script>

