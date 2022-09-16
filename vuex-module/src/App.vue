<template>
  <p>
    {{ $store.state.mainName }}
  </p>

  <p>
    {{ $store.state.customer.contactName }}
  </p>

  <pre>
    {{ musteriADI }}
  </pre>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  created() {
    console.log(this.$store.getters["customer/_contactName"]);
  },
  computed: {
    ...mapGetters({
      musteriADI: "customer/_contactName"
    })
  }
};
</script>