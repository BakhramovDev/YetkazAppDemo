<template>
  <div class="home">
    <swiper-container
      slides-per-view="1"
      autoplay="200"      
      speed="800"
      loop="true"
      class="swiper"
      space-between="10"
      autoplayDisableOnInteraction="false"
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
<<<<<<< HEAD
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
=======
.home {
  padding: 0 30px;
}
.home .image {
  max-width: 320px;
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 12px;
>>>>>>> 1e0c592927789dca12d802aea9c3a5003f91fa65
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
<<<<<<< HEAD

=======
@media (min-width: 320px) {
  .home .swiper {
    overflow: hidden;
  }
}
>>>>>>> 1e0c592927789dca12d802aea9c3a5003f91fa65
</style>
