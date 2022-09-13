<template>
  <li class="list-group-item">
    Sunucu {{ serverData.id }}
    <p><strong> durumu: {{serverData.status}}</strong></p>
  </li>
</template>

<script>
export default {
  props:["serverData"]
}
</script>