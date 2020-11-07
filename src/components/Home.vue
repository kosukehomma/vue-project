<template>
  <div class="home">
    <section class="home-area">
      <h1 class="name">
        <span v-for="(item, key) in title" :key="key">{{ item }}</span>
      </h1>
      <p class="catch">{{ work }}</p>
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

export default {
  name: 'Home',
  data () {
    return {
      title: 'YUJI AKUTSU',
      work: 'マークアップ・フロントエンドエンジニアです。',
      text: `1981年11月、東京都生まれ。      
元々は人材系の会社で人員の手配や管理の仕事などをしていましたが、
法改正や、当時の会社の事情など色々と重なり、自社サイト更新からこの業界にたどり着きました。
それからは携わったwebサイトのジャンルは多岐に渡り、数だけは多いのではないかと思います。`
    }
  },
  components: {
    FacebookIcon,
    InstagramIcon,
    PinterestIcon,
    GithubIcon
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: normal;
  max-width: 100vh;
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
  font-size: 6.5rem;
  font-weight: normal;
  color: #2b5435;
}
.name span:nth-child(n+6) {
  color: #80b827;
}
.catch {
  white-space:pre-wrap;
  padding-left: 1rem;
}

</style>
