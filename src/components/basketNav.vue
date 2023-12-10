<template>
    <div>
        <div class="header">
            <header>
                <nav>
                    <ul class="nav_link">
                        <li class="nav_item"><router-link to="/"><div class="router">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" fill="black" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                        </svg></div></router-link></li>
                    </ul>
                    <ul class="nav_link">
                        <li class="nav_item"><h1>Savat</h1></li>
                    </ul>
                    <ul class="nav_link">
                        <li class="nav_item"><div class="unless"></div></li>
                    </ul>
                </nav>
            </header>
        </div>
    </div>
</template>

<style scoped>
    header{
        position: fixed;
        left: 0;
        top: 0;
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 2px solid #F09C2C;
    }
    nav{
        height: 35px;
        width: 95%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .router{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .nav_item h1{
        font-weight: 400;
        color: #00c792;
    }
    .nav_item svg{
        fill: #00c792;
        transition: all 0.5s ease;
    }
    .unless
    {
        height: 20px;
        width: 20px;
        background-color:transparent;
    }
</style>