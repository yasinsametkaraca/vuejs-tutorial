import {ref} from "vue";

export default function () {
    const show = ref(true);
    console.log(show); /*Ref bir object döndürür onun içinde value kısmında değerler yer alır. Bu yüzden show.value deriz*/
    const toggleDescription = () => {
        show.value = !show.value
    }

    return {show,toggleDescription}
}