<template>
<div id="app">
    <HeaderCom />
    <!-- <router-view /> -->
    <!-- <HomePage /> -->
    <teleport to="#footer">
        <FooterCom />
    </teleport>
</div>
</template>

  
<script>
import HeaderCom from '../components/HeaderCom.vue';
import FooterCom from "../components/FooterCom.vue"
// import HomePage from "../pages/HomePage.vue"

export default {
    components: { 
        HeaderCom,
        // HomePage,
        FooterCom
    },
};
</script>
