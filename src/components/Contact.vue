<template>
  <div class="container contact">
    <div class="contact-area">
      <h1 class="area-title">{{ title }}</h1>
      <section class="contact-form">
        <FormulateForm
        class="contact-form-wrapper"
        name="contact"
        method="POST"
        v-model="formValues"
        action=""
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        >
          <!-- <p>
            <label>YOUR NAME</label><br>
            <input type="text" name="name">
          </p> -->
          <FormulateInput type="hidden" name="bot-field">
          <FormulateInput type="hidden" name="form-name" value="contact">
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
  // methods: {
  //   submitHandler (data) {
  //     alert(`お問い合わせありがとうございます。${data.name}`)
  //   }
  // }
}
</script>

<style lang="scss">
/* --for PC & global-- */
.contact {
  padding-top: 3rem;

  &-area {
    width: 95%;
    margin: 0 auto 1.5rem;
  }
}

.contact-form {
  max-width: 600px;
  width: 100%;
  background: #f3fdf469;
  border: 2px dashed #1f9b00;
  border-radius: 15px;
  padding: 1rem 2rem;
  margin: 1rem auto;
  text-align: left;

  label {
    font-size: 20px;
    text-align: left;
    margin-bottom: .25rem;

    sup {
      color: #c03838;
      font-size: 22px;
    }
  }

  input,
  textarea {
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    padding: .5rem;
    border: 2px solid #dddddd;
    appearance: none;
    line-height: 1.5rem;
    margin-bottom: 0.5rem;
    font-family: 'Kosugi', Helvetica, 'Avenir', Arial,'Century Gothic',  sans-serif;
  }

  textarea {
    min-height: 150px;
  }

  .btn_area{
    text-align: right;
  }
}

.req label:after {
  content: " *";
  color: #c03838;
}
.formulate-input {
  margin-top: 1rem;
  margin-bottom: .25rem;

  ul {
    list-style: none;
    padding-left: .5rem;
    font-size: 14px;
    margin-top: 0;

    li {
      color:  #c03838;

      &::before {
        content: "※";
        margin-right: 0.25rem;
        display: inline-block;
      }
    }
  }
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
  &:focus {
    outline: none;
  }
  &:active {
    top: 1px;
    left: 1px;
    box-shadow: 0px 1px 1px #777;
  }
}

.formulate-input-element--submit button {
  background-color: #2e740d;
  color: #fff;
  padding: .5rem 1.25rem;
  font-size: 18px;
  font-family:  Helvetica, 'Avenir','Century Gothic',  sans-serif;
  box-shadow: 1px 2px 2px #777;
  border: none;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  letter-spacing: 1px;
  &:focus {
    outline:none;
  }
  &:active {
    top: 1px;
    left: 1px;
    box-shadow: 0px 1px 1px #777;
  }
}

/* --for tablet-- */
@media screen and (max-width: 959px){

  .contact-form {
    max-width: 500px;
    width: 75%;
  }
}

/* --for SP-- */
@media screen and (max-width: 559px){
  .contact {
    padding-top: 0;
    text-align: left;
  }
  .contact-form {
    max-width: 400px;
    width: 80%;
    padding: 1rem 1.25rem;
  }
}
</style>
