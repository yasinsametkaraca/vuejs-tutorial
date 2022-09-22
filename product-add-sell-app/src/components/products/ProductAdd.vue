<template>
  <div class="loader" :style="isLoading"></div>
  <div class="container" :style="showContainer">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Product List</h3>
          <hr>
          <div class="form-group">

            <label>Product Name <!--{{$store.state.a.products}}--></label>
            <input v-model="state.product.title" type="text" class="form-control" placeholder="Ürün adını giriniz..">
          </div>
          <div class="form-group">
            <label>Count</label>
            <input v-model="state.product.count" type="number" class="form-control"
                   placeholder="Ürün adetini giriniz..">
          </div>
          <div class="form-group">
            <label>Price</label>
            <input v-model="state.product.price" type="number" class="form-control" placeholder="Ürün fiyatı giriniz..">
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea v-model="state.product.description" cols="30" rows="5"
                      placeholder="Ürüne ait bir açıklama giriniz..."
                      class="form-control"></textarea>
          </div>
          <hr>
          <button class="btn btn-primary" @click="saveProduct" :disabled="isDisabled">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {computed, reactive, ref} from "vue";
import {useStore} from "vuex"
import {onBeforeRouteLeave} from "vue-router/dist/vue-router";

export default {
  name: "ProductAdd",
  setup() {
    const store = useStore()
    const state = reactive({
      product: {
        title: "",
        count: null,
        price: null,
        description: "",
      }
    })
    const saveButton=ref(false)

    const saveProduct = () => {
      saveButton.value=true
      store.dispatch("addProduct", state.product)
    }

    const isDisabled = computed(() => (state.product.title.length>0 && state.product.count>0  && state.product.price>0) ? false : true)
    const isLoading = computed(() => (saveButton.value==true) ? 'display:block;' : 'display:none;')
    const showContainer = computed(() => (saveButton.value==true) ? 'display:none;' : '')

    onBeforeRouteLeave(() => {
      if((state.product.title.length>0 || state.product.count>0  || state.product.price>0 || state.product.description.length>0) && !saveButton.value){
        saveButton.value=false
        const answer = window.confirm(
            'Do you really want to leave? You have unsaved changes!'
        )
        if (!answer) return false
      }

    })

    return {state, store, saveProduct,isDisabled,saveButton,isLoading,showContainer}
  }
}
</script>

<style scoped>
.loader {
  margin: 200px auto;
  border: 20px solid #EAF0F6;
  border-radius: 50%;
  border-top: 20px solid #FF7A59;
  width: 200px;
  height: 200px;
  animation: spinner 4s linear infinite;
}

@keyframes spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>