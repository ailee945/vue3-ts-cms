<template>
  <div id="app">
    <router-link to="/login">login</router-link> |
    <router-link to="/main">main</router-link>
    <router-view />
    <el-button type="danger">危险</el-button>
    <el-button>危险</el-button>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
