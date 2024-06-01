import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "../pages/HomePage.vue";
import AboutUs from '../pages/AboutUs.vue';
import ContactUs from '../pages/ContactUs.vue';
import ContactForm from "../components/ContactForm.vue"
import ProductPage from '../pages/ProductPage.vue';
import ProductDetails from "../components/ProductDetails.vue"


const routes = [
    { path: '/',component: HomePage },
    { path: '/about-us',component: AboutUs },
    { path: '/contact-us', component: ContactUs },
    { path: '/contact-form', component: ContactForm },
    { path: '/productpage', component: ProductPage },
    { path: '/product/:id', name:'ProductDetails', component: ProductDetails},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
