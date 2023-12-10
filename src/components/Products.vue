<template>
  <div>
    <!-- <button class="button" @click="openModal">Pizza</button> -->
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
    <transition name="modal">
      <div v-if="isModalOpen" class="modal-container" @click="closeModal">
        <div class="modal" @click.stop>
          <div class="modal-content">
            <!-- Your modal content goes here -->
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              quisquam impedit ipsa rem fuga quis excepturi. Fuga incidunt
              doloremque quas, ea expedita modi cum omnis quasi nemo quidem,
              pariatur necessitatibus. Autem, deserunt. Ad aliquid nihil quas
              voluptate nesciunt architecto recusandae perferendis saepe id
              deleniti ex amet, sit consequatur exercitationem reprehenderit eos
              minima, sunt quam nam itaque molestias modi officia laboriosam.
              Obcaecati quia ipsum amet nesciunt voluptates quam earum
              repudiandae est modi adipisci laudantium dolore necessitatibus
              impedit nam sint accusamus voluptatibus labore, fuga itaque neque!
              Corporis sint eligendi quis dolore illum deserunt temporibus
              consequatur ullam deleniti autem, ex nostrum obcaecati. Qui
              nostrum molestias possimus animi incidunt beatae atque iusto,
              temporibus reiciendis laudantium quidem reprehenderit suscipit
              voluptatibus delectus voluptates? Fugit enim officia in deserunt,
              nihil vitae iure doloribus? Ipsam debitis distinctio impedit ad
              repellat voluptates ipsum doloremque maiores pariatur! Neque
              placeat nostrum modi, amet ex impedit ea id dicta libero!
              Similique quisquam quas ratione accusantium illo est, fuga
              deleniti omnis, labore eaque magnam temporibus natus molestias
              nobis dicta voluptas accusamus reprehenderit itaque. Eum amet
              dolore quo architecto laborum rerum vitae quas natus iure
              consectetur ad voluptatem autem est quod repudiandae laboriosam
              magnam unde numquam labore hic, sit nihil nam error. Explicabo
              molestiae exercitationem nemo quaerat dolorem sed fuga soluta cum
              eum adipisci totam aspernatur cupiditate, laborum impedit
              excepturi odit quae perferendis a, harum voluptatum minus commodi
              deleniti ducimus. Reiciendis fugiat perspiciatis a sit molestiae
              quos unde quibusdam deserunt illo animi iusto rerum earum,
              doloribus nesciunt, illum nihil tenetur tempore dolores. Dicta,
              cum dignissimos est eligendi quibusdam, dolores a, fuga illo ea
              unde sed. Maxime expedita similique officiis repudiandae quasi
              animi obcaecati quaerat facere dicta fugit officia eos harum ad
              sequi omnis nostrum, debitis alias adipisci impedit, quis
              provident. Eveniet id quisquam dicta culpa rem quas maiores in,
              facilis at consectetur corporis amet!.
            </p>
            <button @click="closeModal">Close Modal</button>
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
  },
  components: {
    ProductCard,
  },
};
</script>

<style scoped>
.card_wrapper{
  display: flex;
  gap: -50px;
  align-items: center;
  flex-direction: column;
}
.card_wrapper .row{
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
  overflow: scroll;
  width: 100%;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  transform: translateY(30%);
  transition: transform 1s ease-out;
}

.modal-enter, .modal-leave-to /* .modal-leave-active in <2.1.8 */ {
  transform: translateY(100%);
}

.modal-enter-to {
  transform: translateY(0);
}

.modal-open {
  overflow: hidden;
  transition: 0.8s;
}

button {
  margin-top: 20px;
}
</style>
