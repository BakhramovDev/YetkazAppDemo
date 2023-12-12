<template>
  <div>
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
      <div class="home">
        <div class="product_name">
          <h1>{{ ProductName }}</h1>
        </div>
        <div class="cost">
          <p>Minimal buyurtma miqdori <span>777</span> so`m</p>
        </div>
      </div>
      <div class="deliver">
        
      </div>
      <div class="home_bottom">
        
      </div>
      <div class="bottom_product">
        <Products />
      </div>
    </div>
  </div>
</template>
<style scoped>
.About {
  background: #fff;
}
.bottom_product {
  margin-top: 10px;
}
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
.home {
  padding: 10px;
}
.home .product_name {
  margin: 0 auto;
}
.cost p {
  font-size: 18px;
  color: #7c7a7a;
}
</style>
<script>
import Products from "@/components/Products.vue";
export default {
  data() {
    return {
      ProductName: "Pizza",
    };
  },
  components: {
    AboutModalVue,
    Products,
    
  },
};
</script>
