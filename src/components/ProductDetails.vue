<template>
<div class="product-details">
    <h3>Product Details</h3> <br>
    <div v-if="product" >
        <img :src="require(`@/assets/products/${product.image}`)" alt=""  class="product-image">
        <div class="detail">
            <h4>{{ product.name }}</h4>
            <p class="brand">{{ product.brand }}</p>
            <div class="star">
                    <i class="fas fa-star" v-for="n in 5" :key="n"></i>
                </div>
            <p class="price"> Total Amount : <strong>{{ product.price }}</strong> </p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ProductDetails',
    data() {
        return {
            product: null
        };
    },
    mounted() {
        const productId = this.$route.params.id;
        const products = [{
                id: 1,
                image: "f1.jpg",
                brand: "Adidas",
                name: "Cartoon Astronaut Shirts",
                price: "$78"
            },
            {
                id: 2,
                image: "f2.jpg",
                brand: "Adidas",
                name: "Nouveau Leaf Shirts",
                price: "$80"
            },
            {
                id: 3,
                image: "f3.jpg",
                brand: "Adidas",
                name: "Autumnal Art Shirts",
                price: "$65"
            },
            {
                id: 4,
                image: "f4.jpg",
                brand: "Adidas",
                name: "Damask Pink-White Shirts",
                price: "$71"
            },
            {
                id: 5,
                image: "f5.jpg",
                brand: "Adidas",
                name: "Disty Flower Shirts",
                price: "$66"
            },
            {
                id: 6,
                image: "f6.jpg",
                brand: "Adidas",
                name: "ArabesqueCom Shirts",
                price: "$98"
            },
            {
                id: 7,
                image: "f7.jpg",
                brand: "Adidas",
                name: "Sunflower Shirts",
                price: "$75"
            },
            {
                id: 8,
                image: "f2.jpg",
                brand: "Adidas",
                name: "Nouveau Leaf Shirts",
                price: "$80"
            },
            {
                id: 9,
                image: "f4.jpg",
                brand: "Adidas",
                name: "Damask Pink-White Shirts",
                price: "$71"
            },
            {
                id: 10,
                image: "f1.jpg",
                brand: "Adidas",
                name: "Cartoon Astronaut Shirts",
                price: "$78"
            },
            {
                id: 11,
                image: "f6.jpg",
                brand: "Adidas",
                name: "ArabesqueCom Shirts",
                price: "$98"
            },
            {
                id: 12,
                image: "f2.jpg",
                brand: "Adidas",
                name: "Nouveau Leaf Shirts",
                price: "$80"
            },
            {
                id: 13,
                image: "f7.jpg",
                brand: "Adidas",
                name: "Sunflower Shirts",
                price: "$75"
            },
            {
                id: 14,
                image: "f3.jpg",
                brand: "Adidas",
                name: "Autumnal Art Shirts",
                price: "$65"
            },
            {
                id: 15,
                image: "f1.jpg",
                brand: "Adidas",
                name: "Cartoon Astronaut Shirts",
                price: "$78"
            },
            {
                id: 16,
                image: "f4.jpg",
                brand: "Adidas",
                name: "Damask Pink-White Shirts",
                price: "$71"
            },
        ];
        this.product = products.find(product => product.id === parseInt(productId));
    }
};
</script>

  
<style scoped>
.product-details {
    /* background-color: #F4ECFF; */
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
}
i {
    font-size: 17px;
    color: #e3ae28;
}
.product-info {
    display: flex;
    align-items: center;
}

.product-image {
    width: 300px;
    height: auto;
    margin-right: 20px;
    border-radius: 10px;
}

.details {
    flex: 1;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

h3 {
    margin-top: 0;
    font-size: 24px;
}
h4
{
    color: #088178;
}

.brand {
    font-weight: bold;
    color: #a92601;
    font-size: 20px;
    animation: zoomInOut 2s infinite alternate;
}
@keyframes zoomInOut {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.price {
    font-size: 20px;
    color: #060606;
    font-weight: 600;
}
strong {
    color: #088178;
    font-weight: 600;
    font-size: 18px;
}
/* Responsive styles */
@media (max-width: 768px) {
    .product-info {
        flex-direction: column;
        align-items: flex-start;
    }

    .product-image {
        width: 100%;
        margin-bottom: 20px;
    }
}
</style>
