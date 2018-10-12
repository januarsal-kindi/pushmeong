<template>
    <b-container fluid>
        <b-row>
            <b-col> </b-col>
            <b-col cols="6">
              <app-input-feed></app-input-feed>
              <app-card class="item" v-for="(post, index) in getPosts" :post = "post"  :key="index"></app-card>
            </b-col>
            <b-col></b-col>
        </b-row>
    </b-container>
</template>

<script>
import InputFeed  from '../shared/Inputfeed'
import Card from '../Home/Card'
import {mapGetters,mapActions} from 'vuex'
import { FETCH_POST,GET_POST,GET_POST_COUNT,GET_POST_IS_LOADING } from '../../store/Type.js'

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js Axcvpp'
    }
  },
   computed: {
    ...mapGetters([
     'getPostCount',
     'getPosts',
      'getIsLoadingPost'
    ]),
    wqwq(){
      return 0
    }
  },
  components : {
     appInputFeed : InputFeed,
     appCard : Card
  },
  mounted(){
    this.$store.dispatch('fetchpost')
  },

}
</script>
