<template>
  <div>
    <button class="btn btn-success" @click="incrementCounter">+</button>
    <button class="btn btn-danger" @click="decrementCounter">-</button>
  </div>
</template>

<script>
export default {
  methods: {
    incrementCounter() {
      this.$emit("counterEvent", 1);
    },
    decrementCounter() {
      this.$emit("counterEvent", -1);
    },
  },
};
</script>

<style></style>
