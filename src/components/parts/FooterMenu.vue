<template>
  <footer>
    <p>{{ footer }}</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      footer: 'ここはフッターになります。'
    }
  }
}
</script>

<style scoped>

footer {
  display: block;
  width: 100%;
  background-color: skyblue;
  position: fixed;
  bottom: 0;
}

footer p {
  color: #fff;
}

</style>
