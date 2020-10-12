import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state: {
        topColor: {
            background: "#111",
            color: "white",
        },
        btmColor: {
            background: "#111",
            color: "white",
        },
        bgcColor: {
            background: "#333",
            color: "white",
        },
        active: 0
    },
    mutations: {

    }
})

export default store