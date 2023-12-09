<template>
  <div class="About">
    <div class="header">
      <div class="exit_icon">
        <router-link to="/">
        <img src="@/assets/exit.png" alt="img" />
        </router-link>
      </div>

      <div class="header_search">
        <img src="@/assets/Share.png" alt="img" />
        <img src="@/assets/search.png" alt="img" />
        <img src="@/assets/information.png" alt="img" />
      </div>
    </div>
    <div class="home_">
      <div class="product_name">
        <h1>{{ ProductName }}</h1>
      </div>
      <div class="cost">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dolor.</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #848181;
}
.header .exit_icon img {
  max-width: 22px;
}
.header_search img {
  width: 22px;
}
.header .product_name h1 {
  font-size: 22px;
  font-family: sans-serif;
}
.header .header_search {
  display: flex;
  align-items: center;
  gap: 15px;
}
.home .product_name  {
  margin: 0 auto;
}
.cost p{
  font-size: 22px;
  color: red;
}
</style>
<script>
export default {
  data() {
    return {
      ProductName: "Pizza",
    };
  },
};
</script>
