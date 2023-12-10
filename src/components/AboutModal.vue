<template>
  <div>
    <!-- Button to open the modal -->
    <button class="button" @click="openModal">Boshlash</button>

    <!-- Modal dialog -->
    <div v-if="isOpen" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span @click="closeModal" class="close">&times;</span>
        <h2>Modal Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero sed aliquam accusamus ipsum eos ab veritatis eius atque delectus?</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false, // Boolean to track if the modal is open or not
    };
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
  },
};
</script>

<style>
/* Modal styling */
.button{
    position: absolute;
    top: 10px;
    right: 0;
    max-width: 130px;
    padding: 10px 15px;
    border-radius: 12px;
    border: none;
    outline: none;
    background: rgb(23, 214, 10);
    

}
.modal {
  display: block;
  position: fixed;
  width: 100%;
  z-index: 999;
  bottom: 0;
  width: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.modal-content p{
    font-size: 16px;
    font-family: sans-serif;
}
</style>
