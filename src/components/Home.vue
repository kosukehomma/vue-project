<template>
  <div class="home">
    <section class="home-area">
      <h1 class="name">
        <span v-for="(item, key) in title" :key="key">{{ item }}</span>
      </h1>
      <h2 class="work catch">{{ work }}</h2>
      <p class="catch">{{ text }}</p>
      <div class="icon-area">
        <FacebookIcon />
        <InstagramIcon />
        <PinterestIcon />
        <GithubIcon />
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
ご質問・ご依頼などありましたら「CONTACT」ページからか、SNSのDMなどでお願いします。`
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

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: normal;
  max-width: 100vw;
  width: auto;
  min-height: 90vh;
}
.home-area {
  text-align: left;
  padding: 0 1.5rem;
}
.icon-area {
  width: 100%;
  margin-top: 2rem;
}
.name {
  font-size: 5.5rem;
  font-weight: normal;
  color: #2b5435;
}
.name span:nth-child(n+7) {
  color: #80b827;
}
.work {
  color: #2b5435;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}
.catch {
  white-space:pre-wrap;
  padding-left: 1rem;
}

</style>
