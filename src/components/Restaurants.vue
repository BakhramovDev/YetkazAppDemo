<template>
  <div>
    <div class="card_wrapper">
      <div class="card">
        <div class="card_img">
          <img class="image" src="@/assets/pizza.jpeg" alt="img" />
        </div>
        <div class="card_title">
          <div class="food_name">
            <h1>BEST PIZZA</h1>
            <img src="@/assets/heart_icon.png" alt="img" />
          </div>
          <div class="type">
            <p>Product</p>
          </div>
          <div class="cost">
            <div class="rate">
              <img src="" alt="img" />
              <p>4.4 <span>(500+)</span></p>
            </div>
            <div class="btn">
              <img src="" />

              <button>7000 so`m</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card_wrapper {
  margin-top: 10px;
  padding-bottom: 70px;
}
.card {
  margin: 0 10px;
  border-radius: 15px;
  border: 1px solid;
  background: #8a8585;
}
.card .card_img img {
  object-fit: cover;
  border-radius: 15px;
}
.card .card_title .food_name {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;
}
.card .card_title .food_name img {
  object-fit: cover;
  max-width: 15px;
  height: 15px;
}
.card .card_title .food_name h1 {
  font-family: sans-serif;
  font-size: 22px;
}
.card_title .type p {
  font-size: 16px;
  font-family: sans-serif;
  color: red;
  padding-left: 5px;
}
.card_title .cost{
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 5px;
}
.cost .rate {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 5px;
}
.cost .rate img {
  background: transparent;
  max-width: 15px;
  height: 15px;
}
.cost .rate p {
  font-size: 14px;
  font-family: sans-serif;
  color: red;
  padding-left: 5px;
}
.cost .btn {
  background: green;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  padding: 10px 15px;
  max-width: 130px;
}
.cost .btn button {
  background: transparent;
  border: none;
  outline: none;
}
.cost .btn img {
  max-width: 15px;
  background: transparent;
}
@media (min-width: 320px) {
  .card .card_img img {
    width: 100%;
    height: 30vh;
  }
}
</style>
