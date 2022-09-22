import {createStore} from 'vuex'
import product from './modules/product.js'
import axios from "axios";

export default createStore({
    state: {
        purchase: 0.0,   //footer için
        sale: 0.0,
        balance: 0.0,
    },
    getters: {
        getProductResult(state) {
            return {
                purchase: state.purchase,
                sale: state.sale,
                balance: state.balance
            }
        },
    },
    mutations: {
        updateProductResult(state, payload) {
            if(payload.count){
                state.purchase += parseFloat(payload.purchase) * parseInt(payload.count)
                state.sale += parseFloat(payload.sale) * parseInt(payload.count)
            }else{
                state.purchase += parseFloat(payload.purchase)
                state.sale += parseFloat(payload.sale)
            }
            state.balance = parseFloat(state.sale) - parseFloat(state.purchase)
        }
    },
    actions: {
        setProductResult({state, commit}, productResult) {
            console.log(state)
            commit("updateProductResult", productResult) /* store da ki verileri güncellemek için*/
            let resultData = {
              purchase:state.purchase,
              sale:state.sale
            }
            axios.put("https://product-add-sell-default-rtdb.firebaseio.com/product-result.json",resultData)   //verileri firebase e yazdırmak için  /*put kullanmamızın sebebi zaten varolan kayıtın üzerine yazmak istememiz zaten bir kayıt var */
                .then((response)=> {
                  console.log(response)
                })
        },
        getProductResult({commit}) {
            console.log(commit)        //firebaseden verileri sayfa yüklenince getirmek için
            axios.get("https://product-add-sell-default-rtdb.firebaseio.com/product-result.json")
                .then((response) =>{
                    console.log(response)
                    commit("updateProductResult",response.data)
                })
        },
    },
    modules: {
        a: product
    }
})
