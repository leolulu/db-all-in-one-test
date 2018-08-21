<template>
  <div id="app">
    <mincontainer></mincontainer>
  </div>
</template>

<script>
import mainvue from './components/main'
import mincontainer from './components/maincontainer'

export default {
  name: 'app',
  components: {
    mainvue,
    mincontainer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
