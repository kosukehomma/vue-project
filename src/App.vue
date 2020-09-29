<template>
  <div id="app">
    <TabMenu />
    <router-view/>
    <FooterMenu />
  </div>
</template>

<script>

import TabMenu from '@/components/parts/TabMenu'
import FooterMenu from '@/components/parts/FooterMenu'

export default {
  name: 'App',
  components: {
    TabMenu,
    FooterMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 60px;
}
</style>
