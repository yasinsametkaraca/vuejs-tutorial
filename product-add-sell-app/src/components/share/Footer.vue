<template>
  <nav class="navbar fixed-bottom  navbar-light" style="background-color: #e3f2fd;">
    <span class="navbar-text mr-auto">
        <strong>YSK AVM</strong>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Purchase Price : </strong>
        <span class="badge badge-danger">{{ getProductResult.purchase }}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Sale Price : </strong>
        <span class="badge badge-success">{{ getProductResult.sale }}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0">
        <strong>Balance : </strong>
        <span class="badge badge-primary">{{ getProductResult.balance }}</span>
    </span>
  </nav>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "FooterComp",
    computed: {
      ...mapGetters(['getProductResult'])
    },
    setup(){
      /*const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })*/
      return
    }
}
</script>

<style scoped>


</style>