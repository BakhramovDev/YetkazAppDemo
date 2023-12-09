<template>
    <div>

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
       <!-- 1 -->
       <router-link to="/" class="box"><h3>❤️Lorem, ipsum dolor</h3></router-link>
       <!-- 2 -->
       <router-link to="/" class="box"><h3>Lorem, ipsum dolor</h3></router-link>
       <!-- 3 -->
       <router-link to="/" class="box"><h3>Lorem, ipsum dolor</h3></router-link>
       <!-- 4 -->
       <router-link to="/" class="box"><h3>Lorem, ipsum dolor</h3></router-link>
       <!-- 5 -->
       <router-link to="/" class="box"><h3>Lorem, ipsum dolor</h3></router-link>
       <!-- 6 -->
       <router-link to="/" class="box"><h3>Lorem, ipsum dolor</h3></router-link>
       <!-- 7 -->
       <router-link to="/" class="box"><h3>Lorem, ipsum dolor</h3></router-link>
       <!-- 8 -->
       <router-link to="/" class="box"><h3>Lorem, ipsum dolor</h3></router-link>
       <!-- 9 -->
       <router-link to="/" class="box"><h3>Lorem, ipsum dolor</h3></router-link>
       <!-- 10 -->
       <router-link to="/" class="box"><h3>Lorem, ipsum dolor</h3></router-link>
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
        .home{
        display: flex;
        width: 100%;
        display: flex;
        overflow-x: scroll;
        overflow-x: auto;

      }
      .home::-webkit-scrollbar{
          display: none;
      }
      .home:-webkit-scrollbar-thumb{
          display: none;
      }
      .box{
        margin: 0 10px;
        margin-bottom:20px;
      }
      .box h3{
        border-radius: 10px;
        padding: 10px;
        width: 240px;
        background-color: #F09C2C;

        font-size: 20px;
        text-align: center ;
        color: rgb(255, 255, 255);
      }
</style>