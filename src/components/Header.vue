<template>
    <div>
        <div class="header">
            <nav>
                <div class="logo">
                    <h1>
                        Yetkaz
                    </h1>
                </div>
                <form submit.prevent>
                    <input class="header_search_input" type="text" placeholder="Qidiruv">
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
        height: 60px;
        background-color: white;
        /* box-shadow: 0px 11px 8px 9px rgba(32, 30, 41, 0.298); */

    }
    nav{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 95%;
        height: 95%;
    }
    .header_search_input{
        min-width: 300px;
        height: 25px;
        border: none;
        border-radius: 5px;
        outline: none;
        padding: 3px;
        background-color: rgb(232, 231, 231);
        
    }
    .header_search_input::placeholder{
        color: rgb(56, 56, 56);
        font-weight: 800;
    }
    .logo{
        display: none;
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