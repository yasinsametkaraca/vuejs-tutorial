export const ProductMixin ={
    data(){
        return{
            searchText:"",
            products:["tv","masa","kalem","sandalye","yazıcı"]
        }
    },
    computed:{
        filteredText(){
            return this.products.filter((product)=>{
                return product.match(this.searchText)
            })
        }
    }
}