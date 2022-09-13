<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div>{{mesaj.toUpperCase() | toUpper | toLower}}</div>
        <div>{{mesaj.toUpperCase()}}</div>
        <button @click="products.push('kamyon (sadece oraya eklendi alttakine eklenmez)')" class="btn btn-primary">kamyon ekle</button>
        <input type="text" v-model="searchText">
        <ul>
          <li v-for="product in filteredText">{{product}}</li>
        </ul>
        <app-filters></app-filters>
        <hr><hr>

        <p>Mixin Ornek</p>

        <AppOrnek></AppOrnek>

      </div>
    </div>
  </div>
</template>

<script>
import Filters from "./Filters";
import ornek from "./Ornek";

export default {
  components:{
    appFilters:Filters,
    appOrnek:ornek
  },
  data(){
    return{
      mesaj: "ysk",
      searchText:"",
      products:["tv","masa","kalem","sandalye","yazıcı"]
    }
  },
    filters: {
      toUpper(value) {
        return value.toUpperCase()
      }
    },

    computed:{
      filteredText(){
        return this.products.filter((product)=>{
          return product.match(this.searchText)
        })
      }
    },
  created() {
    console.log("app mixin")
  }


}
</script>

<style>

</style>
