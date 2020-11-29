<template>
  <div class="contact">
    <h1>{{ title }}</h1>
    <section class="contact-form">
      <form action="" method="">
        <p>
          <label>YOUR NAME<sup>*</sup></label><br>
          <input type="text" name="name">
        </p>
        <p>
          <label>YOUR EMAIL<sup>*</sup></label><br>
          <input type="email" name="email">
        </p>
        <p>
          <label>COMPANY</label><br>
          <input type="text" name="conpany">
        </p>
        <p>
          <label>MESSAGE<sup>*</sup></label><br>
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
}
h1 {
  color: #2c8829;
  font-size: 3.25rem;
  font-weight: normal;
  margin-bottom: 4.5rem;
  margin: 2rem auto 2.5rem;
  text-shadow: 25px 45px 1px #a7df96, 0px 0px 0px #034210;
}
.contact-form {
  max-width: 600px;
  width: 100%;
  background: #f3fdf469;
  border: 2px dashed #1f9b00;
  border-radius: 20px;
  padding: 1rem 2rem;
  margin: 1rem auto;
  text-align: left;
}
.contact-form label {
  font-size: 20px;
  text-align: left;
  margin-bottom: .25rem;
}
.contact-form label sup {
  color: #c03838;
  font-size: 22px;
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  padding: .75rem;
  border: 2px solid #dddddd;
  appearance: none;
  line-height: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: 'Kosugi', Helvetica, 'Avenir', Arial,'Century Gothic',  sans-serif;
}
.contact-form textarea {
  min-height: 250px;
}
</style>
