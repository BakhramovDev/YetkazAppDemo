<template>
    <div class="market_floor">
        <header>
            <nav>
                <ul class="nav_item">
                    <li class="nav_link">
                        <h1>
                            <b>
                                Restoranlar
                            </b>
                        </h1>
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
        space-between="10"
      >
        <swiper-slide
          ><router-link class="product" to="/"><h4>❤️Lorem ipsum dolor sit</h4></router-link>
        
        </swiper-slide>
        <swiper-slide>
            <router-link class="product" to="/"><h4>Lorem ipsum dolor sit</h4></router-link>
        </swiper-slide>
        <swiper-slide>
            <router-link class="product" to="/"><h4>Lorem ipsum dolor sit</h4></router-link>
        </swiper-slide>
        <swiper-slide>
            <router-link class="product" to="/"><h4>Lorem ipsum dolor sit</h4></router-link>
        </swiper-slide><swiper-slide>
            <router-link class="product" to="/"><h4>Lorem ipsum dolor sit</h4></router-link>
        </swiper-slide><swiper-slide>
            <router-link class="product" to="/"><h4>Lorem ipsum dolor sit</h4></router-link>
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
        justify-content:left;
        width: 100%;
    }
    .nav_link h1{
        display: flex;
        align-items: center; 
        justify-content: center;
        font-size: 30px;
    }
    .product h4{
        white-space: nowrap;
        text-align: center;
        padding: 5px 10px;
        background-color: rgb(162, 160, 160);
        border-radius: 10px;
        color: black;
    }
    
    .product p{
        font-size: 16px;
        text-align: center;
        padding: 5px;
    }

  .swiper {
    display: none;
    overflow: hidden;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  @media (min-width: 320px) {
    .home .swiper {
      overflow: hidden;
    }
  }
</style>