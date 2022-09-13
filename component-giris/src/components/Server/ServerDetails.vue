<template>
  <div class="col-xs-12 col-sm-6">
    <p>Sunucu Bilgisi güncel değil!!</p>
    <h3>{{server.id}}</h3>
  </div>
</template>
<script>
import {eventBus} from "../../main";

export default {
  data: function (){
    return {
      server:{}
    }
  },
  created() {
    eventBus.$on("serverDataSend",(data)=>{
      this.server=data
    })
  }
}
</script>