<template>
  <div>
    <button @click="update">Update</button>  <!--Burada yaptığımız değişiklik app.vue da olanları da etkiler-->
    <hr>
    <input type="text" v-model="storeValue">
    <p>{{storeValue}}</p>
  </div>
</template>

<script>
export default {
  name: "NewUser",
  methods: {
    update(){
      /*this.$store.commit("newItem",{id:4, title: 'priz',type: 'electric',})   /!*mutation = yani set edip eleman ekledik*!/*/
      this.$store.dispatch("newItem",{id:4, title: 'priz',type: 'electric',})  /*action=yine aynı işi yaptık ama asenkron olarak yapılması gerekirse diye action yaptık. (Her basışta 2 saniye sonra çalışır) */
 /*dom içeresinde mutations ve actions a parametre gönderilebilir. Örneğin: newItem({name:ysk}) diyerek actions kısmındada fonksiyon parametresi commitin yanına bir parametre daha veririz.*/
    }
  },
  computed: {
    storeValue: {
      get() {
        return this.$store.getters.getStoreValue
      },
      set(storeValue){
          this.$store.dispatch("setStoreValueAsync",storeValue);
      }
    }
  }
}
</script>

<style scoped>

</style>