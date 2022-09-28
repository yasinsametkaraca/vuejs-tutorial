<template>
  <div class="container">
    <div class="row  mt-5">
      <div class="col-md-4 offset-4 card card-primary p-3 border"
           :class="{'border-primary' : state.isUser, 'border-success' : !state.isUser }">
        <h3
            :class="{'text-primary' : state.isUser, 'text-success' : !state.isUser }"
            class="text-center mb-3 mt-3">{{ state.isUser ? 'Login' : 'Sign up' }}</h3>
        <hr>
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label>E-Mail</label>
            <input v-model="state.user.email" type="email" class="form-control"
                   placeholder="Enter your e-mail address">
          </div>
          <div class="form-group">
            <label>Password</label>
            <input v-model="state.user.password" type="password" class="form-control" placeholder="Enter password">
          </div>
          <div class="button-container d-flex  flex-column align-items-center">
            <button type="submit" :class="{'btn-primary' : state.isUser, 'btn-success' : !state.isUser }"
                    class="btn btn-block mb-2">
              {{ state.isUser ? 'Login' : 'Sign up' }}
            </button>
            <a href="#" @click.prevent="state.isUser=!state.isUser" class="text-secondary">
              {{ state.isUser ? 'I am not a member' : 'I have a membership' }}
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router/dist/vue-router";
export default {
  name: "AuthView",
  setup() {
    const state = reactive({
      user: {
        email: null,
        password: null,
      },
      isUser: false
    })
    const store = useStore()
    const router= useRouter()
    const onSubmit = () => {
      store.dispatch("login",{...state.user,isUser:state.isUser})   // spread operator (...state.user) ile state.user içindeki email ve passwordu gönderiririz tek tek yazmayız.
          .then(response => {
            console.log(response)
            router.push("/")
          })
    }

    return {state, onSubmit,store,router}
  }
}
</script>

<style scoped>

</style>