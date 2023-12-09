<template>
    <div class="home">
      <swiper-container
        slides-per-view="1.5"
        speed="100"
        loop="true"
        class="swiper"
        space-between="10"
      >
        <swiper-slide
          ><img class="image" src="@/assets/swiper1.webp" alt="img" />
        </swiper-slide>
        <swiper-slide>
          <img class="image" src="@/assets/swiper2.webp" alt="img"
        /></swiper-slide>
        <swiper-slide>
          <img class="image" src="@/assets/swiper3.webp" alt="img"
        /></swiper-slide>
      </swiper-container>
    </div>
  </template>
  
  <style scoped>
  .home .image {
    object-fit: cover;
  }
  .home .swiper {
    overflow: hidden;
    padding: 10px;
  }
  @media (min-width: 320px) {
    .home .swiper {
      overflow: hidden;
    }
    .home .image {
      width: 200px;
      height: 100px;
      object-fit: cover;
      border-radius: 10px;
  
    }
  }
  </style>
  