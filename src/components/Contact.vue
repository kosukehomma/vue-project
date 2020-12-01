<template>
  <div class="contact">
    <h1>{{ title }}</h1>
    <section class="contact-form">
      <FormulateForm
      class="contact-form-wrapper"
      v-model="formValues"
      @submit="submitHandler"
      >
        <!-- <p>
          <label>YOUR NAME</label><br>
          <input type="text" name="name">
        </p> -->
        <FormulateInput
        type="text"
        name="name"
        v-model="name"
        class="req"
        label="YOUR NAME"
        placeholder="your name"
        validation="required|max:15"
        :validation-messages="{ required: 'YOUR NAMEは必須項目です',max: '15文字以内で入力して下さい' }"
        />
        <!-- <p>
          <label>YOUR EMAIL</label><br>
          <input type="email" name="email">
        </p> -->
        <FormulateInput
        type="email"
        name="email"
        v-model="email"
        class="req"
        label="YOUR EMAIL"
        placeholder="Email address"
        validation="required|email"
        :validation-messages="{ required: 'YOUR EMAILは必須項目です', email: `有効なメールアドレスではありません` }"
        />
        <!-- <p>
          <label>COMPANY</label><br>
          <input type="text" name="conpany">
        </p> -->
        <FormulateInput
        type="text"
        name="company"
        v-model="company"
        label="COMPANY"
        placeholder="your company"
        />
        <!-- <p>
          <label>MESSAGE</label><br>
          <textarea></textarea>
        </p> -->
        <FormulateInput
        name="message"
        type="textarea"
        v-model="message"
        class="req"
        label="MESSAGE"
        placeholder="何かメッセージや聞きたい事がございましたらこちらに入力してください。"
        validation="required"
        :validation-messages="{ required: '必須項目になります' }"
        />
        <!-- <p class="btn_area">
          <button id="send" class="send_btn">SEND</button>
        </p> -->
        <div class="btn_area">
          <FormulateInput
          type="submit"
          label="SEND"
          />
        </div>
      </FormulateForm>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'CONTACT',
      // text: 'フォームとかSNSのアイコンとか載せてくよ'
      formValues: {}
    }
  },
  methods: {
    submitHandler (data) {
      alert(`お問い合わせありがとうございます。${data.name}`)
    }
  }
}
</script>

<style>
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
.req label:after {
  content: " *";
  color: #c03838;
}
.formulate-input {
  margin-top: 1rem;
  margin-bottom: .25rem;
}
.formulate-input ul {
  list-style: none;
  padding-left: .5rem;
  font-size: 14px;
  margin-top: 0;
}
.formulate-input ul li {
  color:  #c03838;
}
.formulate-input ul li:before {
  content: "※";
  margin-right: 0.25rem;
  display: inline-block;
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
  min-height: 200px;
}
.contact-form .btn_area {
  text-align: right;
}
.send_btn {
  background-color: #2e740d;
  color: #fff;
  padding: .5rem 1.25rem;
  font-size: 16px;
  font-family: 'Kosugi', Helvetica, 'Avenir', Arial,'Century Gothic',  sans-serif;
  box-shadow: 1px 2px 2px #777;
  border: none;
  border-radius: 20px;
  position: relative;
}
.send_btn:focus{
  outline:none;
}
.send_btn:active {
  top: 1px;
  left: 1px;
  box-shadow: 0px 1px 1px #777;
}
.formulate-input-element--submit button {
  background-color: #2e740d;
  color: #fff;
  padding: .5rem 1.25rem;
  font-size: 18px;
  font-family:  Arial,'Kosugi', Helvetica, 'Avenir','Century Gothic',  sans-serif;
  box-shadow: 1px 2px 2px #777;
  border: none;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  letter-spacing: 1px;
}
.formulate-input-element--submit button:focus {
  outline:none;
}
.formulate-input-element--submit button:active {
  top: 1px;
  left: 1px;
  box-shadow: 0px 1px 1px #777;
}
</style>
