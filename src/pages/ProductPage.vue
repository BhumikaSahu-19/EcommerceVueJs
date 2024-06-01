<template>
  <section id="product1" class="section-p1">
    <h2>All Products</h2>
    <p>Summer Collection New Modern Design</p>
    <div class="pro-container">
        <div class="pro" v-for="product in products" :key="product.name">
            <img :src="require(`@/assets/products/${product.image}`)" alt="">
            <div class="des">
                <span>{{ product.brand }}</span>
                <h5>{{ product.name }}</h5>
                <div class="star">
                    <i class="fas fa-star" v-for="n in 5" :key="n"></i>
                </div>
                <h4>{{ product.price }}</h4>
            </div>
            <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }">
                <i class="fa-solid fa-cart-shopping cart"></i>
            </router-link>
        </div>
    </div>
</section>
</template>

<script>
export default {
  name: 'ProductPage',
  data() {
      return {
          products: [{
                  id: 1,
                  image: "f1.jpg",
                  brand: "adidas",
                  name: "Cartoon Astronaut Shirts",
                  price: "$78"
              },
              {
                  id: 2,
                  image: "f2.jpg",
                  brand: "adidas",
                  name: "Nouveau Leaf Shirts",
                  price: "$80"
              },
              {
                  id: 3,
                  image: "f3.jpg",
                  brand: "adidas",
                  name: "Autumnal Art Shirts",
                  price: "$65"
              },
              {
                  id: 4,
                  image: "f4.jpg",
                  brand: "adidas",
                  name: "Damask Pink-White Shirts",
                  price: "$71"
              },
              
              {
                  id: 5,
                  image: "f5.jpg",
                  brand: "adidas",
                  name: "Disty Flower Shirts",
                  price: "$66"
              },
              {
                  id: 6,
                  image: "f6.jpg",
                  brand: "adidas",
                  name: "ArabesqueCom Shirts",
                  price: "$98"
              },
              {
                  id: 7,
                  image: "f7.jpg",
                  brand: "adidas",
                  name: "Sunflower Shirts",
                  price: "$75"
              },
              {
                  id: 8,
                  image: "f2.jpg",
                  brand: "adidas",
                  name: "Nouveau Leaf Shirts",
                  price: "$80"
              },
              {
                  id: 9,
                  image: "f4.jpg",
                  brand: "adidas",
                  name: "Damask Pink-White Shirts",
                  price: "$71"
              },
              {
                  id: 10,
                  image: "f1.jpg",
                  brand: "adidas",
                  name: "Cartoon Astronaut Shirts1",
                  price: "$78"
              },
              {
                  id: 11,
                  image: "f6.jpg",
                  brand: "adidas",
                  name: "ArabesqueCom Shirts",
                  price: "$98"
              },
              {
                  id: 12,
                  image: "f2.jpg",
                  brand: "adidas",
                  name: "Nouveau Leaf Shirts",
                  price: "$80"
              },
              {
                  id: 13,
                  image: "f7.jpg",
                  brand: "adidas",
                  name: "Sunflower Shirts",
                  price: "$75"
              },
              {
                  id: 14,
                  image: "f3.jpg",
                  brand: "adidas",
                  name: "Autumnal Art Shirts",
                  price: "$65"
              },
              {
                  id: 15,
                  image: "f1.jpg",
                  brand: "adidas",
                  name: "Cartoon Astronaut Shirts",
                  price: "$78"
              },
              {
                  id: 16,
                  image: "f4.jpg",
                  brand: "adidas",
                  name: "Damask Pink-White Shirts",
                  price: "$71"
              },

          ]
      };
  }
}
</script>

<style>
  #product1 {
    text-align: center;
}

#product1 .pro-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 20px;
}

#product1 .pro {
    width: 23%;
    min-width: 250px;
    padding: 10px 12px;
    border: 1px solid #cce7d0;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
    margin: 15px 0;
    transition: 0.2S ease;
    position: relative;
}

#product1 .pro:hover {
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
}

#product1 .pro img {
    width: 100%;
    border-radius: 20px;
}

#product1 .pro .des {
    text-align: start;
    padding: 10px 0;
}

#product1 .pro .des span {
    color: #606063;
    font-size: 12px;
}

#product1 .pro .des h5 {
    padding-top: 7px;
    color: #1a1a1a;
    font-size: 14px;
}

#product1 .pro .des i {
    font-size: 12px;
    color: #e3ae28;
}

#product1 .pro .des h4 {
    padding-top: 7px;
    font-size: 15px;
    font-weight: 700;
    color: #088178;
}

#product1 .pro .cart {
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50px;
    background-color: #e8f6ea;
    position: absolute;
    bottom: 20px;
    right: 10px;
}

strong {
    color: #088178;
    font-weight: 600;
    font-size: 18px;
}

#product1 .pro a .cart {
    font-weight: 600;
    color: #088178;
    border: 1px solid #cce7d0;
    font-size: 15px;
    text-align: center;
}
</style>