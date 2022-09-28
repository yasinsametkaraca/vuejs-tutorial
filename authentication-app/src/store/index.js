import {createStore} from 'vuex'
import axios from "axios"
import router from '@/router/index'

export default createStore({
    state: {
        token: "",
        firebaseAPI: "AIzaSyAAifH-VtRxwrm1mGGtA-ABWwgCMHKvYQQ"
    },
    getters: {
        isAuth(state) {
            return state.token !== ""  //boş değilse true döner. token yoksa giriş yapılamıcak
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        clearToken(state) {
            state.token = "";
        }
    },
    actions: {
        createAuth({commit,dispatch}) {   //her sayfa yenilendiğinde token storedan silinmemiş olucak geçerliliğini sağlayacak
            let token = localStorage.getItem("token");
            if (token) {
                let expirationTime=localStorage.getItem("expirationTime")
                let time = new Date().getTime()

                if (time >= parseInt(expirationTime)) {  //token süresi dolmuştur
                    dispatch("logout")
                }else{
                    commit("setToken", token)  //böylece storedan silinmemiş olucak
                    let remainingTime=parseInt(expirationTime)-time
                    console.log(remainingTime)
                    dispatch("setExpiresIn",remainingTime)  //her sayfa yenilendiğinde set timeout a kalan süreyi veriyoruz
                    router.push("/")
                }
            } else {
                router.push("/auth")
                return false
            }
        },
        login({commit, dispatch}, authData) {
            let loginorsignupLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAAifH-VtRxwrm1mGGtA-ABWwgCMHKvYQQ";
            if (authData.isUser) {
                loginorsignupLink = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAAifH-VtRxwrm1mGGtA-ABWwgCMHKvYQQ";
            }
            return axios.post(loginorsignupLink, {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            })  //AuthView e return ettik. ordan da push edicez.
                .then((response) => {
                    commit("setToken", response.data.idToken)
                    localStorage.setItem("token", response.data.idToken)
                    localStorage.setItem("expirationTime", new Date().getTime() + response.data.expiresIn * 1000)  //tokenin bitiş zamanı
                    dispatch("setExpiresIn",parseInt(response.data.expiresIn*1000))  //her sayfa yenilendiğinde set timeout a kalan süreyi veriyoruz
                })
        },
        logout({commit,}) {
            commit("clearToken")  //token boş olunca logout olur
            localStorage.setItem("token", "")
            localStorage.removeItem("expirationTime")
            router.push("/auth")
        },
        setExpiresIn({dispatch}, expiresIn) {   //expiresIn yani token süresi dolunca (firebase de 3600 ) logout olur
            setTimeout(() => {
                dispatch("logout")
            }, expiresIn)
        }
    },
    modules: {}
})
