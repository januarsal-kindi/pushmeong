<template>
 <div>
    <b-card-group deck>
        <b-card >
             <b-form-textarea id="textarea1"
                     v-model="newfeed"
                     placeholder="Enter something"
                      no-resize
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
    <pre class="mt-1">{{lenghtFeed}}/204</pre>
            <button  id="btn-input" variant="primary" @click="addPostAction(newfeed)">Meong</button>
        </b-card>
    </b-card-group>
</div>

</template>

<script>
import {mapActions} from 'vuex';
export default {
  data() {
    return {
      newfeed : ''
    };
  },
  computed :{
    lenghtFeed () {
      return this.newfeed.length ;
    }
  },
  methods : {
    ...mapActions([
      'addPostAction'
    ]),
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
