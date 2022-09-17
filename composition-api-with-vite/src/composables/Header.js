import {ref, computed} from "vue";

export default function () {
    const title = ref("Fenerbahçe");
    const titleLength = computed(() => {
        return title.value.length + " Length Characters";
    })   /*const titleLength = computed(() => title.value.length + " Length Characters")  /!*tek satır  olduğunda böylede yazılabilir*!/*/

    return {title, titleLength}
}