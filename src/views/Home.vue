<template>

    <div>
        <Header />
     <Swiper />
    </div>
</template>
<script>
import Swiper from "@/components/Swiper.vue"
import Header from '@/components/Header.vue'
export default {
    components: {
      Swiper,
       Header,
    }
}
</script>


<style scoped>
  .home{
    height: 100vh;
    background-color: rgb(232, 231, 231);
  }
</style>
