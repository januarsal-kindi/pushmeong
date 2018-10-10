import Vue from 'vue'
import Vuex from 'vuex'
import Post from './Modules/Posts'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
    Post,
    }
 })
  