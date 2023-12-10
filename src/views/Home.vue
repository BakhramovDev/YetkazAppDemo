<template>

    <div class="home_wrapper">
      <div class="home">
        <Header /> 
        <Swiper />
        <productsFloorOne />
        <MarketsFloor />
        <textSwiper />
        <Restaurants />
      
        <Footer />
    </div>
    <h1>
      Mazzard
    </h1>
    </div>
</template>
<script>
import Header from "@/components/Header.vue"
import Swiper from "@/components/Swiper.vue"
import productsFloorOne from '@/components/productsFloorOne.vue'
import textSwiper from '@/components/textSwiper.vue'
import MarketsFloor from '@/components/MarketsFloor.vue'
import Footer from '@/components/Footer.vue'
import Restaurants from '@/components/Restaurants.vue'


export default {
    components: {
      Header,
      Swiper,
      productsFloorOne,
      MarketsFloor,
      textSwiper,
      Footer,
      Restaurants,
     
    }
}
</script>
<style scoped>
  .home_wrapper{
    height: 114vh;
    /* box-shadow: 5px 5px 5px -5px rgb(0, 0, 0) inset; */
  }
</style>
