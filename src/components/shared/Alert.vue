<template>
    <div role="alert" v-if="show" aria-live="polite" aria-atomic="true" class="alert alert-info alert-dismissible">
        <button type="button" aria-label="Close" class="close" @click="hideAlert">×</button>
       <slot></slot>
    </div>
</template>

<script>
export default {
    data(){
        return{
            show : true
        }
    },
    methods:{
      hideAlert : function () {
          return this.show = false
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
