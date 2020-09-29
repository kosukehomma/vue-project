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
      title: '学習用ページ',
      text: '学習のためのページにする予定です。'
    }
  }
}
</script>

<style>

</style>
