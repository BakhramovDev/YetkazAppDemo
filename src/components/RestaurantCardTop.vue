<template>
    <div class="top">
        <div class="header">
            <nav>
                <div class="exit">
                    <router-link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                        </svg>
                    </router-link>

                        <!--  -->
                        <h1 class="prd_name">
                            DODO PIZZA
                        </h1>
                </div>

                <div class="left_search">
                    <!--  -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0);transform: ;msFilter:;"><path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"></path></svg>
                    <!--  -->
                    <svg class="searcher" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512" style="fill: rgb(0, 0, 0);" ><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                    <!--  -->
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  viewBox="0 0 64 512" style="fill: rgb(0, 0, 0);"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg> -->
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
            
            mounted() {                
                const header = document.querySelector('.header');
                const prd = document.querySelector('.prd_name');



                window.addEventListener("scroll" , function(){
                    header.classList.toggle("bcg_clr" , window.scrollY > 30 );
                    prd.classList.toggle("prd_set" , window.scrollY > 70 );
                });
            },
          
}
</script>

<style scoped>
    .bcg_clr{
        background-color: rgb(255, 255, 255) !important;
        transition:all 0.5s ease-in-out;
    }
    .prd_set{
        color: black !important;
       
    }
    .prd_name{
        margin-left: 7px;
        color: rgba(0, 0, 0, 0);
    }
    .top{
        width: 100%;
        height:fit-content;
    }
    .header{
        position: fixed;
        top: 0;

        width: 100%;
        height: 50px;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;

    }
    nav{
        width: 97%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    svg{
        padding: 5px;
        background-color: white;
        min-width: 30px;
        border-radius: 50%;
    }
    .exit{
        display: flex;
        align-items: center;
        justify-content: center;
    }
   
    .left_search{
        display: flex;
    }
    .searcher{
        margin: 0 3px;
    }
</style>