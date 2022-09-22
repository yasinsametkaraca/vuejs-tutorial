<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-5 card mt-5 shadow">
        <div class="card-body">
          <h3>Product List</h3>
          <hr>
          <table class="table table-hover table-striped table-bordered" v-if="$store.getters.getProducts.length>0">
            <thead>
            <th>id</th>
            <th>Product Name</th>
            <th>Count</th>
            <th>Price</th>
            <th>Description</th>
            </thead>
            <tbody>
            <tr v-for="product in $store.getters.getProducts" :key="product.key">
              <td>{{product.key}}</td>
              <td>{{ product.title }} </td>
              <td :class="countClass(product.count)">{{ product.count }} </td>
              <td style="width: 120px;">{{ product.price}}</td>
              <td>{{product.description }}</td>
            </tr>
            </tbody>
          </table>
          <div class="alert alert-warning" v-else>
            <strong>No Product Found</strong>
            <br>
            <small>You can use the add menu to add a record.
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>


export default {
  name: "ProductList",
  setup(){
    const countClass= (count)=>{
      return {
        'text-white btn-success' : count>0,
        'text-white btn-danger' : count==0,
      }
    }
    return {countClass}
  }

}
</script>

<style scoped>

</style>