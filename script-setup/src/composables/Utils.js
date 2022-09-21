import {ref} from "vue";

export default function(){
    const username = ref("YSK")  /*expose kullanmadık çünkü script setup bunları otomatik yapar ve otomatik return eder*/
    const counter = ref(0)
    const increase= ()=> {
        counter.value++
    }
    const alertOdd= (odd)=> {
        alert(odd)
    }

    return {username,counter,increase,alertOdd}
}