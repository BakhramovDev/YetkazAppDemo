<template>
  <div class="home">
    <swiper-container
      slides-per-view="1"
      speed="100"
      loop="true"
      class="swiper"
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
    width: 100%;
    height: 17vh;
    object-fit: cover;
    border-radius: 10px;

  }
}
</style>
