<template>
<!-- Hero section -->
<section id="hero">
    <h4>Trade-in-offer</h4>
    <h2>Super value deals</h2>
    <h1>On all products</h1>
    <p>Save more with coupons & up to 70% off!</p>
    <router-link to="/productpage">
      <button>Shop now</button>
    </router-link>
    <!-- <button>Shop now</button> -->
</section>
<!-- product Section  -->
<section id="product1" class="section-p1">
    <h2>Featured Products</h2>
    <p>Summer Collection New Modern Design</p>
    <div class="pro-container">
        <div class="pro" v-for="product in products" :key="product.name">
            <img :src="require(`@/assets/products/${product.image}`)" alt="">
            <div class="des">
                <span>{{ product.brand }}</span>
                <h5>{{ product.name }}</h5>

                <i class="fas fa-star" v-for="n in 5" :key="n"></i> <br>

                <strong>{{ product.price }}</strong> <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
            </div>

        </div>
    </div>

</section>
<!-- About Us  -->
<section>
    <h1>About Us</h1>
    <section id="about-head" calss="section-p1">
        <img src="../assets/About/a6.jpg" alt="">
        <div>
            <p><b>Who We Are ? </b></p>
            <p>Welcome to <b>CARA</b> , where fashion meets individuality. Founded in <b>2000</b> , our mission is to inspire confidence through stylish, high-quality clothing.Our collections cater to all tastes and occasions. We prioritize quality, comfort, and sustainability, ensuring every piece not only looks great but feels great too. Join us on our fashion journey and discover your unique style with <b> CARA FASHION </b> .</p>

            <abbr title="">Create stunning images with as much or as little control as ypuu like thanks to a choice of basics and Crative modes.</abbr>
            <marquee background-color="#ccc" loop="10" scrollamount="5" width="-50%">Create stunning images with as much or as little control as ypuu like thanks to a choice of basics and Crative modes.</marquee>
        </div>
    </section>
</section>
<!-- Contact-US  -->
<h2>Contact-Us</h2>
<section class="formcarry-container">
    <form action="#" method="POST" enctype="multipart/form-data">

        <div class="formcarry-block">
            <label for="fc-generated-1-name">Full Name</label>
            <input type="text" name="name" id="fc-generated-1-name" placeholder="Your first and last name" />
        </div>

        <div class="formcarry-block">
            <label for="fc-generated-1-email">Your Email Address</label>
            <input type="email" name="email" id="fc-generated-1-email" placeholder="abc123@gmail.com" />
        </div>

        <div class="formcarry-block">
            <label for="fc-generated-1-message">Your message</label>
            <textarea name="message" id="fc-generated-1-message" placeholder="Enter your message..."></textarea>
        </div>

        <div class="formcarry-block">
            <button type="submit">Send</button>
        </div>

    </form>
</section>
</template>

<script>
export default {
    name: 'HomePage',
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
                    image: "f1.jpg",
                    brand: "adidas",
                    name: "Autumnal Art Shirts",
                    price: "$65"
                },
            ]
        };
    }
}
</script>

<style scoped>
#hero {
    background-image: url("../assets/hero4.png");
    height: 90vh;
    width: 100%;
    background-size: cover;
    background-position: top 25% right 0;
    padding: 0 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

#hero h4 {
    padding-bottom: 15px;
}

#hero h1 {
    color: #088178;
}

#hero button {
    background-image: url("../assets/button.png");
    background-color: transparent;
    color: #088178;
    border: 0;
    padding: 14px 80px 14px 65px;
    background-repeat: no-repeat;
    cursor: pointer;
    font-weight: 700;
    font-size: 15px;
}

/* ProductPage */
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

/* About us  */
#about-head {
    display: flex;
    align-items: center;
}

#about-head img {
    width: 35%;
    height: auto;
    padding: 30px 0px 0px 30px;
}

#about-head div {
    padding-left: 40px;
}

h1 {
    text-align: center;
    margin-bottom: 10px;
}

#about-head div marquee {
    margin-top: 20px;
    background-color: #ccc;
}

/* Contact-Us  */
.formcarry-container {
    box-sizing: border-box;
    margin: 40px auto 0 auto;
    padding: 0;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.01em;

    width: 400px;

    /* NORMAL */
    --fc-border-color: #ECEFF9;
    --fc-normal-text-color: #088178;
    --fc-normal-placeholder-color:  #B3B8D0;

    /* PRIMARY COLOR | HSL FORMAT*/
    --fc-primary-color-hue: 220;
    --fc-error-color-hue: 356;
    --fc-primary-hsl: var(--fc-primary-color-hue), 100%, 54%;
    --fc-error-hsl: var(--fc-error-color-hue), 100%, 54%;

    /* HOVER */
    --fc-field-hover-bg-color: #F7F9FC;
    --fc-border-hover-color: #DDE0EE;
    --fc-field-hover-text-color: #B3B8D0;

    --fc-border-active-color: #088178;

}

