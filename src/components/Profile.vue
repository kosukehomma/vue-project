<template>
  <div class="profile">
    <section class="profile-area">
      <h1>{{ profile }}</h1>
      <div class="greeding">
        <p class="catch">{{ greeding }}</p>
        <figure class="profile-img">
          <img v-bind:src="imgPath">
        </figure>
      </div>
    </section>
    <section class="profile-area">
      <h1>{{ career }}</h1>
      <div class="career-box" v-for="(careerItem, index) in careerItems" :key=index>
        <h2>{{ careerItem.job }} <span>{{ careerItem.period }}</span></h2>
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
人材系の会社でスタッフへの仕事の紹介や管理の仕事などをしていたが、部署異動で、自社サイトのリニューアルをすることになったのが全てのはじまり。
その後はweb制作会社やSIerで多岐にわたる制作に従事し、現在に至る。`,
      career: 'Career',
      careerItems: [
        {
          job: `Markup Engineer`,
          period: `2020/7 ~ Present`,
          title: `金融情報サイトの更新・修正`,
          detail: `大手金融系グループ企業での金融情報サイトの日々の為替情報や仮想通貨情報、LPのWEBデザイン／コーディング業務ほかバナー制作など`
        },
        {
          job: `Markup / FrontEnd Engineer`,
          period: `2018/11 ~ 2020/3`,
          title: `会員向けサイト運用、銀行サイトのリニューアル`,
          detail: `某通信会社の会員向けサイトの修正、更新業務を半年。その後、某銀行サイトのリニューアルプロジェクトへアサインし、新規ページ追加、ソースチェック業務。`
        },
        {
          job: `Markup / FrontEnd Engineer`,
          period: `2017/7 ~ 2018/10`,
          title: `Fintech スタートアップ`,
          detail: `自動資産運用アプリを提供する金融機関（BtoC）のコーポレートサイトの運用・更新をメインに、新規ページ、キャンペーンページ、ランディングページのコーディング。`
        },
        {
          job: `Markup Engineer`,
          period: `2014/6 ~ 2017/2`,
          title: `中小企業のコーポレートサイト、ECサイトの新規制作`,
          detail: `日本全国の中小企業、飲食店、個人商店、病院などにホームページソリューションを提供する企業の制作部隊のマークアップエンジニアとして顧客企業のコーディング`
        },
        {
          job: `Web Designer / Coder`,
          period: `2011/3 ~ 2014/4`,
          title: `web制作・システム開発会社でのデザイナー兼コーダー`,
          detail: `自社グループ企業の全面的なリニューアルから始まり、顧客サイトの制作、金融システムのモックアップ制作、ソーシャルゲームのUIデザインからテスト業務など`
        },
        {
          job: `Web Designer / Coder`,
          period: `2008/4 ~ 2010/12`,
          title: `人材派遣会社のサイトのリニューアル＆求人用サイト立ち上げ`,
          detail: `2004年2月より4年間、営業管理部として従事していたが、2008年4月に部署移動により、サイトのリニューアル、新設の求人専用サイトの立ち上げに携わる。`
        }
      ],
      imgPath: require('@/assets/img/profile_image.jpg')
    }
  }
}
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: normal;
  max-width: 100vw;
  width: auto;
  min-height: 100vh;
  padding-top: 3rem;
}
.profile-area {
  text-align: left;
  padding: 0 1.5rem;
  margin-bottom: 2rem;
}
.greeding {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.greeding p {
  background: rgba(255, 255, 255, 0.6);
  padding: 3rem 2rem;
}
.greeding figure img {
  max-width: 240px;
}
.profile-img {
  position: relative;
  right: 2%;
}
.profile-img::before,
.profile-img::after {
  content: "";
  position: absolute;
  display: block;
  background-image: linear-gradient(-65deg,#16235f,#01913d);
  width: 112px;
  height: 112px;
  z-index: -1;
}
.profile-img::before {
  top: 0;
  left: 0;
  margin-top: -10px;
  margin-left: -10px;
}
.profile-img::after {
  bottom: 0;
  right: 0;
  margin-bottom: -6px;
  margin-right: -10px;
}
.career-box {
  padding: 0 0.75rem;
  margin-bottom: 1.5rem;
}
h1 {
  color: #2c8829;
  font-size: 3.25rem;
  font-weight: normal;
  margin-bottom: 4.5rem;
  text-shadow: 25px 45px 1px #a7df96, 0px 0px 0px #034210;
}

h2 {
  color: #081607;
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 0.5rem;
}
h2::after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background-color: #0b4941;
  background-image: linear-gradient(-65deg,#16235f,#01913d);
  box-shadow: 2px 1px 3px rgb(112, 151, 108);
}
dl {
  margin-top: 0.5rem;
}
dt {
  font-size: .75rem;
  margin-bottom: 0.25rem;
}
dd {
  font-size: .85rem;
  margin-left: 0;
}
.catch {
  white-space: pre-wrap;
  padding-left: 1rem;
}
</style>
