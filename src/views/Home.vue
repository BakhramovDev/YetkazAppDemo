<template>

    <div class="home_wrapper">
      <div class="home">
        <Header /> 
        <Swiper />
        <productsFloorOne />
        <MarketsFloor />
        <textSwiper />
        <Footer />
    </div>
    </div>
</template>
<script>
import Header from "@/components/Header.vue"
import Swiper from "@/components/Swiper.vue"
import productsFloorOne from '@/components/productsFloorOne.vue'
import textSwiper from '@/components/textSwiper.vue'

import MarketsFloor from '@/components/MarketsFloor.vue'

import Footer from '@/components/Footer.vue'


export default {
    components: {
      Header,
      Swiper,
      productsFloorOne,
      MarketsFloor,
      textSwiper,
      Footer,
    }
}
</script>


<style scoped>
  .home_wrapper{
    height: 114vh;
    background-color: #00876324;
  }
</style>
