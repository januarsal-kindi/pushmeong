import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { API_URL } from './config'


const ApiServices = {
    init() {
        Vue.use(VueAxios, axios)
        Vue.axios.defaults.baseURL = API_URL
    },

    get(resource, slug = '') {
        return Vue.axios
            .get(`${resource}/${slug}`)
            .catch((error) => {
                throw new Error(`[RWV] ApiService ${error}`)
            })
    },

}

export default ApiServices;


export const  PostsServices = {
    get (slug) {
        return ApiServices.get('posts', slug)
    },
}