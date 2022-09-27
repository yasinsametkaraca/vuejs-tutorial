<template>

  <modal-comp :onSave="onSave" :title="'YSK'" :content="content"></modal-comp>
  <hr><hr><hr><hr><hr><hr>

  <modal-compwith-slot>
    <template #title>
      <h3>Slot YSK</h3>
    </template>
    <template v-slot:content> <!-- #content adıyla da kulllanılabilir-->
      <p>Welcome to YSK app... Welcome to YSK app... Welcome to YSK app... Welcome to YSK app... Welcome to YSK app... Welcome to YSK app... Welcome to YSK app... Welcome to YSK app...</p>
    </template>
    <template #default>
      <p>Her türlü gösterilir. ModalCompwithSlot Componentinde name olarak tanımlamamıza gerek yok.</p>
    </template>
  </modal-compwith-slot>
</template>


<script>
import ModalComp from "./components/ModalComp"
import ModalCompwithSlot from "@/components/ModalCompwithSlot";
import {ref} from "vue";
export default {

  name: 'App',
  components: {
    ModalComp,
    ModalCompwithSlot
  },
  setup(){
    const onSave = () => {
      alert("Saved")  //props ile yapılınca
    }
    const content = ref(`<p>Welcome to YSK app... Welcome to YSK app... Welcome to YSK app... Welcome to YSK app... Welcome to YSK app... Welcome to YSK app... Welcome to YSK app... Welcome to YSK app...</p>`)
    return {onSave,content}
  }
}
</script>





<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
