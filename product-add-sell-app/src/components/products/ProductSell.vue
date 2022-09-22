<template>
  <div class="loader" :style="isLoading"></div>
  <div class="container" :style="showContainer">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Product Sell</h3>
          <hr>
          <div class="form-group">
            <label>Product Name</label>
            <select class="form-control" @change="selectedProductMethod" v-model="selectedProduct">
              <option :value="null" selected disabled>Select Product</option>
              <option :disabled="product.count==0" :value="product.key" v-for="product in getProducts"
                      :key="product.key">{{ product.title }}
              </option>
            </select>
          </div>
          <div class="card mb-2 border border-danger" v-if="product!==null">
            <div class="card-body">
              <div class="row">
                <div class="col-12 text-center">
                  <div class="mb-3">
                    <span class="badge badge-info" style="margin-right:3px; ">Stock : {{ product.count }}</span>
                    <span class="badge badge-primary">Price : {{ product.price }}</span>
                  </div>
                  <p class="border border-warning p-2 text-secondary">{{ product.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label>Count</label>
            <input type="number" class="form-control" v-model="productCount">
          </div>
          <hr>
          <button @click="saveSell" class="btn btn-primary" :disabled="isDisabled">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {computed, ref} from 'vue'
import {useStore} from 'vuex'
import {onBeforeRouteLeave} from "vue-router/dist/vue-router";

export default {
  name: "ProductSell",
  setup() {
    const selectedProduct = ref(null)
    const store = useStore()
    const getProducts = computed(() => store.getters.getProducts)
    const product = ref(null)
    const selectedProductMethod = () => {
      product.value = store.getters.getProduct(selectedProduct.value)[0]
      console.log(product.value[0])
    }
    const productCount = ref(null)
    const saveSell = () => {
      saveButton.value = true
      let sellProduct = {
        key: selectedProduct.value,
        count: productCount.value
      }
      store.dispatch("sellProduct", sellProduct)
    }
    const saveButton = ref(false)
    onBeforeRouteLeave(() => {
      if ((selectedProduct.value !== null || productCount.value > 0) && !saveButton.value) {
        saveButton.value = false
        const answer = window.confirm(
            'Do you really want to leave? You have unsaved changes!'
        )
        if (!answer) return false
      }

    })
    const isDisabled = computed(() => (selectedProduct.value !== null && productCount.value) ? false : true)
    const isLoading = computed(() => (saveButton.value == true) ? 'display:block;' : 'display:none;')
    const showContainer = computed(() => (saveButton.value == true) ? 'display:none;' : '')
    return {
      getProducts,
      store,
      selectedProduct,
      selectedProductMethod,
      product,
      productCount,
      saveSell,
      isLoading,
      showContainer,
      isDisabled
    }
  }
}

</script>

<style scoped>
.border-danger {
  border-style: dashed !important;
}

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
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>