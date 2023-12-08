<template>

    <div>
      <Header /> 
        <Swiper />
        <Footer />
    </div>
</template>
<script>
import Header from "@/components/Header.vue"
import Swiper from "@/components/Swiper.vue"
import Footer from '@/components/Footer.vue'

export default {
    components: {
      Header,
      Swiper,
      Footer,
    }
}
</script>


<style scoped>
  .home{
    height: 100vh;
    background-color: rgb(232, 231, 231);
  }
</style>
