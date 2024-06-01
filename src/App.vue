<template>
  <MainLayout/>
</template>

<script>
import MainLayout from './Layouts/MainLayout.vue';

export default {
  name: 'App',
  components: {
    MainLayout
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Spartan', sans-serif;
}

h1 {
    font-size: 50px;
    line-height: 64px;
    color: #222;
}

h2 {
    font-size: 46px;
    line-height: 54px;
    color: #222;
}

h4 {
    font-size: 20px;
    color: #222;
}

h6 {
    font-weight: 700;
    font-size: 12px;
}

p {
    font-size: 16px;
    color: #465b52;
    margin: 15px 0 20px 0;
}

.section-p1 {
    padding: 40px 80px;
}

.section-m1 {
    margin: 40px 0;
}

button.normal {
    font-size: 14px;
    font-weight: 600;
    padding: 15px 30px;
    color: #000;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    outline: none;
    transition: 0.2s;
}

button.white {
    font-size: 13px;
    font-weight: 600;
    padding: 11px 18px;
    color: #fff;
    background-color: transparent;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid #fff;
    outline: none;
    transition: 0.2s;
}

body {
    width: 100%;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
