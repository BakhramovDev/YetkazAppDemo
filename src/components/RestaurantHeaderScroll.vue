<template>
   <div class="template">

       <div class="home">
      <!-- 1 -->
         <a href="#all" class="box">Hammasi</a>
      <!-- 2 -->
         <a href="#pitsa" class="box">Pitsa</a>
      <!-- 3 -->
         <a href="#burger" class="box">Burgerlar</a>
      <!-- 4 -->
         <a href="#napitki" class="box">Salqin ichimliklar</a>
      <!-- 5 -->
         <a href="#chay" class="box">Issiq ichimliklar</a>
      <!-- 6 -->
         <a href="#lavash" class="box">Lavash</a>
      <!-- 7 -->
         <a href="#Deserd" class="box">Shirinliklar</a>
      </div>


         <div class="filter_products">


            <div
               class="bottom-sheet"
               :class="{
               show: isBottomSheetVisible,
               dragging: isDragging,
               fullscreen: sheetHeight === 100,
               }"
            >
               <div class="sheet-overlay" @click="hideBottomSheet">ww</div>
               <div class="content" :style="{ height: sheetHeight + 'vh' }">
               <div class="header">
                  <div class="drag-icon" @mousedown="dragStart" @touchstart="dragStart">
                     <span></span>
                  </div>
               </div>
               <div class="body">
                  <span></span>
                  <!-- Your content goes here -->
                  <img class="head_img" src="@/assets/reastoran1.jpg" alt="img" />

               <h4>
                  <b>
                     Product name
                  </b>
               </h4>
               <h6>
                  introduction
               </h6>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est numquam eligendi ut quas, doloribus placeat, quis quia error id ad dicta! Repellat soluta provident, ullam ut odio expedita sapiente tempora.
               </p>
               <hr>
               <!--  -->
               <div class="product_size">
                  <input type="radio"> 
                  <label>Ixcham</label>
               </div>
               <!--  -->
               <div class="product_size">
                  <input type="radio"> 
                  <label>Standard</label>
               </div>
               <!--  -->
               <div class="product_size">
                  <input type="radio"> 
                  <label>Katta</label>
               </div>
               <hr>
               <div class="product_size">
                  <input type="radio"> 
                  <label>Qo'shimchalarsiz</label>
               </div>
                  <!-- ... Rest of your content ... -->
               </div>
               </div>
            </div>

            <h1 id="all" class="Filter_text">Hammasi</h1>
            <span>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div @click="showBottomSheet"  class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           PIZZA
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div @click="showBottomSheet" class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              PIZZA
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div @click="showBottomSheet" class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           PIZZA
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div @click="showBottomSheet" class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              PIZZA
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div @click="showBottomSheet" class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           PIZZA
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div @click="showBottomSheet" class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              PIZZA
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div @click="showBottomSheet" class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           PIZZA
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div @click="showBottomSheet" class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              PIZZA
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div @click="showBottomSheet" class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           PIZZA
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div @click="showBottomSheet" class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              PIZZA
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div @click="showBottomSheet" class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           PIZZA
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div @click="showBottomSheet" class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              PIZZA
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <h1 id="pitsa" class="Filter_text">Pitsalar</h1>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div @click="showBottomSheet" class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           PIZZA
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div @click="showBottomSheet" class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              PIZZA
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div @click="showBottomSheet" class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           PIZZA
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div @click="showBottomSheet" class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              PIZZA
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div @click="showBottomSheet" class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           PIZZA
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div @click="showBottomSheet" class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              PIZZA
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div  @click="showBottomSheet" class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           PIZZA
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div @click="showBottomSheet" class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              PIZZA
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div  @click="showBottomSheet" class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           PIZZA
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div @click="showBottomSheet" class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              PIZZA
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>

            <h1 id="burger" class="Filter_text">Burger</h1>

            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div  @click="showBottomSheet" class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           Burger
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div @click="showBottomSheet" class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              Burger
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div  @click="showBottomSheet" class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           Burger
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div @click="showBottomSheet" class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              Burger
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div  @click="showBottomSheet" class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                          Burger
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div @click="showBottomSheet" class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              Burger
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div  @click="showBottomSheet" class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           Burger
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div  @click="showBottomSheet" class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              Burger
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <h1 id="napitki" class="Filter_text">Salqin ichimliklar</h1>

            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div  @click="showBottomSheet" class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           Salqin ichimliklar
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div  @click="showBottomSheet" class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              Salqin ichimliklar
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           Salqin ichimliklar
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              Salqin ichimliklar
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           Salqin ichimliklar
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              Salqin ichimliklar
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           Salqin ichimliklar
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              Salqin ichimliklar
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <h1 id="chay" class="Filter_text">Issiq ichimliklar</h1>

            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           Issiq ichimliklar                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              Issiq ichimliklar                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           Issiq ichimliklar                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              Issiq ichimliklar                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           Issiq ichimliklar                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              Issiq ichimliklar                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           Issiq ichimliklar                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              Issiq ichimliklar                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <h1 id="deserd" class="Filter_text">Shirinliklar</h1>

            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           Shirinliklar                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              Shirinliklar                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           Shirinliklar
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              Shirinliklar
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           Shirinliklar                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              Shirinliklar
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           Shirinliklar
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              Shirinliklar
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>

            <h1 id="lavash" class="Filter_text">Lavash</h1>

            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           Lavash
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              Lavash
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           Lavash
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              Lavash                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           Lavash
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              Lavash
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            <!-- 000000000000000000000000 -->
            <div class="filter_element">
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                  <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                  <div class="card_title">
                     <div class="food_name">
                        <h1>
                           Lavash
                        </h1>
                     </div>
                  <div class="cost">
                     <p>
                        90 000 so`m
                     </p>
                  </div>
                  
               </div>
            </div>
               <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
               <div class="card">
                  
                     <img class="image" src="@/assets/reastoran1.jpg" alt="img" />

                     <div class="card_title">
                        <div class="food_name">
                           <h1>
                              Lavash
                           </h1>
                        </div>
                     <div class="cost">
                        <p>
                           90 000 so`m
                        </p>
                     </div>
                     
                  </div>
               </div>
            </div>
            </span>
               
            </div>
         


  
   </div>
