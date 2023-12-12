<template>
    <div>
        <Restaurants />
        <RestaurantFoot />
        <ResHeadScrol />
        
    </div>
</template>
<script>

import Restaurants from "@/components/RestaurantCardTop.vue"
import RestaurantFoot from "@/components/RestaurantCardFoot.vue"
import ResHeadScrol from "@/components/RestaurantHeaderScroll.vue"
import ProductCard from "@/components/ProductCard.vue"





export default {
    components:{
        Restaurants,
        RestaurantFoot,
        ResHeadScrol,
        ProductCard
    }
}
</script>
<style scoped>
    div{
        height: 100vh;
    }
</style>
