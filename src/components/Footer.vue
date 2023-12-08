<template>
    <div class="footer">
        <footer>
            <nav>
                <ul class="nav_item">
                    <!--  bosh saxifa  -->
                    <li class="nav-link">
                        <router-link to="/">
                            <div class="router">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                            <p>
                                Bosh saxifa
                            </p>
                            </div>
                        </router-link>
                    </li>
                    <!-- Qidiruv -->
                    <li class="nav-link">
                        <router-link to="/">
                            <div class="router">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                            <p>
                                Qidiruv
                            </p>
                            </div>
                        </router-link>
                    </li>
                    <!-- Savat -->
                    <li class="nav-link">
                        <router-link to="/Basket">
                            <div class="router">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                            <p>
                                Savat
                            </p>
                            </div>
                        </router-link>
                    </li>
                    <!-- Buyurtma -->
                    <li class="nav-link">
                        <router-link to="/">
                            <div class="router">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 0v64h64V96H64zm384 0H192v64H448V96zM64 224v64h64V224H64zm384 0H192v64H448V224zM64 352v64h64V352H64zm384 0H192v64H448V352z"/></svg>
                            <p>
                                Buyurtma
                            </p>
                            </div>
                        </router-link>
                    </li>
                    <!-- Profil -->
                    <li class="nav-link">
                        <router-link to="/">
                            <div class="router">
                                <svg
                             xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/>
                            </svg>
                            <p>
                                Profil
                            </p>
                            </div>
                        </router-link>
                    </li>
                    <!--  -->
                </ul>
            </nav>
        </footer>
    </div>
</template>
<style scoped>
footer{
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    border-top: 2px solid #F09C2C;
    background-color: white;
}
nav{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 95%;
    /* border: 1px solid red; */
}
.nav_item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.router{
    text-align: center;
    
}
.router svg{
    fill: #008763;
    transition: all 0.1s ease;
}
.router svg:hover{
    fill: #00c792;
    height: 20px;
    width: 20px;
}
.router p{
    color: black;
    font-size: 10px;
    font-weight: 800;
}
</style>