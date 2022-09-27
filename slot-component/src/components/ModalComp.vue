<template>        <!--Modal Componenti içerisinde yazan içerikleri nasıl dinamikleştiririz. İlk önce props ile yaptık onSave ve :title ve html etiketi göndererek v-html ile yaptık ama tabiki birsürü göndermek istediğimiz şeyler olabilir bu yüzden slot ile yaptık.-->
  <div class="card shadow w-50">
    <div class="header mt-3">
      <h3>{{ title }}</h3>
      <hr>
    </div>
    <div class="content" v-html="content">

    </div>
    <div class="footer d-flex justify-content-end mr-3 mb-3">
      <button class="btn btn-warning">Close</button>
      <button @click="onSave" class="btn btn-primary">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComp",
  props: ['title','content','onSave'],

}
</script>

<style scoped>

</style>