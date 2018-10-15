
import { PostsServices } from "../../config/ApiServices";

const state = {
  posts: [],
  isLoading: true,
  postCount: 0,
  isError : {status: false ,message: ""}
};

const getters = {
  getPostCount(state) {
    return state.postCount;
  },
  getPosts(state) {
    return state.posts;
  },
  getIsLoadingPost(state) {
    return state.isLoading;
  },
  getIsError(state){
    return state.isError
  }
};

const actions = {
  fetchPost({ commit }) {
    commit('FETCH_START');
    return PostsServices.get('')
      .then(({ data }) => {
        commit("MUTATE_SET_POST", {posts : data, posstCount: data.length});
        commit("MUTATE_ERROR_FETCH_POSTS",{status: false ,message: ""});

      })
      .catch(error => {
        commit("MUTATE_ERROR_FETCH_POSTS",{status: true ,message: "Something wrong"});
      });
  },
  addPostAction({commit},post){
      commit('MUTATE_ADD_POST',post)
  }
};

const mutations = {
  FETCH_START(state) {
    state.isLoading = true;
  },
  MUTATE_ADD_POST(state,post){
    console.log(state.posts);
    state.posts.unshift({'userId': 12,id:state.length+1,title:'Januar Salman',body:post})
  },
  MUTATE_SET_POST(state, { posts, posstCount }) {
    state.posts = posts;
    state.postCount = posstCount;
    state.isLoading = false;
  },
  MUTATE_ERROR_FETCH_POSTS(state,message){
    state.isError = message,
    state.isLoading = false;

  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
