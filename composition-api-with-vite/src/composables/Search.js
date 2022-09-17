import {ref, watchEffect} from "vue";

export default function () {
    const searchText = ref("")
    const isTyping = ref(false)
    /*watch(searchText, () => {
      if (searchText.value.length > 0) {
        isTyping.value = true
        setTimeout(() => {
          isTyping.value = false   /!*böyle olunca çalışır ama doğru çalışmaz bunu watch effect ile yapmalıyız*!/
        }, 1000)
      }
    })*/
    watchEffect((onInvalidate) => {             /*computed gibi çalışır ama watch gibi davranır*/
        if (searchText.value.length > 0) {
            isTyping.value = true
            const typing = setTimeout(() => {
                isTyping.value = false
            }, 1000)
            onInvalidate(() => clearTimeout(typing))  /*  eğer yazmaya devam edilirse setTimeoutu iptal et*/
        }
    })
    return {searchText, isTyping}
}