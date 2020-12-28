<template>
  <div class="container contact">
    <div class="contact-area">
      <h1 class="area-title">{{ title }}</h1>
      <section class="contact-form">
        <template v-if="!finished">
          <validation-observer
          ref="observer"
          v-slot="{ invalid, validated }"
          tag="form"
          class="contact-form-wrapper"
          name="contact"
          method="POST"
          data-netlify="true"
          @submit.prevent
          >

            <div class="form-content">
              <label for="name" class="req">YOUR NAME</label><br>
              <validation-provider
              v-slot="{ errors }"
              rules="required|max:20"
              name="お名前"
              >
                <input
                type="text"
                name="name"
                v-model="form.name"
                placeholder="your name"
                autocomplete="name"
                >
                <span class="v-message" v-show="errors.length">
                  {{ errors[0] }}
                </span>
              </validation-provider>
            </div>
            <div class="form-content">
              <label for="email" class="req">YOUR EMAIL</label><br>
              <validation-provider
              v-slot="{ errors }"
              rules="required|email|max:60"
              name="メールアドレス"
              >
                <input
                type="email"
                placeholder="Email address"
                v-model="form.email"
                name="email"
                autocomplete="email"
                >
                <span class="v-message" v-show="errors.length">
                  {{ errors[0] }}
                </span>
              </validation-provider>
            </div>
            <div class="form-content">
              <label>COMPANY</label><br>
              <input type="text" name="conpany" v-model="form.company" placeholder="your company">
            </div>
            <div class="form-content">
              <label for="message" class="req">MESSAGE</label><br>
              <validation-provider
              v-slot="{ errors }"
              rules="required|max:1000"
              name="メッセージ"
              >
                <textarea
                name="message"
                v-model="form.message"
                placeholder="何かメッセージや聞きたい事がございましたらこちらに入力してください。"
                >
                </textarea>
                <span class="v-message" v-show="errors.length">
                  {{ errors[0] }}
                </span>
              </validation-provider>
            </div>
            <div class="form-content btn_area">
              <button
              @click="handleSubmit"
              class="send_btn"
              :disabled="invalid || !validated"
              v-text="'SEND'"
              />
            </div>
          </validation-observer>
        </template>
        <template v-else>
          <p class="finished" v-text="'お問い合わせありがとうございました。'" />
          <!-- <p class="finished"><router-link to="/" v-text="'OK'" /></p> -->
        </template>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      title: 'CONTACT',
      form: {
        name: '',
        email: '',
        company: '',
        message: ''
      },
      finished: false
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit () {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      axios
        .post(
          '/',
          this.encode({
            'form-name': 'contact',
            ...this.form
          }),
          axiosConfig
        )
        .then(() => {
          this.finished = true
        })
    }
  }
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
    &.req {
      &::after {
        content: " *";
        color: #c03838;
      }
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
    margin-bottom: .25rem;
    font-family: 'Kosugi', Helvetica, 'Avenir', Arial,'Century Gothic',  sans-serif;
  }

  textarea {
    min-height: 150px;
  }

  .btn_area{
    text-align: right;
  }
  p {
    font-size: .75rem;
    span {
      color: #c03838;
    }
    &.finished {
      font-size: 1rem;
      font-weight: bold;
      text-align: center;
      a {
        font-size: 1.25rem;
      }
    }
  }
}
.form-content {
  font-size: .75rem;
  min-height: 5.3rem;
  margin-bottom: .75rem;
  position: relative;
  .v-message {
    color: #c03838;
  }
}
.send_btn {
  background-color: #2e740d;
  min-height: auto;
  color: #fff;
  padding: .5rem 1.25rem;
  font-size: 18px;
  font-family:  Helvetica, 'Avenir','Century Gothic',  sans-serif;
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
  &:disabled {
    background-color:#777;
    opacity: .3;
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
    &-form {
      max-width: 400px;
      width: 80%;
      padding: 1rem 1.25rem;

      p {
        &.finished {
          font-size: 1rem;
          font-weight: 700;
          text-align: center;
        }
      }
    }
  }

}
</style>
