<template>
  <div class="container output">
    <div class="output-area">
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
          <h2 class="content-title"> {{ outputItem.title }} </h2>
          <p class="content-detail"> {{ outputItem.caption }} </p>
        </div>
        <modal :val="postItem" v-show="showContent" @close="closeModal" />
      </section>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/parts/outputs/Modal'
import SkillSet01 from '@/components/parts/outputs/SkillSet01'
import SkillSet02 from '@/components/parts/outputs/SkillSet02'
import SkillSet03 from '@/components/parts/outputs/SkillSet03'

export default {
  name: 'Output',
  components: {
    Modal,
    SkillSet01,
    SkillSet02,
    SkillSet03
  },
  data () {
    return {
      title: 'OUTPUTS',
      showContent: false,
      postItem: '',
      outputItems: [
        {
          title: 'My Portfolio site',
          thumb: require('@/assets/img/output-thumb.jpg'),
          caption: '今、ご覧になられているこのサイトです。vue-cliで制作しました。',
          detail: `このサイトです。vue-cliでシングルページであるようになるべくスクロールさせず、スライドショーみたいな感じを意識して制作しました。
コンタクトフォームのバリデーションにはvee-validateを使用しています。`,
          lang: SkillSet01,
          url: 'https://kou1234ske.netlify.app'
        },
        {
          title: 'TAKUMI GARDEN',
          thumb: require('@/assets/img/output-thumb_01.jpg'),
          caption: '関西拠点の造園デザイナーのサイト、Wordpress使用',
          detail: '関西のエクステリア・外構・ガーデンの設計・施工、工事を行なっている外構・造園デザイナーのサイト、コーディング部分をメインに担当する。施工事例は外部サイトへリンクします。',
          lang: SkillSet02,
          url: 'https://www.takumi-garden.jp/'
        },
        {
          title: '蕎麦処多賀',
          thumb: require('@/assets/img/output-thumb_02.jpg'),
          caption: 'お蕎麦屋さんのサイト、Wordpress使用',
          detail: '熱海にある雄大さを感じるお蕎麦屋さんのwebサイトです。Wordpressにて制作、コーディング部分をメインに担当。本来、1ヵ月分しか表示されないカレンダーパーツを2ヵ月分表示されるようにカスタムしました。',
          lang: SkillSet03,
          url: 'https://www.tagasoba.jp/'
        }
        // {
        //   title: '作品No.5',
        //   thumb: require('@/assets/img/output-thumb_dummy.jpg'),
        //   caption: '架空の蕎麦屋のHPです。',
        //   detail: '普通のwebサイトです。実際には存在しない架空の蕎麦屋のHPです。',
        //   lang: 'JavascriptIcon',
        //   url: 'https://xxxxx.xxxx/'
        // },
        // {
        //   title: '作品No.6',
        //   thumb: require('@/assets/img/output-thumb_dummy.jpg'),
        //   caption: '架空の唐揚げ専門店のHPです。',
        //   detail: '普通のwebサイトです。実際には存在しない架空の唐揚げ専門店のHPです。',
        //   lang: 'SassIcon',
        //   url: 'https://xxxxx.xxxx/'
        // }
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
/* --for PC & global-- */
.output {
  padding-top: 3rem;
  text-align: left;

  &-area {
    padding: 0 1.5rem 0;
    max-width: 1200px;
    width: 96%;
    margin-bottom: 1rem;
  }

  &-items {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0 0 1rem;
    flex-wrap: wrap;
  }
}

.content {
  background-color:  #ffffff55;
  display: inline-block;
  margin: 15px auto;
  max-width: 520px;
  width: 29.5%;
  min-width: 120px;
  box-shadow: 0px 0px 4px #2b5c3b;
  min-height: 140px;
  border-radius: 15px;
  cursor: pointer;

  &-title {
    text-align: center;
    color: #fff;
    font-weight: normal;
    padding: 0.35rem 0;
    margin: 0;
    background: #56805d;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  &-detail {
    margin: .25rem auto 1.5rem;
    width: 92%;
    text-align: left;
  }

}

.thumbnail {
  margin: 0 0 -4px;

  img {
  max-width: 100%;
  border-radius: 15px 15px 0 0;
  }
}

/* --for tablet-- */
@media screen and (max-width: 959px){
  .output {

    &-area {
      padding: 0 .5rem 0;
      max-width: 750px;
      width: 100%;
      margin-bottom: 1rem;
    }
  }

  .content {
    width: 31.5%;
  }
}

/* --for tablet-ather -- */
@media screen and (max-width: 769px){

  .output-area {
    padding: 0;
    max-width: 575px;
    margin-bottom: 0rem;
  }
  .content {
    width: 46%;
    margin: 10px auto;
  }
}

/* --for tablet-ather -- */
@media screen and (max-width: 559px){
  .output {
    padding-top: 0;
    &-area {
      padding: 0 .75rem;
      width: 94%;
    }
  }
  .content {
    &-detail {
      font-size: .7rem;
    }
  }
}
</style>
