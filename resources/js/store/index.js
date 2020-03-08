export default {
    state: {
        category: 'this is category',
    },

    getters: {
        getCategory(state) {
            return state.category;
        }
    },

    actions: {
        allCategory(state, payload) {
            return axios.get('/category')
                .then((response) => {
                    // handle success
                    console.log(response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })

        }
    },

    mutations: {

    },


}