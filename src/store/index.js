import Vue from 'vue'
import Vuex from 'vuex'
import a from './module/a'
import b from './module/b'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        a,
        b
    }
});