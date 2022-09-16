<template>

<div class="form-control card">
  <div class="mb-3">
    <label for="Title" class="form-label">Title</label>
    <input type="text" class="form-control" id="Title" placeholder="Title" v-model="favouriteWebsitesData.title">
  </div>
  <div class="mb-3">
    <label for="Url" class="form-label">Url</label>
    <input type="text" class="form-control" id="Url" placeholder="Url" v-model="favouriteWebsitesData.url">
  </div>
  <div class="mb-3">
    <label for="Description" class="form-label">Description</label>
    <textarea class="form-control" id="Description" placeholder="Description" v-model="favouriteWebsitesData.description"></textarea>
  </div>
  <div class="d-block">
    <button style="width: 100%; margin-bottom:0.5rem" class="btn btn-sm btn-secondary" @click="$router.push('/')">Back</button>
    <button style="width: 100%;" class="btn btn-sm btn-primary" @click="saveFavouriteWebsite">Save</button>
  </div>
</div>
</template>

<script>
import NewFavouriteWebsiteService from "@/services/NewFavouriteWebsiteService";

export default {
  name: "NewFavouriteWebsite",
  data(){
    return {
      favouriteWebsitesData : {
        title: null,
        url:null,
        description: null
    }
  }
},
  methods: {
    saveFavouriteWebsite(){
      console.log(this.favouriteWebsitesData)
      NewFavouriteWebsiteService.setfavouriteWebsite(this.favouriteWebsitesData)
          .then(response => {
            console.log(response)
            this.cleanForm()
          })
    },

    cleanForm() {
      Object.keys(this.favouriteWebsitesData).forEach(key => (this.favouriteWebsitesData[key]=null))
    },

  }
}

</script>

<style scoped>

</style>