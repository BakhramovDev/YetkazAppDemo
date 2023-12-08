<template>
    <div class="products_floor_one">
        <div class="product_hider">
            <!-- 1 -->
            <div class="product"><router-link to="/"><img  src="../assets/swiper1.webp" alt=""></router-link></div>
            <!-- 2 -->
            <div class="product"><router-link to="/"><img src="../assets/swiper2.webp" alt=""></router-link></div>
            <!-- 3 -->
            <div class="product"><router-link to="/"><img src="../assets/swiper3.webp" alt=""></router-link></div>
            <!-- 4 -->
            <div class="product"><router-link to="/"><img src="../assets/swiper1.webp" alt=""></router-link></div>
            <!-- 5 -->
            <div class="product"><router-link to="/"><img src="../assets/swiper2.webp" alt=""></router-link></div>
            <!-- 6 -->
            <div class="product"><router-link to="/"><img src="../assets/swiper3.webp" alt=""></router-link></div>
            <!-- 4 -->
            <div class="product"><router-link to="/"><img src="../assets/swiper1.webp" alt=""></router-link></div>
            <!-- 5 -->
            <div class="product"><router-link to="/"><img src="../assets/swiper2.webp" alt=""></router-link></div>
            <!-- 6 -->
            <div class="product"><router-link to="/"><img src="../assets/swiper3.webp" alt=""></router-link></div>
            <!-- 4 -->
            <div class="product"><router-link to="/"><img src="../assets/swiper1.webp" alt=""></router-link></div>
            <!-- 5 -->
            <div class="product"><router-link to="/"><img src="../assets/swiper2.webp" alt=""></router-link></div>
            <!-- 6 -->
            <div class="product"><router-link to="/"><img src="../assets/swiper3.webp" alt=""></router-link></div>
        </div>
    </div>
</template>

<style scoped>
    .products_floor_one{
       display: flex;
       align-content: center;
       justify-content: center;
        
    }
    .product_hider {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: scroll;
        overflow-x: auto;
        scroll-margin-right: 50px;

    }
    .product_hider::-webkit-scrollbar{
        background-color:transparent;
    }
    .product_hider::-webkit-scrollbar-thumb{
        background-color: rgb(255, 0, 0);
    }
    .product img{

        padding: 0 5px;
        width: 250px;
        height: 100px;
        object-fit: cover;
        border-radius: 10px;
    }
</style>