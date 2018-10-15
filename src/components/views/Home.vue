<template>
    <b-container fluid>
        <b-row>
            <b-col> </b-col>
            <b-col cols="6">
              <app-input-feed></app-input-feed>  
              <app-loading v-if="getIsLoadingPost"></app-loading> 
              <app-alert  v-if="getIsError.status">{{getIsError.message}}</app-alert>
              <app-card class="item" v-for="(post, index) in getPosts" :post = "post"  :key="index"></app-card>
            </b-col>
            <b-col></b-col>
        </b-row>
    </b-container>
</template>

<script>

import {Alert,Loading,InputFeed} from '../shared'
import Card from '../Home/Card'
import { mapGetters, mapActions } from "vuex";
import {
  FETCH_POST,
  GET_POST,
  GET_POST_COUNT,
  GET_POST_IS_LOADING
} from "../../store/Type.js";

export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js Axcvpp"
    };
  },
  computed: {
    ...mapGetters([
      "getPostCount", 
      "getPosts", 
      "getIsLoadingPost",
      "getIsError"]),
 
  },
  components: {
    appInputFeed: InputFeed,
    appCard: Card,
    appAlert: Alert,
    appLoading : Loading
  },
  methods : {
    ...mapActions([
      "fetchPost"
    ])
  },
  mounted() {
    this.fetchPost();
  }
};
</script>
