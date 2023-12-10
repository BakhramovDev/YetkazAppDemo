<template>
  <div class="home">
    <swiper-container
      slides-per-view="1"
      speed="100"
      loop="true"
      class="swiper"
      space-between="10"
    >
      <swiper-slide
         class="swiper_slide"><img class="image" src="@/assets/swiper1.webp" alt="img" />
      </swiper-slide>
      <swiper-slide class="swiper_slide">
        <img class="image" src="@/assets/swiper2.webp" alt="img"
      /></swiper-slide>
      <swiper-slide class="swiper_slide">
        <img class="image" src="@/assets/swiper3.webp" alt="img"
      /></swiper-slide>
    </swiper-container>
  </div>
</template>

<style scoped>
.home{
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.swiper_slide{
  display: flex;
  align-items: center;
  justify-content: center;
}
.image {
    width: 100% ;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
  }
.home .swiper {
  margin: 0 auto;
  overflow: hidden;
}

</style>
