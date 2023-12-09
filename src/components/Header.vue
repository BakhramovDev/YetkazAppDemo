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
        height: 50px;
        background-color: #00c792;

    }
    .logo img{
        max-width: 50px;
    }
    nav{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 95%;
        height: 95%;
        /* border: 1px solid red; */

    }
    .header_search_input{
        font-size: 20px;
        width:350px ;
        height: 35px;
        border: none;
        border-radius: 5px;
        outline-color:#008763;
        padding: 3px;
        background-color: rgb(232, 231, 231);
        
    }
    .header_search_input::placeholder{
        font-size: 20px;
        color: #0000004a;
        font-weight: 800;
    }
    .logo{
        display: none;
        color: #008763;
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