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
       <router-link to="/" class="box"><h3>❤️ Sevimlilar</h3></router-link>
       <!-- 2 -->
       <router-link to="/" class="box"><h3>Pitsa</h3></router-link>
       <!-- 3 -->
       <router-link to="/" class="box"><h3>Salat</h3></router-link>
       <!-- 4 -->
       <router-link to="/" class="box"><h3>Milliy taomlar</h3></router-link>
       <!-- 5 -->
       <router-link to="/" class="box"><h3>Koktel</h3></router-link>
       <!-- 6 -->
       <router-link to="/" class="box"><h3>Fri</h3></router-link>
       <!-- 7 -->
       <router-link to="/" class="box"><h3>Lavash</h3></router-link>
       <!-- 8 -->
       <router-link to="/" class="box"><h3>Kabob</h3></router-link>
       <!-- 9 -->
       <router-link to="/" class="box"><h3>Sushi</h3></router-link>
       <!-- 10 -->
       <router-link to="/" class="box"><h3>Fast-food</h3></router-link>
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
        color: #000000;
        text-shadow: 3px 1px 1px rgba(43, 43, 43, 0.597);
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
        margin: 0 3px;
        margin-bottom:20px;
        
      }
      .box h3{
        text-wrap: nowrap;
        border-radius: 10px;
        padding: 10px;
        width: fit-content;
        background-color: #00c792;
        box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.6) inset;
        font-size: 20px;
        text-align: center ;
        color: rgb(255, 255, 255);
        border: 0.1px solid rgba(122, 122, 122, 0.48);
        text-shadow: 3px 1px 1px rgba(85, 85, 85, 0.597);
      }
</style>