<template>
    <div class="wrapper">
        <div class="card">
            <div class="title">
                <h1 class="cut">Birgalikda buyurtma berish</h1>
            </div>
            <div class="text">
                <p class="clamp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, id fugit. Id fugiat consectetur non perspiciatis autem reiciendis delectus quae.</p>
            </div>
        </div>
    </div>
</template>
<style scoped>

.card{
    margin-left: 10px;
    height: 100px;
    border: 1px solid;
    background: #fff;
    max-width: 70%;
    padding: 10px;
}
 .title .cut {
    font-size: 26px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.text .clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>