</template>


<script>
      export default {
         data() {
         return {
            isBottomSheetVisible: false,
            isDragging: false,
            startY: 0,
            startHeight: 0,
            sheetHeight: 50,
         };
      },
            methods: {
         showBottomSheet() {
            this.isBottomSheetVisible = true;
            document.body.style.overflowY = "hidden";
            this.updateSheetHeight(50);
         },
         updateSheetHeight(height) {
            this.sheetHeight = height;
         },
         hideBottomSheet() {
            this.isBottomSheetVisible = false;
            document.body.style.overflowY = "auto";
         },
         dragStart(e) {
            this.isDragging = true;
            this.startY = e.pageY || e.touches?.[0].pageY;
            this.startHeight = this.sheetHeight;
            // this.$refs.bottomSheet.classList.add("dragging");
         },
         dragging(e) {
            if (!this.isDragging) return;
            const delta = this.startY - (e.pageY || e.touches?.[0].pageY);
            const newHeight = this.startHeight + (delta / window.innerHeight) * 100;
            this.updateSheetHeight(newHeight);
         },
         dragStop() {
            this.isDragging = false;
            // this.$refs.bottomSheet.classList.remove("dragging");
            const sheetHeight = this.sheetHeight;
            if (sheetHeight < 25) {
            this.hideBottomSheet();
            } else if (sheetHeight > 75) {
            this.updateSheetHeight(100);
            } else {
            this.updateSheetHeight(50);
            }
         },
         },


            mounted() {  
               
               
                const home = document.querySelector('.home');
                window.addEventListener("scroll" , function(){
                    home.classList.toggle("fixer" , window.scrollY > 250 );
                });


               
                  document.addEventListener("mousemove", this.dragging);
                  document.addEventListener("mouseup", this.dragStop);

                  document.addEventListener("touchmove", this.dragging);
                  document.addEventListener("touchend", this.dragStop);

                  
  
         },
      
         beforeDestroy() {
            document.removeEventListener("mousemove", this.dragging);
            document.removeEventListener("mouseup", this.dragStop);

            document.removeEventListener("touchmove", this.dragging);
            document.removeEventListener("touchend", this.dragStop);
         },

      }
      
         

</script>