.formcarry-container * {
    box-sizing: border-box;
}

.formcarry-container label {
    text-align: start;
    display: block;
    cursor: pointer;
}

.formcarry-container .formcarry-block:not(:first-child) {
    margin-top: 16px;
}

h2 {
    margin-top: 30px;
}

.formcarry-container input,
.formcarry-container textarea,
.formcarry-container select {
    margin-top: 4px;
    width: 100%;
    height: 42px;
    border: 1px solid var(--fc-border-color);
    color: var(--fc-normal-text-color);
    border-radius: 6px;
    padding: 8px 12px;

    font-family: "Inter", sans-serif;
    font-size: 14px;
    transition: 125ms background, 125ms color, 125ms box-shadow;
}

.formcarry-container textarea {
    min-height: 188px;
    max-width: 100%;
    padding-top: 12px;
}

.formcarry-container input::placeholder,
.formcarry-container textarea::placeholder,
.formcarry-container select::placeholder {
    color: var(--fc-normal-placeholder-color);
}

.formcarry-container input:hover,
.formcarry-container textarea:hover,
.formcarry-container select:hover {
    border-color: var(--fc-border-hover-color);
    background-color: var(--fc-field-hover-bg-color);
}

.formcarry-container input:hover::placeholder,
.formcarry-container textarea:hover::placeholder,
.formcarry-container select:hover::placeholder {
    color: var(--fc-field-hover-text-color);
}

.formcarry-container input:focus,
.formcarry-container textarea:focus,
.formcarry-container select:focus {
    background-color: #fff;
    border-color:#088178;
    box-shadow: hsla(#088178, 8%) 0px 0px 0px 3px;
    outline: none;
}

.formcarry-container select {
    background-size: 24px 24px;
    background-position: 98%;
    background-repeat: no-repeat;
    appearance: none;
    -webkit-appearance: none;
}

.formcarry-container button {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    height: 42px;
    line-height: 40px;
    width: 100%;
    border-radius: 6px;
    box-sizing: border-box;
    border: 1px solid #088178;
    background-color: #088178;
    color: #fff;
    cursor: pointer;
}

.formcarry-container button {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    height: 40px;
    line-height: 24px;
    width: 100%;
    border: 0;
    border-radius: 6px;
    box-sizing: border-box;
    background-color: #088178;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 0 0 0 transparent;

    transition: 125ms all;
}

.formcarry-container button:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #088178;
}

.formcarry-container button:focus {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), hsla(var(--fc-primary-hsl));
    border-inline: 1px solid inline rgba(255, 255, 255, 0.6);
    box-shadow: 0px 0px 0px 3px rgba(var(--fc-primary-hsl), 12%);
}

.formcarry-container button:active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), hsla(var(--fc-primary-hsl));
}

.formcarry-container button:disabled {
    background-color: hsla(var(--fc-primary-hsl), 40%);
    cursor: not-allowed;
}

.formcarry-container input:focus:required:invalid,
.formcarry-container input:focus:invalid,
.formcarry-container select:focus:required:invalid,
.formcarry-container select:focus:invalid {
    color: hsl(var(--fc-error-hsl));
    border-color: hsl(var(--fc-error-hsl));
    box-shadow: 0px 0px 0px 3px hsla(var(--fc-error-hsl), 12%);
}
/* Media Queries */
@media (max-width: 1200px) {
  #hero {
    background-position: center;
    padding: 0 40px;
    text-align: center;
  }

  #hero h2,
  #hero h1 {
    font-size: 30px;
  }

  #hero button {
    padding: 10px 40px;
  }

  #product1 .pro-container {
    flex-direction: column;
    align-items: center;
  }

  #product1 .pro {
    width: 80%;
  }

  #about-head {
    flex-direction: column;
    text-align: center;
  }

  #about-head img {
    width: 80%;
    padding: 0;
  }

  #about-head div {
    padding: 0;
  }
}

@media (max-width: 768px) {
  #hero {
    height: 70vh;
    padding: 0 20px;
  }

  #hero h2,
  #hero h1 {
    font-size: 24px;
  }

  #hero button {
    padding: 8px 30px;
  }

  #product1 .pro {
    width: 90%;
  }

  #about-head img {
    width: 100%;
  }

  .formcarry-container {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  #hero {
    height: 60vh;
    padding: 0 10px;
  }

  #hero h2,
  #hero h1 {
    font-size: 20px;
  }

  #hero button {
    padding: 6px 20px;
  }
}
</style>
