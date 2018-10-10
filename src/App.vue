<template>
  <div id="app">
   <app-header class="mb-2"></app-header>
    <router-view> </router-view>
  </div>
</template>

<script>
import Header from './components/shared/Header'

export default {
  name: 'App',
  components: {
    appHeader : Header
  }
}
</script>

<style>

</style>
