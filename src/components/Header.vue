<template>
    <div>
        <div class="header">
            <nav>
                <div class="logo">
                    <img src="@/assets/Logo_header.png" alt="">
                </div>
                <form submit.prevent>
                    <input class="header_search_input" type="text" placeholder="Qidiruv...">
                </form>
            </nav>
        </div>
    </div>
</template>

<style scoped>
    .header{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        /* border: 1px solid red; */
        height: 50px;
        background-color: #ffffff;

    }
    .logo img{
        max-width: 90px;
    }
    nav{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 98%;
        height: 95%;
        /* border: 1px solid red; */

    }
    form{

        width: 100%;
    }
    .header_search_input{
        font-size: 20px;
        min-width:100% ;
        height: 35px;
        border: none;
        border-radius: 5px;
        outline-color:#00c792;
        border:none;
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 2px 16px 1px rgba(0, 0, 0, 0.24);
        /* border: 1px solid red; */
        padding-left: 10px;
        

    }
    .header_search_input::placeholder{
        font-size: 20px;
        color: #a4a4a4ac;
        padding-left: 10px;
    }
    .logo{
        display: none;
        color: #7070708f;
    }
    @media(min-width:600px){
        .logo{
            display: block;
    }
    nav{
        justify-content: space-between;
    }
    }
</style>