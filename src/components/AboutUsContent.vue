<template>
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
</template>

<script>
export default {
    name: 'AboutUs'
}
</script>

<style scoped>
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
</style>
