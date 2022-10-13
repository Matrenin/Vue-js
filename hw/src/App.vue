<template>
  <div id="app">
    <nav>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/notfound">Not Found</router-link>
    </nav>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

a {
  margin: 0 10px;
}
</style>
