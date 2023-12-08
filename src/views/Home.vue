<template>
    <div class="home">
        <Header />
    </div>
</template>

<script>

import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style scoped>
  .home{
    height: 100vh;
    background-color: rgb(232, 231, 231);
  }
</style>