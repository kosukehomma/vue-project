<template>
  <div id="app">
    <NavMenu />
      <transition mode="out-in">
        <router-view/>
      </transition>
    <FooterMenu />
  </div>
</template>

<script>

import NavMenu from '@/components/parts/NavMenu'
import FooterMenu from '@/components/parts/FooterMenu'

export default {
  name: 'App',
  components: {
    NavMenu,
    FooterMenu
  }
}
</script>

<style>
body {
  color: #333;
  font-family: 'Fjalla One', 'Kosugi', 'Montserrat', Helvetica, 'Avenir', Arial,'Century Gothic',  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
  background-image: url(./assets/img/bg.jpg);
}
h1 {
  margin: 0;
  padding: 0;
}
#app {
  position: relative;
  text-align: center;
  padding-bottom: 60px;
  height: 100%;
}
#app > div {
  padding-left: 250px;
}
.v-enter {
  transform: translate(0, 50px);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1s 0s ease;
}
.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.v-leave-to {
  transform: translate(0, -50px);
  opacity: 0;
}
.v-leave-active {
  transition: all .5s 0s ease;
}
@media (max-width: 768px) {
  #app > div {
    padding-left: 0;
    margin-top: 2.5rem;
  }
}
</style>
