import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export const store = new Vuex.Store({
    strict: true,
    state: {
        category: 'this is category',
        count:0,
        axiosDataObj: {}
    },

    getters: {
        getCategory(state) {
            return state.category;
        }
    },
    mutations: {
        setCategoryData (state,payload){
            state.count++;
            // state.axiosDataObj.item = 'asdfasdf';
            // axios.get('/category')
            //     .then((response) => {
            //         // handle success
            //          state.axiosDataObj = response.data;
            //         console.log(response.data);
            //     })
            //     .catch(function (error) {
            //         // handle error
            //         console.log(error);
            //     })
        }
    },

    actions: {
        allCategoryItem: (context,payload) => {
            console.log('vvvvvvvvv');
            setTimeout(function() { // reach out for data
                context.commit('setCategoryData',payload,  { root: true });
            }, 2000);
        }
    },

    mutations: {

    },


});