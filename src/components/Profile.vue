<template>
  <div class="profile">
    <h1>{{ greeding }}</h1>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      greeding: 'ご挨拶が入ります',
      text: 'テキストテキストテキストテキスト'
    }
  }
}
</script>

<style>

</style>
