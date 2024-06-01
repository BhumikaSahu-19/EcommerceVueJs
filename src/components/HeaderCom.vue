<template>
    <header>
      <a href="#"><img src="assets/logo (1).png" class="logo" alt=""></a>
     <NavBar/>
    </header>
  </template>
  
  <script>
  import NavBar from "./NavBar.vue"
  export default {
    name: 'HeaderCom',
    components:{
      NavBar,
   }
  }
  
  </script>
  
  