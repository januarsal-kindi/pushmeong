<template>
  <div class="hello">
    <h1 :class="headingClasses">{{ msg }}</h1>
  </div>
</template>

<script>
import { FETCH_POST,GET_POST,GET_POST_COUNT,GET_POST_IS_LOADING } from '../../store/Type.js'

export default {
  name: 'hello',
  computed: {
    headingClasses: function getHeadingClasses() {
      return {
        red: this.isCrazy,
        blue: !this.isCrazy,
        shadow: this.isCrazy,
      };
    },
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      isCrazy: false,
    };
  },
  methods: {
    toggleClass() {
      this.isCrazy = !this.isCrazy;
    },
  },
};
</script>

<style scoped>
.red {
  color: red;
}
.blue {
  color: blue;
}
.shadow {
  box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.2);
}
</style>