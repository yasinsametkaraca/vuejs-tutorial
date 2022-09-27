<template>
  <div class="container">
    <h3 class="text-center mt-3">Vuelidate</h3>
    <div class="d-flex justify-content-center align-content-center flex-row">
      <div class="w-50 card p-4 mt-4 shadow">
        <form style="width: 350px" @submit.prevent="onSubmit">
          <div class="form-group" style="margin-top: 4px;">
            <label>E-mail</label>
            <input v-model="v$.userEmail.$model" type="email" class="form-control"
                   :class="{'is-invalid':v$.userEmail.$error}"
                   placeholder="E-Mail">
            <small v-if="v$.userEmail.$invalid" class="form-text text-danger">please enter a valid email address</small>
          </div>
          <div class="form-group" style="margin-top: 4px;">
            <label>Password</label>
            <input v-model="v$.password.$model" type="password" :class="{'is-invalid':v$.password.$error}"
                   class="form-control" placeholder="Password">
            <small v-if="v$.password.$invalid" class="form-text text-danger">your password must consist of
              numbers</small>
          </div>
          <div class="form-group" style="margin-top: 4px;">
            <label>Password</label>
            <input v-model="v$.repassword.$model" type="password" :class="{'is-invalid':v$.repassword.$error}"
                   class="form-control" placeholder="Password">
            <small v-if="v$.repassword.$invalid" class="form-text text-danger">password does not match</small>
          </div>
          <div class="form-group" style="margin-top: 4px;">
            <label>Age</label>
            <input v-model="v$.age.$model" type="text" :class="{'is-invalid':v$.age.$invalid}" class="form-control"
                   placeholder="Age">
            <small v-if="v$.age.$invalid" class="form-text text-danger">{{ v$.age.between.$message }}</small>
          </div>
          <div class="form-group" style="margin-top: 4px;">
            <label>Category</label>
            <select v-model="v$.selectedCategory.$model" :class="{'is-invalid':v$.categories.$invalid}"
                    class="form-control" style="margin-top: 4px;">
              <option :key="category.id" v-for="category in state.categories" :value="category">{{ category }}</option>
            </select>
            <small v-if="v$.categories.$invalid" class="form-text text-danger">You can only choose the hardware</small>
          </div>
          <div>
            <a @click="addHobby" class="text-white btn btn-secondary rounded-0 btn-sm" style="margin-top: 4px;">Add Your
              Hobbies</a>
          </div>
          <small v-if="v$.hobbies.$invalid" class="form-text text-danger">{{ v$.hobbies.minLength.$message }}( min 2
            count)</small>
          <ul class="list-group mt-3 mb-3 border-0">
            <li style="margin-top: 4px;" :key="index" v-for="(hobby,index) in state.hobbies"
                class="list-group-item d-flex pl-2">
              <input type="text" class="form-control mr-2" v-model="hobby.value">
              <button class="btn btn-sm btn-danger rounded-0" @click="state.hobbies.splice(index, 1)">Sil</button>
            </li>
          </ul>

          <button class="btn btn-primary rounded-0" :disabled="v$.$invalid">Save</button>
          <!--Hepsi geçerliyse buton aktif olur-->
        </form>
      </div>
      <div class="card w-50 p-4 shadow mt-4 ml-5">
        <p>{{ v$.categories }}</p>
      </div>
    </div>

  </div>
</template>

<script>
import {useVuelidate} from '@vuelidate/core'
import {email, minLength, numeric, required, sameAs, between} from '@vuelidate/validators'
import {computed, reactive} from "vue";

export default {
  setup() {
    const state = reactive({
      userEmail: null,
      password: null,
      repassword: null,
      selectedCategory: "Hardware",
      age: null,
      categories: ["Software", "Hardware", "Cloud", "Servers"],
      hobbies: []
    })
    const passwordRef = computed(() => state.password);              //sameAs için yazılmıştır

    const rules = computed(() => {
          return {
            userEmail: {
              required,
              email,
              unique: (value) => {
                return value !== 'ysk@gmail.com' ? true : false    //eşit değilse true döner yani biz databaseden (asyc yapmalıyız yani return ederken axios.get("url").then(res=>{return value !== res ? true : false}))emaili kontrol etmiş oluruz aynıysa false olur. Kullanıcıdan farklı e mail girmesini isteriz
              },
            },
            password: {required, numeric, minLength: minLength(8)},
            repassword: {required, numeric, minLength: minLength(8), sameAs: sameAs(passwordRef)},
            age: {required, numeric, between: between(17, 34)},     //17 ve 34 yaş aralığında olmalı
            selectedCategory: {},
            categories: {
              checked(val, vm) {                                          //kendimize ait bir fonksiyon ile yaptık (checked())
                return vm.selectedCategory === "Hardware" ? true : false;
              }
            },
            hobbies: {required, minLength: minLength(2)}
          }
        }
    )
    const v$ = useVuelidate(rules, state)
    const onSubmit = () => {
      let form = {
        email: state.email,
        password: state.password,
        category: state.categories,
        hobbies: state.hobbies
      }
      console.log(form)
    }
    const addHobby = () => {
      let hobby = {
        id: Math.random(),
        value: ""
      }
      state.hobbies.push(hobby)
    }
    return {v$, state, onSubmit, addHobby}
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
