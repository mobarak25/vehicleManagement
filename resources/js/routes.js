export const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import("./components/admin/AdminHome.vue")
    },
    {
        path: '/vehicles',
        name: 'vehicles',
        component: () => import("./components/admin/vehicle/VehicleList.vue")
    },


]