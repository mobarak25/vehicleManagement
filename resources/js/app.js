require('./bootstrap');

window.Vue = require('vue');
//=====load vuex
// import Vuex from 'vuex'
// Vue.use(Vuex)

//import storeData from "./store/index"

import { store } from './store/store';

// const store = new Vuex.Store(
//     storeData
// )

//===vform
import { Form, HasError, AlertError } from 'vform'
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form = Form; //===for using global form;

// sweet alert 2
import Swal from 'sweetalert2'
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
window.atoast = Toast; //===for using global Toast;

//==vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { routes } from "./routes.js";
const router = new VueRouter({
    routes,
    mode: "history",
    //base: process.env.BASE_URL,
})

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);
Vue.component('footer-content', require('./components/admin/Footer.vue').default);
Vue.component('side-bar', require('./components/admin/SideMenu.vue').default);
Vue.component('top-menu', require('./components/admin/TopMenu.vue').default);



const app = new Vue({
    el: '#app',
    store,
    router,
});
