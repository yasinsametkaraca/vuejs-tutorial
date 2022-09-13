 <template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Filter Mixin</h3>
        <hr><hr>
        <!-- Girmiş olduğunuz yazıyı tersten yazacak bir Filter tanımı yapınız ve bunu <p> içerisinde uygulayınız -->
        <p>{{ mesaj | reverse }}</p>
        <hr>
        <!-- Global bir Filter tanımlayarak size kelime sayısını ve kelimeyi veren bir Filter tanımı yapınız -->
        <!-- Örneğin : "videosinif.com" => videosinif.com (14) Şeklinde çıktı vermelidir -->
        <p>{{ mesaj | mesajLength}}</p>
        <hr>
        <!-- Soru 1 ve 2 deki uygulamaların aynısını Computed Property kullanarak yapınız -->
        <p>{{ reverse}}</p>
        <hr>
        <p>{{ mesajLength}}</p>
        <!-- 3.Uygulamadaki Computed Property'leri bir Mixin aracılığı ile tanımlayarak tekrardan kodlarınızı düzenleyiniz-->

      </div>
    </div>
  </div>
</template>
<script>
  import {computedMixin} from "./computedMixin";

  export default {
    mixins:[computedMixin],
    data(){
      return{
        mesaj:"Fenerbahçe Spor Kulübü"
      }
  },
    filters:{
      reverse(value){
        return value.split("").reverse().join("")
      }
    },
    // computed:{
    //   reverse(){
    //     return this.mesaj.split("").reverse().join("")
    //   },
    //   mesajLength(){
    //     return this.mesaj + "(" + this.mesaj.length + ")"
    //   }
    // }
  }
</script>
<style>

</style>
