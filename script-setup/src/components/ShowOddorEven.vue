<template>
<h4>{{props.counter}} : {{oddorEven}}</h4>
</template>

<script setup>
import {computed, watch} from "vue";

const props=defineProps({counter:Number})  /*script setup da props bu şekilde tanımlanır.*/
const oddorEven= computed(() => (props.counter % 2 ===0 ? "EVEN" : "ODD"))

const emit=defineEmits() /*setup da setup(props,context) yaptığımız da context olan durumdur*/
watch(oddorEven, (oddorEven) => {
 if(oddorEven==="ODD"){
   emit("odd-event",true)
 }
})




</script>
