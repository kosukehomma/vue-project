<template>
  <div class="container profile">
    <section class="profile-area">
      <h1 class="area-title">{{ profile }}</h1>
      <div class="greeding">
        <figure class="profile-img">
          <img v-bind:src="imgPath">
        </figure>
        <div class="greeding-box">
          <p>{{ greeding }}</p>
        </div>
      </div>
    </section>
    <section class="profile-area">
      <h1 class="area-title">{{ career }}</h1>
      <div class="career-box" v-for="(careerItem, index) in careerItems" :key=index>
        <h2 class="sub-area-title">{{ careerItem.job }} <span>{{ careerItem.period }}</span></h2>
        <dl>
          <dt class="catch">{{ careerItem.title }}</dt>
          <dd class="catch">{{ careerItem.detail }}</dd>
        </dl>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      profile: 'Profile',
      greeding: `1981年11月、東京都生まれ。
元々は人材系の会社で営業やスタッフ管理などをしていたが、2008年の部署異動により自社サイトのリニューアルをすることになり、web制作の道へ歩み出す。
その後は複数のweb制作会社で多岐にわたる制作を経験し、SES会社でフロントエンドエンジニアとなり、様々な客先に常駐し、開発経験を積み、現在に至る。`,
      career: 'Career',
      careerItems: [
        {
          job: `Front-End Engineer`,
          period: `2022/4 ~ Present`,
          title: `医療機器のフロント開発`,
          detail: `ブラウザで医療画像データを確認できる医療ビューワーの新規画面作成や改修、機能追加、リファクタリングなど`
        },
        {
          job: `Front-End Engineer`,
          period: `2021/8 ~ 2022/3`,
          title: `キャンペーン＆債権債務管理アプリのフロント開発`,
          detail: `スマホ決済サービスの会社の社内で使用するキャンペーンや債権債務処理を管理する社内業務用アプリケーションのフロントエンド開発、各画面のモックアップ制作やAPIとの連携などの非同期処理の実装など`
        },
        {
          job: `Markup Engineer`,
          period: `2020/8 ~ 2021/7`,
          title: `金融情報サイトの更新・修正`,
          detail: `大手金融系グループ企業での金融情報サイトの日々の為替情報や仮想通貨情報、LPのWEBデザイン／コーディング業務ほかバナー制作`
        },
        {
          job: `Markup / Front-End Engineer`,
          period: `2018/11 ~ 2020/4`,
          title: `会員向けサイト運用、銀行サイトのリニューアル`,
          detail: `某通信会社の会員向けサイトの修正、更新業務を半年。その後、某銀行サイトのリニューアルプロジェクトへアサインし、新規ページ追加、ソースチェック業務。`
        },
        {
          job: `Markup / Front-End Engineer`,
          period: `2017/7 ~ 2018/10`,
          title: `Fintech系企業のコーポレートサイトのリニューアル`,
          detail: `自動資産運用アプリを提供する金融機関（BtoC）のコーポレートサイトの運用・更新をメインに、新規ページの追加、キャンペーンページ、ランディングページのコーディング。`
        },
        {
          job: `Markup Engineer`,
          period: `2017/3 ~ 2017/6`,
          title: `流通業者向けのカタログアプリ`,
          detail: `東南アジアに進出している流通業者向けのカタログアプリのUIのデザイン、モックアップのコーディング。`
        },
        {
          job: `Markup Engineer`,
          period: `2011/3 ~ 2017/2`,
          title: `中小企業のコーポレートサイト、ECサイトの新規制作`,
          detail: `自社グループ企業のリニューアルから、顧客である日本全国の中小企業、飲食店、個人商店、病院などにホームページソリューションを提供する企業の制作部隊のマークアップエンジニアとして顧客企業のコーディング`
        },
        {
          job: `Web Designer / Coder`,
          period: `2008/4 ~ 2010/12`,
          title: `人材派遣会社のサイトのリニューアル＆求人用サイト立ち上げ`,
          detail: `2004年2月より4年間、営業管理部として従事していたが、2008年4月に部署異動により、自社サイトのリニューアル、新設の求人専用サイトの立ち上げに携わる。`
        }
      ],
      imgPath: require('@/assets/img/prof_dev.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
/* --for PC & global-- */
.profile {
  padding-top: 3rem;

  &-area {
    text-align: left;
    padding: 0 1.5rem;
    max-width: 850px;
    width: 100%;
    margin-bottom: 2.5rem;
    clear: both;
  }
  p {
    white-space:pre-wrap;
  }
}

.greeding {
  position: relative;
  padding-top: 1.5rem;
  margin-bottom: 2.5rem;
  &-box {
    position: relative;
    top: 25px;
    background: #ffffff77;
    box-shadow: 0px 0px 4px #a0b6a5;
    padding: 2.5rem 2.5rem 2.5rem 2rem;
    max-width: 590px;
    width: calc(71% - 40px);
    box-sizing: border-box;
    z-index: 10;
  }
  figure {
    margin: 1rem 1rem 1rem 2rem;
    img {
      max-width: 260px;

    }
  }
}

.profile-img {
  float: right;
  position: absolute;
  right: 2%;
  transform: translate(0 , -35px);
  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    background-image: linear-gradient(-65deg,#16235f,#01913d);
    width: 112px;
    height: 112px;
    z-index: -1;
  }
  &::before {
    top: 0;
    left: 0;
    margin-top: -10px;
    margin-left: -10px;
  }
  &::after {
    bottom: 0;
    right: 0;
    margin-bottom: -6px;
    margin-right: -10px;
  }
}

.career-box {
  padding: 0.25rem 0.75rem;
  margin-bottom: 1.5rem;
  background-color: #ffffff55;
  border-radius: 10px;
  box-shadow: 0px 0px 4px #a0b6a5;
}

dl {
  margin-top: 0.5rem;
}
dt {
  font-size: .75rem;
  margin-bottom: 0.35rem;
}
dd {
  font-size: .85rem;
  margin-left: 0;
}

/* --for tablet-- */
@media screen and (max-width: 959px){
  .profile {

    &-area {
      padding: 0 1.0rem;
      max-width: 750px;
      width: 95%;
      margin-bottom: 2.5rem;
    }
  }

  .greeding {
    &-box {
      top: 15px;
      padding: 1.5rem 1.5rem 1.5rem 1rem;
      max-width: 370px;
      width: calc(58% - 20px);
      box-sizing: border-box;
      z-index: 10;
    }
    figure {
      margin: 1rem 1rem 1rem 1.5rem;
      img {
        max-width: 240px;

      }
    }
  }
}

/* --for SP-- */
@media screen and (max-width: 559px){
  .profile {
    padding-top: 0;
    &-area {
      padding: 0 .75rem;
      max-width: 550px;
      margin-bottom: 1.5rem;
      width: 95.25%;
    }
  }
  .greeding {
    padding-top: .5rem;
    margin-bottom: 0;
    &-box {
      position: relative;
      top: -25px;
      background: #ffffff77;
      box-shadow: 0px 0px 4px #a0b6a5;
      padding: 1rem 1.25rem;
      max-width: 500px;
      width: 100%;
      box-sizing: border-box;
      margin: 0 auto;
      z-index: 7;
    }
    figure {
      margin: 1rem auto 0;
      max-width: 300px;
      img {
        margin: auto;
        max-width: 300px;
        width: 100%;
      }
    }
  }
  .profile-img {
    float: none;
    position: static;
    transform: translate(0 , -5px);
  }

  .career-box {
    padding: 0.25rem 0.75rem;
    margin-bottom: 1.5rem;
    background-color: #ffffff55;
    border-radius: 10px;
    box-shadow: 0px 0px 4px #a0b6a5;
  }
}
</style>
