

export default {
    state: {
        category: 'this is category name'
    },
    getters: {
        getType(state) {
            return state.category;
        }
    },
    mutations: {

    },
    actions: {
        allType() {
            axios.get('/get-type')
        }
    },

}