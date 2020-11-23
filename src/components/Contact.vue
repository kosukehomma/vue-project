<template>
  <div class="contact">
    <h1>{{ title }}</h1>
    <section class="contact-form">
      <form action="" method="">
        <p>
          <label>名前</label><br>
          <input type="text" name="name">
        </p>
        <p>
          <label>フリガナ</label><br>
          <input type="text" name="kana">
        </p>
        <p>
          <label>メールアドレス</label><br>
          <input type="email" name="email">
        </p>
        <p>
          <label>お問い合わせ内容</label><br>
          <textarea></textarea>
        </p>
      </form>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      title: 'CONTACT',
      text: 'フォームとかSNSのアイコンとか載せてくよ'
    }
  }
}
</script>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: normal;
  max-width: 100vw;
  width: auto;
  min-height: 100vh;
  padding-top: 3rem;
}
h1 {
  color: #2c8829;
  font-size: 3.25rem;
  font-weight: normal;
  margin-bottom: 2rem;
  text-shadow: 25px 30px 0 #a7df96,
  0px 0px 2px #034210;
}
.contact-form {
  max-width: 600px;
  width: 100%;
  background: #f3fdf4;
  border-radius: 20px;
  padding: 1rem;
  margin: 1rem auto;
}
</style>
