<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
        <app-server @click.native="sendToDetails(server)" v-for="server in servers" :serverData="server"></app-server>
    </ul>
  </div>
</template>

<script>
import {eventBus} from "../../main"
import Server from "./Server"
  export default {
    components:{
      appServer: Server
    },
    data: function (){
      return{
        servers:[
          {id:1, status:"Kritik"},
          {id:2, status:"normal"},
          {id:3, status:"tehlikede"},
          {id:4, status:"bilinmiyor"},
        ]
      }
    },
    methods:{
      sendToDetails(server){
        eventBus.sendToServerData(server)
      }
    }
  }
</script>