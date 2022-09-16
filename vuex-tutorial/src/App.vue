<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <p>{{$store.state.theme}}</p>
  <ul>
    <li v-for="status in $store.state.status" :key="status">{{status}}</li>
  </ul>
  <hr>
  <ul>
    <li v-for="(item,index) in electricItems" :key="index">{{item.title}}</li>
  </ul>
  <p>username: {{$store.state.userName}}</p>
  <button @click="changeUserName">Change Username</button>
  <router-view/>
  <hr><hr>
  <user-list></user-list>
  <new-user></new-user>
</template>
<script>
import {mapGetters} from "vuex";   /*mapActions ve mapMutations da vardır*/
import UserList from "@/components/UserList";
import NewUser from "@/components/NewUser";
export default {
  components: {UserList,NewUser},
  created() {
    console.log(this.$store.state.status);
    /*   console.log(this.$store.state.itemList.filter(item => item.type == "electric"));*/
    console.log(this.$store.getters.electricItems)
    console.log(this.$store.getters.activeUser) /* password olmadan kullanılır*/
    console.log(this.activeUser)

  },
  methods: {
    changeUserName() {
      this.$store.state.userName = "yskrc"
    }
  },
  computed: {
    ...mapGetters(["electricItems", "activeUser"]) /*artık electricItems deyip direk kullanabiliriz. Tekrar tekrar computed içinde metodları yazmak zorunda kalmadık*/  /*... kullandık yani spread operator kullanarak computed içerisinde o componente ait başka metodları kullanabiliriz*/

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
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
