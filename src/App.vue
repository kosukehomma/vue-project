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

<style lang="scss">
.v-enter {
  transform: translate(-50px, 0);
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
  transform: translate(50px, 0);
  opacity: 0;
}
.v-leave-active {
  transition: all .5s 0s ease;
}
</style>
