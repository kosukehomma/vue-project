<template>
  <div class="container output">
    <h1 class="area-title">{{ title }}</h1>
    <section class="output-items">
      <!-- <div class="content" v-for="(outputItem, index) in outputItems" :key=index @click="openModal(outputItem)"
      v-bind:style="{
        'background-image': 'url(' + outputItem.thumb + ')'
      }"> -->
      <div class="content" v-for="(outputItem, index) in outputItems" :key=index @click="openModal(outputItem)">
        <figure class="thumbnail">
          <img v-bind:src="outputItem.thumb">
        </figure>
        <h2 class="output-title"> {{ outputItem.title }} </h2>
        <p class="content-detail"> {{ outputItem.caption }} </p>
      </div>
      <modal :val="postItem" v-show="showContent" @close="closeModal" />
    </section>
  </div>
</template>

<script>
import Modal from '@/components/parts/outputs/Modal'
import SkillSet01 from '@/components/parts/outputs/SkillSet01'
import SkillSet02 from '@/components/parts/outputs/SkillSet02'

export default {
  name: 'Output',
  components: {
    Modal,
    SkillSet01,
    SkillSet02
  },
  data () {
    return {
      title: 'OUTPUTS',
      showContent: false,
      postItem: '',
      outputItems: [
        {
          title: '作品No.1',
          thumb: require('@/assets/img/output-thumb.jpg'),
          caption: 'このサイトです。vue-cliで制作しました。',
          detail: 'このサイトです。もう少しデザインを洗練させたいです。アニメーションも付けたい',
          lang: SkillSet01,
          url: 'https://xxxxx.xxxx/'
        },
        {
          title: '作品No.2',
          thumb: require('@/assets/img/output-thumb_dummy.jpg'),
          caption: 'ブログサイトになります。思った事を書いていこうかと、',
          detail: 'ブログサイトになります。技術的な事とか、日々思った事を書いていこうかと思います。Nuxt.jsで作る予定です。',
          lang: SkillSet02,
          url: 'https://xxxxx.xxxx/'
        },
        {
          title: '作品No.3',
          thumb: require('@/assets/img/output-thumb_dummy.jpg'),
          caption: 'ちょっとしたwebアプリ',
          detail: 'LaravelとVueでちょっとしたwebアプリ作ってみました。',
          lang: 'CssIcon',
          url: 'https://xxxxx.xxxx/'
        },
        {
          title: '作品No.4',
          thumb: require('@/assets/img/output-thumb_dummy.jpg'),
          caption: '架空の会社のHPです。',
          detail: '普通のwebサイトです。実際には存在しない架空の会社のHPです。',
          lang: 'VueIcon',
          url: 'https://xxxxx.xxxx/'
        },
        {
          title: '作品No.5',
          thumb: require('@/assets/img/output-thumb_dummy.jpg'),
          caption: '架空の蕎麦屋のHPです。',
          detail: '普通のwebサイトです。実際には存在しない架空の蕎麦屋のHPです。',
          lang: 'JavascriptIcon',
          url: 'https://xxxxx.xxxx/'
        },
        {
          title: '作品No.6',
          thumb: require('@/assets/img/output-thumb_dummy.jpg'),
          caption: '架空の唐揚げ専門店のHPです。',
          detail: '普通のwebサイトです。実際には存在しない架空の唐揚げ専門店のHPです。',
          lang: 'SassIcon',
          url: 'https://xxxxx.xxxx/'
        }
      ]
    }
  },
  methods: {
    openModal (outputItem) {
      this.showContent = true
      this.postItem = outputItem
    },
    closeModal () {
      this.showContent = false
    }
  }
}
</script>

<style lang="scss" scoped>

.output-items {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 1rem 0.25rem;
  flex-wrap: wrap;
}

// .content {
//   background-color: #fbffec;
//   display: inline-block;
//   margin: 10px;
//   width: 30%;
//   min-width: 250px;
//   box-shadow: 1px 2px 3px #6d6d6d;
//   min-height: 100px;
//   cursor: pointer;
//   border-radius: 20px;
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: top;
//   padding-top: 150px;
// }
.content {
  background-color: #fbffec;
  display: inline-block;
  margin: 10px;
  width: 30%;
  max-width: 270px;
  min-width: 180px;
  box-shadow: 1px 2px 3px #6d6d6d;
  min-height: 100px;
  border-radius: 20px;
  cursor: pointer;

  & > p {
    width: 90%;
    display: inline-block;
    text-align: left;
  }
}

.thumbnail {
  margin: 0 0 -6px;

  img {
  max-width: 100%;
  border-radius: 20px 20px 0 0;
  }
}

.content-detail {
  margin: 0 0 1.5rem;
}

.output-title {
  color: #fff;
  font-weight: normal;
  padding: 0.5rem 0;
  margin: 0;
  background: #688d6e;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

</style>
