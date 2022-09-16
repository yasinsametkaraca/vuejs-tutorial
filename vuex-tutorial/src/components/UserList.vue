<template>
<ul>
  <li v-for="(item,index) in electricItems" :key="index">{{item.title}}</li>
</ul>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "UserList",
  computed: {
    ...mapGetters(["electricItems"]) /*artık electricItems deyip direk kullanabiliriz*/

  }
}
</script>

<style scoped>

</style>