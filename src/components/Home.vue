<template>
  <div class="container home">
    <section class="home-area">
      <h1 class="name">
        <span v-for="(item, key) in title" :key="key">{{ item }}</span>
      </h1>
      <h2 class="work catch">{{ work }}</h2>
      <p class="catch">{{ text }}</p>
      <p class="catch">{{ text_en }}</p>
      <div class="icon-area">
        <a href="https://www.facebook.com/honma.jams4511" target="_blank">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/hommashigh/" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://www.pinterest.jp/hommer42/_saved/" target="_blank">
          <PinterestIcon />
        </a>
        <a href="https://github.com/honmakousuke" target="_blank">
          <GithubIcon />
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import FacebookIcon from '@/components/parts/sns/FacebookIcon'
import InstagramIcon from '@/components/parts/sns/InstagramIcon'
import PinterestIcon from '@/components/parts/sns/PinterestIcon'
import GithubIcon from '@/components/parts/skills/GithubIcon'
import TwitterIcon from '@/components/parts/sns/TwitterIcon'
import QiitaIcon from '@/components/parts/sns/QiitaIcon'

export default {
  name: 'Home',
  data () {
    return {
      title: 'KOSUKE HOMMA',
      work: 'Markup/Front-end engineer',
      text: `ご訪問ありがとうございます。
東京・神奈川で活動しているマークアップ・フロントエンドエンジニアです。
SNSなどで気軽にメッセージください。`,
      text_en: `Thank you for visiting.
I am a markup front-end engineer working in Tokyo and Kanagawa.
Feel free to message me on SNS etc.`
    }
  },
  components: {
    FacebookIcon,
    InstagramIcon,
    PinterestIcon,
    GithubIcon,
    TwitterIcon,
    QiitaIcon
  }
}
</script>

<style lang="scss" scoped>
/* --for PC & global-- */
.home {
  &-area {
    text-align: left;
    padding: 0 1.5rem;
  }
}

.icon-area {
  width: 100%;
  margin-top: 2rem;
}

.name {
  font-size: 6.0rem;
  font-weight: normal;
  color: #2b5435;
  margin-bottom: 3.5rem;
  text-shadow: 10px 10px 1px #b2c9ab;

  span {
    &:nth-child(n+7) {
      color: #80b827;
    }
  }
}

.work {
  color: #2b5435;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.catch {
  white-space:pre-wrap;
  padding-left: 1rem;
}

/* --for tablet-- */
@media screen and (max-width: 959px){
  .home {
    &-area {
      text-align: left;
      padding: 0 .75rem;
    }
  }

  .name {
    font-size: 10.6vw;
  }

  .catch {
    padding: 0 1.25rem 0 .5rem;
  }
}

/* --for SP-- */
@media (max-width: 559px) {
  .name {
    font-size: 13vw;
    margin-bottom: 1.5rem;
  }
  .work {
    margin-bottom: 1.0rem;
    font-size: 1.25rem;
  }
  .home-area {
    padding: 0 .75rem;
  }
  .catch {
    padding-left: .5rem;
  }
  .icon-area {
    margin-top: 1.5rem;
    svg {
      width: 3rem;
      height: 3rem;
      margin: .5rem;
    }
  }
}
</style>
