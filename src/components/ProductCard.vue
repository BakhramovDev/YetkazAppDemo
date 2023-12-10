<template>
    <div>
       <div class="card">
          <div class="card_img">
            <img class="image" src="@/assets/reastoran1.jpg" alt="img" />
          </div>
          <div class="card_title">
            <div class="food_name">
              <h1>PIZZA</h1>
             
            </div>
            <div class="cost">
              <p>90 000 so`m</p>
            </div>
            
          </div>
        </div>
    </div>
</template>
<style scoped>
.card_wrapper {
  margin-top: 10px;
  padding-bottom: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
.card {
  border: 1px solid ;
  margin: 0 10px;
  border-radius: 15px;
  background: #fff;
  margin-bottom: 50px;
}
.card .card_title{
  padding: 10px;
}
.card .card_img .image {
  object-fit: cover;
  height: 110px;
  width: 100%;
  border-radius: 10px 10px 0 0;
}
.card .card_title .food_name {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
}
.card_title .food_name h1{
  font-size: 18px;
  font-family: sans-serif;
}
.card_title .cost p{
  font-size: 16px;
  color: #444444;
}
@media (min-width: 320px) {
  .card .card_img img {
    width: 100%;
    height: 30vh;
  }
}
</style>


