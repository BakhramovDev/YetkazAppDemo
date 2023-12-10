<template>
  <div class="modal_btn"> 
    <div class="basket">
      <p>Savatga qo`shish</p>
    </div>
    <div class="value">
      <p>{{ sum }}</p>
      <button @click="minus">-</button>
      <a href="#">{{ count }}</a>
      <button @click="plus">+</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sum: 10,
      summa: 10,
      count: 1,
    };
  },
  methods: {
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
};
</script>
<style scoped>
.modal{
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.modal .value{
    display: flex;
    align-self: center;
}
</style>