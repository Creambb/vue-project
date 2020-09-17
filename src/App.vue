<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <el-button>el-button</el-button>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    height: 100%;
    width: 100%;
  }
</style>
