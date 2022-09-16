<template>
  <div class="home">
    <p class="primary">Home</p>
  </div>
  <input type="text" @keydown.enter="goToUser">
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  },
  methods: {
    goToUser: function(e) {

      this.$router.push(`/user/${e.target.value}`)

      /*this.$router.push({
        name: 'UserComp',
        params: {
          userId:e.target.value
        },
        query: {
          type: 'UserDetail',
          user:'YSK'
        }
      })*/
    }
  }
}
</script>
