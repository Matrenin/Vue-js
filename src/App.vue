<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <CalcComp/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CalcComp from './components/CalcComp.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CalcComp
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  margin-top: 60px;
}
</style>
