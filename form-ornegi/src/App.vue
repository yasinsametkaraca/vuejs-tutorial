<template>
    <div class="container">
        <form v-if="!isSubmitted" >
            <div class="row" >
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <app-full-name v-model="fullname">

                  </app-full-name>
                  <div class="form-group">
                  <label>Password</label>
                  <input type="Password" class="form-control" v-model="password">
                  </div>
                  <div class="form-group">
                    <label>Email</label>
                    <input type="Password" class="form-control" v-model="email">
                  </div>
                  <div class="form-group" >
                    <label>
                      <input type="radio" v-model="gender" value="Kadın">Kadın
                    </label>
                    <label>
                      <input type="radio" v-model="gender" value="Erkek">Erkek
                    </label>
                  </div>
                  <button @click.prevent="submit" class="btn btn-primary">Kayıt Ol</button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" >
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h4>Girdiğiniz Bilgiler</h4>
                    </div>
                    <div class="panel-body">
                        <p>Tam Ad:{{fullname}}  </p>
                        <p>E-mail:{{email}} </p>
                        <p>Şifre:{{password}} </p>
                        <p>Cinsiyet:{{gender}} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from "./FullName";
    export default {
      components:{
        appFullName:FullName
      },
      data(){
        return{
          fullname:"",
          email:"",
          password:"",
          gender:"",
          isSubmitted:false
        }
    },
      methods:{
        submit(){
          this.isSubmitted=true
        }
      }
    }
</script>

<style>
</style>
