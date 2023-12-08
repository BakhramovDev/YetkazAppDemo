<template>

    <div class="home">
        <Header /> 
        <Swiper />
        <productsFloorOne />
        <Footer />
    </div>
</template>
<script>
import Header from "@/components/Header.vue"
import Swiper from "@/components/Swiper.vue"
import productsFloorOne from '@/components/productsFloorOne.vue'
import Footer from '@/components/Footer.vue'


export default {
    components: {
      Header,
      Swiper,
      productsFloorOne,
      Footer,
    }
}
</script>


<style scoped>
  .home{
    background-color: rgb(232, 231, 231);
  }
</style>
