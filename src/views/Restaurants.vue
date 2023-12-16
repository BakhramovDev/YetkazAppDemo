<template>
    <div>
        <Restaurants />
        <RestaurantFoot />
        <!-- <ProductsModal /> -->
        <ResHeadScrol />
        
    </div>
</template>
<script>

import Restaurants from "@/components/RestaurantCardTop.vue"
import RestaurantFoot from "@/components/RestaurantCardFoot.vue"
import ResHeadScrol from "@/components/RestaurantHeaderScroll.vue"
import ProductCard from "@/components/ProductCard.vue"
// import ProductsModal from "@/components/ProductsModal.vue"

import ProductsModal from "@/components/ProductsModal.vue"





export default {
    components:{
    Restaurants,
    RestaurantFoot,
    ResHeadScrol,
    ProductCard,
    // ProductsModal
}
}
</script>
<style scoped>
    div{
        height: 100vh;
    }
</style>
