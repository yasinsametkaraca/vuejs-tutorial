import axios from "axios";
import router from "../../router";

export default {
    state: {
        products: []
    },
    getters: {
        getProducts(state) {
            return state.products
        },
        getProduct(state) {
            return productKey => state.products.filter(el => {
                return el.key == productKey                         //productsell componentinden aldığımız key state içinden olan key e (el olarak yazıldı) eşitse
            })
        }
    },
    mutations: {
        updateProductList(state, product) {
            state.products.push(product)
        }
    },
    actions: {
        productlistFirebase({commit}) {
            axios.get("https://product-add-sell-default-rtdb.firebaseio.com/products.json")
                .then((response) => {
                    console.log("product listele", response, commit)
                    let productData = response.data
                    for (let key in productData) {
                        productData[key].key = key   //object içerisine key adında key ekledik
                        commit("updateProductList", productData[key])
                    }
                })
        },
        addProduct({dispatch, commit, state}, product) {
            axios.post("https://product-add-sell-default-rtdb.firebaseio.com/products.json", product)
                .then((response) => {
                    console.log(response)
                    product.id = response.data.name  //gelen veriye id yi de ekliyoruz id bize gelen response vardır. (Firebaseden dolayı böyledir)
                    commit("updateProductList", product)   //formdan aldığımız veri+id yi state deki products a ekledik çünkü bunu productlist de listelicez
                    console.log(state.products)
                    let productResult = {
                        purchase: product.price,
                        sale: 0,
                        count: product.count
                    }
                    dispatch("setProductResult", productResult)
                    router.replace("/")


                })
        },
        sellProduct({dispatch,state, commit}, payload) {
            let product = state.products.filter(el => {  //burada products un adresini alıyoruz yani değişiklikler ana products ımızı etkiler (pass by reference/value)
                return el.key == payload.key
            })
            if(product){
                let lastCount=product[0].count-payload.count  //productun adresi olduğundan yine aynı şekilde product[0] yaptık
                axios.patch("https://product-add-sell-default-rtdb.firebaseio.com/products/" + payload.key + ".json", {count: lastCount})  //patch in mantığı bulup değiştirmek içindir.
                    .then((response) => {
                        console.log("count response", response,commit)
                        product[0].count=lastCount
                        let productResult = {
                            purchase: 0,
                            sale: product[0].price,
                            count: payload.count
                        }
                        dispatch("setProductResult", productResult)
                        router.replace("/")
                    })
            }

        }
    }
};
