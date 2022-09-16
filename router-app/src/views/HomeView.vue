<template>
  <div class="card border p-2">
  <div class="d-flex ">
    <button class="btn btn-sm btn-primary" @click="$router.push({name:'NewFavouriteWebsite'})">Add New Favourite Website</button>
  </div>
    <br>
  <table class="table table-success table-hover table-striped-rows">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Url</th>
      <th scope="col">Delete</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(favouriteWebsite,index) in favouriteWebsiteList" :key="index">
      <th scope="row">{{favouriteWebsite.id}}</th>
      <td>{{ favouriteWebsite.title }}</td>
      <td>
        <a :href="favouriteWebsite.url" target="_blank">{{favouriteWebsite.url}}></a>
      </td>
      <td>
        <button class="btn btn-sm btn-danger" @click="deletefavouriteWebsite(favouriteWebsite)">Delete</button>
      </td>
    </tr>

    </tbody>
  </table>
  </div>
</template>

<script>

import NewFavouriteWebsiteService from "@/services/NewFavouriteWebsiteService";

export default {
  name: 'HomeView',
  data() {
    return{
      favouriteWebsiteList:[]
    }
  },
methods: {
  deletefavouriteWebsite(favouriteWebsite){
    NewFavouriteWebsiteService.deletefavouriteWebsite(favouriteWebsite.id)
        .then(response => {
          if(response.status==200){
            this.favouriteWebsiteList=this.favouriteWebsiteList.filter(bm=>bm.id!==favouriteWebsite.id)
            console.log(this.favouriteWebsiteList)
          }
        })
  },
},
  created() {
    NewFavouriteWebsiteService.getfavouriteWebsite()
         .then(response => {
           this.favouriteWebsiteList=response.data || []
           console.log(response)
         })
  }
}
</script>
