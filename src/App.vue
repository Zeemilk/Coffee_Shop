<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

const coffeeshops = ref([
  {
    name: "Amazon Cafe",
    img: "https://www.cafe-amazon.com/images/logo.png",
    price: 60,
    description: "จากนกแก้ว",
    web: "https://www.cafe-amazon.com/index.aspx",
    link: "/amazon"
  },
  {
    name: "Choi Doi",
    img: "http://www.chaodoicoffee.com/public/library/images/200x200/1421251622.png",
    price: 40,
    description: "จากชาวดอย",
    web: "http://www.chaodoicoffee.com/",
    link: "/choidoi"
  },
  {
    name: "Starbuck",
    img: "https://www.starbucks.co.th/stb-media/2020/10/starbucks_corporation_logo.png",
    price: 95,
    description: "จากสตาร์บัค",
    web: "https://www.starbucks.co.th/th/",
    link: "/starbuck"
  },
  {
    name: "Red Diamond",
    img: "https://img.salehere.co.th/p/1200x0/2020/03/25/ibrlrzem0s5x.jpg",
    price: 120,
    description: "จากเพชรแดง",
    web: "https://www.facebook.com/Reddiamondthailand/",
    link: "/reddiamond"
  },
  {
    name: "Inthanin",
    img: "https://www.inthanincoffee.com/img/logo/logo@2x.png?1482390380",
    price: 35,
    description: "จากอินทนิล",
    web: "https://www.inthanincoffee.com/",
    link: "/inthanin"
  },
  {
    name: "Blue Cup",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPjprlqGcuA2D11pS5_tJO_n5l3Q9tbZK7dKFIC_123t4d4Jzo5otinfAbwOuNSANmLQ&usqp=CAU",
    price: 75,
    description: "จากแก้วฟ้า",
    web: "https://www.facebook.com/bluecup/",
    link: "/bluecup"
  }
]);
</script>

<template>
<div class="app">
  <header>
    <header class="p-3 bg-dark text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img src="https://images.emojiterra.com/google/android-12l/512px/2615.png" alt="โลโก้ร้านกาแฟ" width="40" height="40" class="me-2">
          </a>
  
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" class="nav-link px-2 text-secondary">ร้านกาแฟจ้า</a></li>
          </ul>
          <ul class="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0 ms-auto">
            <li><a href="#" class="nav-link px-2 text-white">Coffee</a></li>
            <li><a href="#" class="nav-link px-2 text-white">Review</a></li>
            <li><a href="#" class="nav-link px-2 text-white">About</a></li>
          </ul>
        </div>
      </div>
    </header>
    
    <div>
      <ul class="coffee-card-container">
        <li v-for="(shop, index) in coffeeshops.slice(0,1)" :key="index" class="coffee-card">
          <img :src="shop.img" alt="ร้านกาแฟ" class="logo-cof">
          <h2>{{ shop.name }}</h2>
          <p>ราคา: {{ shop.price }} บาท</p>
          <p>{{ shop.description }}</p>
          <router-link to="/amazon"> <button>ตรวจสอบ</button></router-link>
        </li>
        <li v-for="(shop, index) in coffeeshops.slice(1,2)" :key="index" class="coffee-card">
          <img :src="shop.img" alt="ร้านกาแฟ" class="logo-cof">
          <h2>{{ shop.name }}</h2>
          <p>ราคา: {{ shop.price }} บาท</p>
          <p>{{ shop.description }}</p>
          <router-link to="/choidoi"> <button>ตรวจสอบ</button></router-link>
        </li>
        <li v-for="(shop, index) in coffeeshops.slice(2,3)" :key="index" class="coffee-card">
          <img :src="shop.img" alt="ร้านกาแฟ" class="logo-cof">
          <h2>{{ shop.name }}</h2>
          <p>ราคา: {{ shop.price }} บาท</p>
          <p>{{ shop.description }}</p>
          <router-link to="/starbuck"> <button>ตรวจสอบ</button></router-link>
        </li>
      </ul>
    </div>

    <div>
      <ul class="coffee-card-container">
        <li v-for="(shop, index) in coffeeshops.slice(3,4)" :key="index" class="coffee-card">
          <img :src="shop.img" alt="ร้านกาแฟ" class="logo-cof">
          <h2>{{ shop.name }}</h2>
          <p>ราคา: {{ shop.price }} บาท</p>
          <p>{{ shop.description }}</p>
          <router-link to="/reddiamond"> <button>ตรวจสอบ</button></router-link>
        </li>
        <li v-for="(shop, index) in coffeeshops.slice(4,5)" :key="index" class="coffee-card">
          <img :src="shop.img" alt="ร้านกาแฟ" class="logo-cof">
          <h2>{{ shop.name }}</h2>
          <p>ราคา: {{ shop.price }} บาท</p>
          <p>{{ shop.description }}</p>
          <router-link to="/inthanin"> <button>ตรวจสอบ</button></router-link>
        </li>
        <li v-for="(shop, index) in coffeeshops.slice(5,6)" :key="index" class="coffee-card">
          <img :src="shop.img" alt="ร้านกาแฟ" class="logo-cof">
          <h2>{{ shop.name }}</h2>
          <p>ราคา: {{ shop.price }} บาท</p>
          <p>{{ shop.description }}</p>
          <router-link to="/bluecup"> <button>ตรวจสอบ</button></router-link>
        </li>
      </ul>
    </div>
  </header>

  <RouterView />
</div>
</template>

<style scoped>
.app{
  background-color: limegreen;
}

.coffee-card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.coffee-card{
  font-size:large;
  display: flex; 
  flex-direction: column;
  align-items: center; 
  text-align: center;
  margin-right: 10px;
  background-color: gray;
  border: 1px solid #000;
  padding: 10px;
}
.logo-cof{
  width: auto;
  height: 200px;
  margin-bottom: 10px;
}
</style>
