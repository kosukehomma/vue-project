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
      title: 'お問い合わせフォーム',
      text: 'フォームとかSNSのアイコンとか載せてくよ'
    }
  }
}
</script>

<style>

</style>
