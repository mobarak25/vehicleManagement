import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {//==Data
        allCategoryObj: {}
    },

    mutations: {/*==Commit + track state changes (by using vue dev tools, we can do time travel debugging,
        and we can roleback a mutation,with reverse the state it's previous value )*/
        setCategoryData(state, payload) {
            return state.allCategoryObj = payload;

        }
    },

    actions: {//==Methods
        allCategoryItem: (context) => {
            axios.get('/category')
                .then((response) => {
                    context.commit('setCategoryData', response.data.categories);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    },

    getters: {//==Computed
        getCategory(state) {
            return state.allCategoryObj
        }
    },

});