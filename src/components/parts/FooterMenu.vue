<template>
  <footer>
    <p v-html="footer"></p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      footer: ' &copy; 2020 Kosuke Homma'
    }
  }
}
</script>

<style lang="scss" scoped>
/* --for PC & global-- */
footer {
  width: 240px;
  position: fixed;
  color: #fff;
  left: 0%;
  bottom: 0;
  z-index: 15;
}
footer > p {
  margin: 0.5rem;
}

/* --for tablet-- */
@media screen and (max-width: 959px){
  footer {
    width: 160px;
    font-size: .8rem;
  }
}

/* --for SP-- */
@media (max-width: 559px) {
  footer {
    width: 100%;
    background-color: #004015;
    box-shadow: 0px -1px 4px #888;
  }
}
</style>
