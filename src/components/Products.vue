<template>
  <div>
    <div class="card_wrapper">
      <div class="row">
        <div class="card" @click="openModal">
          <ProductCard />
        </div>
        <div class="card" @click="openModal">
          <ProductCard />
        </div>
      </div>
      <div class="row">
        <div class="card" @click="openModal">
          <ProductCard />
        </div>
        <div class="card" @click="openModal">
          <ProductCard />
        </div>
      </div>
      <div class="row">
        <div class="card" @click="openModal">
          <ProductCard />
        </div>
        <div class="card" @click="openModal">
          <ProductCard />
        </div>
      </div>
      <div class="row">
        <div class="card" @click="openModal">
          <ProductCard />
        </div>
        <div class="card" @click="openModal">
          <ProductCard />
        </div>
      </div>
      <div class="row">
        <div class="card" @click="openModal">
          <ProductCard />
        </div>
        <div class="card" @click="openModal">
          <ProductCard />
        </div>
      </div>
    </div>
    <transition name="modal" class="dec_modal">
      <div v-if="isModalOpen" class="modal-container" @click="closeModal">
        <div class="modal" @click.stop>
          <div class="modal-content">
            <div class="close_btn">
              <img @click="closeModal" src="@/assets/close.png" alt="img" />
            </div>
            <div class="modal_img">
              <img src="@/assets/pizza.jpeg" alt="" />
            </div>
            <div class="product_type">
              <h1>go`shtlik</h1>
              <a href="#">
                <img src="@/assets/Share.png" alt="img" />
              </a>
            </div>
            <div class="about_prodct">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus assumenda dignissimos labore eos! Rerum, quisquam
                inventore amet, autem sed repudiandae, cupiditate dolores illum
                iste ab cum! Sit hic dignissimos fugiat vel voluptas? Culpa,
                accusamus iure! Molestias dolor quia debitis atque, obcaecati
                sapiente voluptas accusamus nulla nam ipsam? Sapiente, cum
                voluptatibus.
              </p>
              <br />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
                deserunt adipisci laboriosam et, recusandae sed libero modi.
                Nisi est neque libero odit sapiente, aut culpa quasi numquam
                alias, doloremque rerum.
              </p>
            
            </div>
            <div class="modal_btn">
              <div class="basket">
               <p>{{ sum }}</p>
              </div>
              <div class="value">             
                <button @click="minus">-</button>
                <p>{{count}}</p>               
                <button @click="plus">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
export default {
  data() {
    return {
      isModalOpen: false,
      sum: 15,
      summa: 15,
      count: 1,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
      // Add a class to the body to hide overflow
      document.body.classList.add("modal-open");
    },
    closeModal() {
      this.isModalOpen = false;
      // Remove the class from the body to restore overflow
      document.body.classList.remove("modal-open");
    },
    plus() {
      this.sum += this.summa;
      this.count++;
    },
    minus() {
      if (this.sum > this.summa) {
        this.sum -= this.summa;
        this.count--;
      }
    },
  },
  components: {
    ProductCard,
  },
};
</script>

<style scoped>
.dec_modal{
  transition: all 0.5 ease-in-out;
}
.modal-content .modal_btn {
  display: flex;
  justify-content: space-between;
  align-self: center;
  margin-top: 10px;
}
.modal .value {
  display: flex;
  align-self: center;
  gap: 10px;
}

.close_btn {
  position: relative;
}
.close_btn img {
  position: absolute;
  top: -20px;
  right: -10px;
}
.product_type {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product_type h1 {
  font-size: 26px;
}
.product_type img {
  max-width: 16px;
}
.about_prodct p {
  font-size: 16px;
  margin-top: 10px;
}
.modal-content .modal_img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.modal-content .product_type {
  font-size: 26px;
}
.modal_img img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  object-fit: cover;
}
.card_wrapper {
  display: flex;
  gap: -50px;
  align-items: center;
  flex-direction: column;
}
.card_wrapper .row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-container-enter-active,
.modal-container-leave-active {
  transition: opacity 1.5s ease-out;
}

.modal-container-enter, .modal-container-leave-to /* .modal-container-leave-active in <2.1.8 */ {
  opacity: 0;
}

.modal-container-enter-to {
  opacity: 1;
}

.modal-container {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  height: 100%;
  /* overflow: scroll; */
  width: 100%;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  transform: translateY(15%);
  transition: transform 1s ease-out;
  padding-bottom: 90px;
}

.modal-enter, .modal-leave-to /* .modal-leave-active in <2.1.8 */ {
  transform: translateY(100%);
}

.modal-enter-to {
  transform: translateY(0);
}

.modal-open {
  overflow-y: hidden;
}
</style>
