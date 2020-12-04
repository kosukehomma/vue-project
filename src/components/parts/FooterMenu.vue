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

@media (max-width: 768px) {
  footer {
    width: 100%;
    background-color: #004015;
  }
}
</style>
