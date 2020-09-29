<template>
  <div class="profile">
    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'サイトのタイトルが入ります。',
      text: 'テキストテキストテキストテキスト'
    }
  }
}
</script>

<style>

</style>
