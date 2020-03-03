require('./bootstrap');

window.Vue = require('vue');

//===vform
import { Form, HasError, AlertError } from 'vform'
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form = Form; //===for using global form;

//==vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);
Vue.component('footer-content', require('./components/admin/Footer.vue').default);
Vue.component('side-bar', require('./components/admin/SideMenu.vue').default);
Vue.component('top-menu', require('./components/admin/TopMenu.vue').default);

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
