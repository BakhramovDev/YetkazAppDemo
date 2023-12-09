<template>
    <div class="market_floor">
        <header>
            <nav>
                <ul class="nav_item">
                    <li class="nav_link">
                        <h1>
                            <b>
                                Do'konlar
                            </b>
                        </h1>
                    </li>

                    <li class="nav_link"> 
                        <h3>
                            Hammasi 
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                        </h3>

                    </li>
                </ul>
            </nav>
        </header>

        <div class="home">
      <swiper-container
        slides-per-view="1.5"
        speed="100"
        loop="true"
        class="swiper"
      >
        <swiper-slide
          >  <div class="product"><router-link to="/"><img src="../assets/swiper2.webp" alt=""></router-link>
            <p>Lorem ipsum dolor sit.</p></div>
        </swiper-slide>
        <swiper-slide>
            <div class="product"><router-link to="/"><img src="../assets/swiper2.webp" alt=""></router-link>
            <p>Lorem ipsum dolor sit.</p></div>
        </swiper-slide>
        <swiper-slide>
            <div class="product"><router-link to="/"><img src="../assets/swiper2.webp" alt=""></router-link>
            <p>Lorem ipsum dolor sit.</p></div>
        </swiper-slide>
      </swiper-container>
    </div>

    
    </div>
</template>

<style scoped>
    header{
        margin: 20px 0;
        display: flex;
        align-items: center;
        justify-content:center;
        width: 100%;
    }
    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
    }
    .nav_item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .nav_link h3{
        display: flex;
        align-items: center; 
        justify-content: center;
    }
    .product img{ 
        width: 100%;
        height: 120px;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
    }
    .product{
        margin: 0 5px;
        background-color: white;
        border-radius: 10px;
    }
    .product p{
        font-size: 16px;
        text-align: center;
        padding: 5px;
    }

  .home .swiper {
    overflow: hidden;
    padding: 10px;
  }
  @media (min-width: 320px) {
    .home .swiper {
      overflow: hidden;
    }
  }
</style>