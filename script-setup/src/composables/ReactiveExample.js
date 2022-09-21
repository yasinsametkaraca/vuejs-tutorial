import {reactive, watch} from "vue";

export default function(){
    const state = reactive({               /*reactive ler object almak zorundalar. Ref de object alabilir ama reactive tanımlasak daha iyi olur */ /*Reactiveler OptionApi deki data(){} gibidir. Birden fazla datayı böyle tutabiliriz.*/
        customer:{
            name:null,
            lastName:null
        },
        /*  username:null,*/
    })
    console.log(state)
    watch(()=>JSON.parse(JSON.stringify(state.customer)),(newCustomer,oldCustomer)=>{             /*JSON yapınca çalışıyor bu işlem*/
        console.log(oldCustomer)
        console.log(newCustomer)
    })

    return {state}
}