<style scoped>


   .head_img{
      width: 100%;
      height: 100px;
      object-fit: cover;
   }
   .fixer{
      position: fixed !important;
      top: 50px !important;
      transition:all 0.5s ease !important;
   }
       .home{
         padding: 15px 0;
         display: flex;
         width: 100%;
         overflow-x: scroll;
         overflow-x: auto;
         background-color: rgb(255, 255, 255);
         box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.6) ;

     }
     .home::-webkit-scrollbar{
         display: none;
     }
     .home:-webkit-scrollbar-thumb{
         display: none;
     }
     .box{
       margin: 0 5px;
       white-space: nowrap;
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

     .filter_products{
      margin-top: 25px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
     }
     .filter_element{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px 0;
     }
     .card_wrapper {
         margin-top: 10px;
         padding-bottom: 70px;
         display: flex;
         flex-direction: column;
         align-items: center;
         gap: 15px;
      }
      .card {
         border: 1px solid ;
         margin: 0 10px;
         border-radius: 15px;
         background: #fff;
         margin-bottom: 50px;
      }
      .card .card_title{
         padding: 10px;
      }
      .image {
         object-fit: cover;
         height: 110px;
         width: 100%;
         border-radius: 10px 10px 0 0;
      }
      .card .card_title .food_name {
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding-top: 5px;
      }
      .card_title .food_name h1{
         font-size: 18px;
         font-family: sans-serif;
      }
      .card_title .cost p{
         font-size: 16px;
         color: #444444;
      }
      @media (min-width: 320px) {
      .card .card_img img {
            width: 100%;
            height: 30vh;
         }
      }



      /* .........................................................modal */

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #e3f2fd;
}
.show-modal {
  outline: none;
  border: none;
  cursor: pointer;
  color: #fff;
  border-radius: 6px;
  font-size: 1.2rem;
  padding: 15px 22px;
  background: #4a98f7;
  transition: 0.3s ease;
  box-shadow: 0 10px 18px rgba(52, 87, 220, 0.18);
}
.show-modal:hover {
  background: #2382f6;
}
.bottom-sheet {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  opacity: 0;
  pointer-events: none;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  transition: 0.1s linear;
  padding-bottom: 50px;
}
.bottom-sheet.show {
  opacity: 1;
  pointer-events: auto;
}
.bottom-sheet .sheet-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background: #000;
}
.bottom-sheet .content {
  width: 100%;
  position: relative;
  background: #fff;
  max-height: 100vh;
  height: 50vh;
  max-width: 1150px;
  padding: 0 5px;
  transform: translateY(100%);
  border-radius: 12px 12px 0 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.03);
  transition: 0.3s ease;
}
.bottom-sheet.show .content {
  transform: translateY(0%);
}
.bottom-sheet.dragging .content {
  transition: none;
}
.bottom-sheet.fullscreen .content {
  border-radius: 0;
  overflow-y: hidden;
}
.bottom-sheet .header {
  display: flex;
  justify-content: center;
}
.header .drag-icon {
  cursor: grab;
  user-select: none;
  padding: 15px;
  margin-top: -15px;
}
.header .drag-icon span {
  height: 4px;
  width: 40px;
  display: block;
  margin-top: 20px;
  background: #c7d0e1;
  border-radius: 50px;
}
.bottom-sheet .body {
  height: 100%;
  overflow-y: auto;
  padding: 15px 0 40px;
  scrollbar-width: none;
}
.bottom-sheet .body::-webkit-scrollbar {
  width: 0;
}
.bottom-sheet .body h2 {
  font-size: 1.8rem;
}
.bottom-sheet .body h4 {
  margin-top: 20px;
  font-size: 1.05rem;
}

.bottom-sheet .body h6 {
  margin-top: 20px;
  font-size: 1.05rem;
  color: #0c0c0cd5;

}
.bottom-sheet .body p {
  margin-top: 5px;
  font-size: 1.05rem;
  color: #7b7b7b;
}
.product_size{
   display: flex;
   align-items: center;
   margin: 10px  0;
}
.product_size label{
   font: bold;
   margin: 0 5px;
   font-size: 25px
}
.product_size input{
   height: 20px;
   width: 20px;
}
hr{
   margin: 20px 0;
}
</style>