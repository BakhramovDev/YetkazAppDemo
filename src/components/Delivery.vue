<template>
  <div class="card_container">
    <div class="card">
      <h1>30 - 40 min</h1>
      <p>Yetkazib berish vaqti</p>
    </div>
    <div class="card_2">
      <h1>4.8 (500+)</h1>
      <p>Baho</p>
    </div>
  </div>
</template>
<style scoped>
.card_container {
  display: flex;
  flex: 0 0 50;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 7px;
}
.card_container .card {
  width: 60%;
  border: 1px solid black;
  border-radius: 12px;
  padding: 8px 10px;
}
.card_container .card_2 {
  width: 40%;
  border: 1px solid black;
  border-radius: 12px;
  padding: 8px 10px;
}
.card_2 h1 {
  font-size: 22px;
  white-space: nowrap;
}
.card_2 p {
  font-size: 16px;
  color: #6a6767;
}
.card h1 {
  font-size: 22px;
}
.card p {
  font-size: 16px;
  color: #6a6767;
}
</style>
