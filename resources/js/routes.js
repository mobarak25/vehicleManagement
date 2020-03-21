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
    {
        path: '/vehicle_type_list',
        name: 'vehicle_type_list',
        component: () => import("./components/admin/vehicle/VehicleTypeList.vue")
    },
    {
        path: '/vehicle_type_edit',
        name: 'vehicle_type_edit',
        component: () => import("./components/admin/vehicle/VehicleTypeEdit.vue")
    },


]