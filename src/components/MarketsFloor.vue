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
                        <div class="nav_right">
                            <h3>
                            Hammasi 
                        </h3>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                        </div>

                    </li>
                </ul>
            </nav>
        </header>

        <div class="home">
       
       <!-- 1 -->
       <router-link to="/"><div class="box"><img src="../assets/img1.jpg" alt=""><p>Lorem, ipsum dolor.</p></div></router-link>
       <!-- 2 -->
       <router-link to="/"><div class="box"><img src="../assets/img2.jpg" alt=""><p>Lorem, ipsum dolor.</p></div></router-link>
       <!-- 3 -->
       <router-link to="/"><div class="box"><img src="../assets/img3.jpg" alt=""><p>Lorem, ipsum dolor.</p></div></router-link>
       <!-- 4 -->
       <router-link to="/"><div class="box"><img src="../assets/img4.jpg" alt=""><p>Lorem, ipsum dolor.</p></div></router-link>
       <!-- 5 -->
       <router-link to="/"><div class="box"><img src="../assets/img5.jpg" alt=""><p>Lorem, ipsum dolor.</p></div></router-link>
       <!-- 6 -->
       <router-link to="/"><div class="box"><img src="../assets/img1.jpg" alt=""><p>Lorem, ipsum dolor.</p></div></router-link>
       <!-- 7 -->
       <router-link to="/"><div class="box"><img src="../assets/img2.jpg" alt=""><p>Lorem, ipsum dolor.</p></div></router-link>
       <!-- 8 -->
       <router-link to="/"><div class="box"><img src="../assets/img3.jpg" alt=""><p>Lorem, ipsum dolor.</p></div></router-link>
       <!-- 9 -->
       <router-link to="/"><div class="box"><img src="../assets/img4.jpg" alt=""><p>Lorem, ipsum dolor.</p></div></router-link>
       <!-- 10 -->
       <router-link to="/"><div class="box"><img src="../assets/img5.jpg" alt=""><p>Lorem, ipsum dolor.</p></div></router-link>
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
    .nav_right{
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .home{
        display: flex;
        width: 100%;
        display: flex;
        overflow-x: scroll;
        overflow-x: auto;

      }
      .home::-webkit-scrollbar{
          display: block;
      }
      .home:-webkit-scrollbar-thumb{
          display: block;
      }
      .box{
        margin: 0 10px;
        background-color: #F09C2C;
        padding-bottom: 10px;
        border-radius: 10px;
      }
      .box img{
        height: 90px;
        width: 180px;
        object-fit: cover;
        border-radius: 10px 10px 0 0 ;

      }
      .box p{
        font-size: 20px;
        text-align: center ;
        color: rgb(255, 255, 255);
      }
</style>