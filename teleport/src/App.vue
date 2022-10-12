<script setup>
/*
Teleport bileşenleri adından da anlaşılacağı üzere bir elemanın bir bileşenden başka bir bileşene gönderilmesini sağlayan özel bileşenlerdir. Bu iletişim pencereleri, uyarı mesajları, bağlam menüleri vb. farklı yerlerde gözükmesi gereken elemanlar için pratik bir çözüm sağlıyor.
*/

</script>

<template>
  <teleport to=#modal-container> <!-- modal container index.html içerisinde tanımladık. H3 etiketi modal-container içerisinde gözükücek diyoruz.-->
      <div>
        <h3>Teleport</h3>  <!--//burda component te olsa kullanılırdı. hata vermezdi-->
      </div>
  </teleport>

  <div>
    <h1>App</h1>
  </div>
</template>

<style scoped>
</style>