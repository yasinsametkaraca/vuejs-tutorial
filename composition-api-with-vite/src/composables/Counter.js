import {ref, computed, watch} from "vue";

export default function () {
    const counter = ref(0);
    const oddorEven = computed(() => (counter.value % 2 == 0 ? 'Even' : 'Odd'));

    /*watch([counter,oddorEven], (newValue, oldValue) => {
      console.log(oldValue,"=>",newValue)   /!*[0,'Even'] '=>' [1, 'Odd']*!/
    });*/

    watch([counter, oddorEven], ([newCounter, newoddorEven], [oldCounter, oldoddorEven]) => {
        console.log(oldCounter, "=>", newCounter)
        console.log(oldoddorEven, "=>", newoddorEven)
    });

    return {counter, oddorEven}
}