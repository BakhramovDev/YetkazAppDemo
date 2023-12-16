<template>
    <div class="home">
       
            <!-- 1 -->
            <router-link to="/"><div class="box"><img src="../assets/topFoods/burger.png" alt=""></div></router-link>
            <!-- 2 -->
            <router-link to="/"><div class="box"><img src="../assets/topFoods/cotlet.png" alt=""></div></router-link>
            <!-- 3 -->
            <router-link to="/"><div class="box"><img src="../assets/topFoods/fri.png" alt=""></div></router-link>
            <!-- 4 -->
            <router-link to="/"><div class="box"><img src="../assets/topFoods/gibokpizza.png" alt=""></div></router-link>
            <!-- 5 -->
            <router-link to="/"><div class="box"><img src="../assets/topFoods/kebab.png" alt=""></div></router-link>
            <!-- 6 -->
            <router-link to="/"><div class="box"><img src="../assets/topFoods/kfsCombo.png" alt=""></div></router-link>
            <!-- 7 -->
            <router-link to="/"><div class="box"><img src="../assets/topFoods/Late.png" alt=""></div></router-link>
            <!-- 8 -->
            <router-link to="/"><div class="box"><img src="../assets/topFoods/peperone.png" alt=""></div></router-link>
            <!-- 9 -->
            <router-link to="/"><div class="box"><img src="../assets/topFoods/coffe.png" alt=""></div></router-link>
            <!-- 10 -->
            <router-link to="/"><div class="box"><img src="../assets/topFoods/cake.png" alt=""></div></router-link>
        </div>
    
  </template>
  
  <style scoped>
      .home{
        margin-top: 25px;
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
        margin: 0 5px;
        height: 120px;
        width: 120px;
        object-fit: cover;
        border-radius: 50%;
        background-color:white;
        box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.6) inset;
        border: 0.1px solid rgba(122, 122, 122, 0.48);
        display: flex;
        align-items: center;
        justify-content: center;

      }
      .box img{
        height:100px ;
        width: 100px;
        object-fit: cover;
      }
  </style>
  