export const computedMixin={
    computed:{
        reverse(){
            return this.mesaj.split("").reverse().join("")
        },
        mesajLength(){
            return this.mesaj + "(" + this.mesaj.length + ")"
        }
    }
}

