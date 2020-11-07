<template>
  <div class="profile">
    <section class="profile-area">
    <p>{{ greeding }}</p>
    <p>{{ text }}</p>
    </section>
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

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: normal;
  max-width: 100vh;
  width: auto;
  min-height: 90vh;
}
.profile-area {
  text-align: left;
  padding: 0 1.5rem;
}
</style>
