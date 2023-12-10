<template>
    <div class="Markets">
        <div class="navbar">
        <div class="set_nav">
            <!--  -->
        <router-link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" fill="#00c792" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
        </router-link>

        
            <h3>
                Do'konlar
            </h3>
        </div>
        
    </div>
    <div class="container">
            <MarketTopFilter />
    </div>
    </div>
</template>

    <script> 
    import MarketTopFilter from "@/components/MarketTopFilter.vue"
    export default {
        components: {
            MarketTopFilter
        }
    }
    </script>

<style scoped>

    .markets{
        height: 100vh;
    }
    .container{
        padding: 0 10px;
    }

    .navbar
    {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 20;
        width: 100%;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
        box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.6) ;

    }
    .set_nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 94%;
    }
    h3{
        color: #00c792;

    }
</style>