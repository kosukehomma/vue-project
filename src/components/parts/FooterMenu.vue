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
      footer: ' &copy; Kosuke Homma'
    }
  }
}
</script>

<style scoped>

footer {
  background-color: #ffffffaa;
  position: fixed;
  right: 0;
  bottom: 0;
}
footer > p {
  margin: 0.5rem;
}
</style>
