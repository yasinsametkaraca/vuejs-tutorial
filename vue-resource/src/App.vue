<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7 col-md-offset-3">
        <h3>Vue-Resource</h3>
        <div class="form-group">
          <input type="text" class="form-control" v-model="userName">
        </div>
        <button class="btn btn-primary" @click="saveUser">Submit</button>
        <button class="btn btn-success" @click="getUsers">Listing Data</button>
        <hr>
        <ul class="list-group">
          <li class="list-group-item" v-for="user in userList">
            <span>{{ user.data.userName }}</span>
            <button class="btn btn-xs btn-danger" @click="deleteUser(user.key)">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userName: null,
        userList: [],
        resource : {}
      }
    },
    methods: {
      saveUser() {
        // this.$http.post("users.json", {userName: this.userName})
        //   .then((response) => {
        //     console.log(response);
        //   })
        // this.$resource("users.json").save({}, { userName : this.userName })
        this.resource.saveList({}, { userName : this.userName });
      },
      getUsers() {
        this.$resource("users.json").get()   /*main.js de firebase servisi (url) tanımlıdır.*/
          .then((response) => {
            return response.json();  /*userlist main.js de direk aktarmıştık. Burda return edilen userList dir. */
          }).then(data => {
          for (let key in data.userList) {
            this.userList.push(
              {
                key : key,
                data : data.userList[key]
              }
            );
          }
        })
      },
      deleteUser(userKey){
         /*this.$http.delete("users/" + userKey + ".json")
           .then(response => {
             console.log(response);
           })*/
        this.$resource("users/"+userKey+".json").delete()
      }

    },
    created(){
      const customActions = {
        saveList : { method : "POST", url : "users.json"}
      };
      this.resource = this.$resource("users.json", {}, customActions);
    }
  }
</script>

<style>
</style>
