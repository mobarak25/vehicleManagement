require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

import { routes } from "./routes.js";


const router = new VueRouter({
    routes,
    mode: "history",
    base: process.env.BASE_URL,
})

const app = new Vue({
    el: '#app',
    router
});
