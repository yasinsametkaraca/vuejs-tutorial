<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5 col-md-offset-3">
        <app-result :counter="counter"></app-result>
        <hr />
        <app-counter @counterEvent="counter += $event"></app-counter>
      </div>
    </div>
  </div>
</template>

<script>
import Result from "./components/Result";
import Counter from "./components/Counter";
export default {
  data() {
    return {
      counter: 0,
    };
  },
  components: {
    appResult: Result,
    appCounter: Counter,
  },
};
</script>

<style></style>
