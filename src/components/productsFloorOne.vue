<template>
    <div class="home">
       
            <!-- 1 -->
            <router-link to="/"><div class="box"><img src="../assets/img1.jpg" alt=""></div></router-link>
            <!-- 2 -->
            <router-link to="/"><div class="box"><img src="../assets/img2.jpg" alt=""></div></router-link>
            <!-- 3 -->
            <router-link to="/"><div class="box"><img src="../assets/img3.jpg" alt=""></div></router-link>
            <!-- 4 -->
            <router-link to="/"><div class="box"><img src="../assets/img4.jpg" alt=""></div></router-link>
            <!-- 5 -->
            <router-link to="/"><div class="box"><img src="../assets/img5.jpg" alt=""></div></router-link>
            <!-- 6 -->
            <router-link to="/"><div class="box"><img src="../assets/img1.jpg" alt=""></div></router-link>
            <!-- 7 -->
            <router-link to="/"><div class="box"><img src="../assets/img2.jpg" alt=""></div></router-link>
            <!-- 8 -->
            <router-link to="/"><div class="box"><img src="../assets/img3.jpg" alt=""></div></router-link>
            <!-- 9 -->
            <router-link to="/"><div class="box"><img src="../assets/img4.jpg" alt=""></div></router-link>
            <!-- 10 -->
            <router-link to="/"><div class="box"><img src="../assets/img5.jpg" alt=""></div></router-link>
        </div>
    
  </template>
  
  <style scoped>
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
      }
      .box img{
        height: 90px;
        width: 180px;
        object-fit: cover;
        border-radius: 10px;

      }
  </style>
  