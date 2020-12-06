<template>
  <nav class="sideMenu" :class="{'sticky': position > 0}">
    <h1 class="myname">
      <router-link to="/">KOSUKE HOMMA</router-link>
    </h1>
    <span><img v-bind:src="imgPath"></span>

    <div class="hamburger_btn" v-on:click="ActiveBtn=!ActiveBtn">
      <span class="line line_01" v-bind:class="{ 'btn_line01':ActiveBtn }"></span>
      <span class="line line_02" v-bind:class="{ 'btn_line02':ActiveBtn }"></span>
      <span class="line line_03" v-bind:class="{ 'btn_line03':ActiveBtn }"></span>
    </div>

    <!-- SP用メニュー -->
    <transition name="sp-menu">
      <div class="sp-menu" v-show="ActiveBtn">
        <ol>
          <li v-on:click="onActive(item)" v-for="(item, index) in items" :key=index v-bind:class="{ 'active': activeItem === item }">
            <router-link v-bind:to=item.path>
              {{ item.title }}
            </router-link>
          </li>
        </ol>
      </div>
    </transition>

    <!-- PC用メニュー -->
    <ol class="pc-menu">
      <li v-on:click="onActive(item)" v-for="(item, index) in items" :key=index v-bind:class="{ 'active': activeItem === item }">
        <router-link v-bind:to=item.path>
          {{ item.title }}
        </router-link>
      </li>
    </ol>

  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      items: [
        { title: 'HOME', path: '/', class: 'active' },
        { title: 'PROFILE', path: '/profile' },
        { title: 'SKILLS', path: '/skills' },
        { title: 'OUTPUTS', path: '/outputs' },
        { title: 'CONTACT', path: '/contact' }
      ],
      activeItem: null,
      ActiveBtn: false,
      position: 0,
      imgPath: require('@/assets/img/prof_develop.jpg')
    }
  },
  methods: {
    onActive (item) {
      if (this.activeItem === item) {
        this.activeItem = null
      } else {
        this.activeItem = item
        this.ActiveBtn = false
      }
    }
  },
  ready: function () {
    let self = this
    document.onscroll = function (e) {
      self.position = document.documentElement.scrollTop || document.body.scrollTop
    }
  }
}
</script>

<style lang="scss" scoped>
/* --for PC & global-- */
.sideMenu {
  background: #004015;
  width: 240px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  z-index: 10;
  h1 {
    display: none;
  }
  span {
    margin: auto auto .5rem;
    img {
      margin: 0;
      box-sizing: border-box;
      padding: 0;
      border-radius: 100%;
      max-width: 9rem;
      max-height: 9rem;
      border: .6rem solid #14a243;
    }
  }
}

.hamburger_btn {
  display: none;
}
.pc-menu {
  display: initial;
}
.sp-menu {
  display: none;
}
ol {
  margin-left: auto;
  margin-bottom: auto;
  width: 100%;
  padding: 0;
  list-style: none;
}

li {
  width: 200px;
  height: 50px;
  margin: 0 auto;
  font-size: 1.25rem;
  position: relative;
  opacity: 0.6;
  transition: .4s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    opacity: 0.8;
  }
  &.active {
    background: transparent;
    pointer-events: none;
    opacity: 1;
  }
}

/*  router-linkがaタグとして表示されてたのでスタイルをaタグに書いた*/
a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  line-height: 50px;
}

/* --for tablet-- */
@media screen and (max-width: 959px){
  .sideMenu {
    width: 160px;

    span {
      img {
        max-width: 7.5rem;
        max-height: 7.5rem;
        border: .4rem solid #14a243;
      }
    }
  }

  li {
    width: 100%;
    height: 45px;
  }
}

/* --for SP-- */
@media (max-width: 559px) {
  .sideMenu {
    width: 100%;
    height: auto;
    display: block;
    padding: 0.5rem 0 0.5rem;
    z-index: 10;
    text-align: left;
    h1 {
      display: inline-block;
      color: #fff;
      margin: 0.25rem 0.5rem 0.25rem;
      font-weight: normal;
      &.myname {
        text-shadow: none;
        font-size: 2rem;
      }
      a {
        position: sticky;
        line-height: 1;
      }
    }
    span {
      margin: 0 0 0 .25rem;
      float: left;
      img {
        max-width: 2.5rem;
        max-height: 2.5rem;
        border: .2rem solid #14a243;
      }
    }
  }
  .sticky {
    background: rgba(200,200,200, 0.5);
    text-align: left;
    text-shadow: 0px 1px 2px #777;
    color: white;
    font-size: 2rem;
    padding-left: 10px;
    height: 2rem;
    line-height: 4rem;
  }
  .sp-menu {
    display: block;
  }
  .pc-menu {
    display: none;
  }
  .hamburger_btn {
    display: initial;
    width: 40px;
    height: 42px;
    cursor: pointer;
    z-index: 15;
    position: absolute;
    top: 7px;
    right: 7px;
    .line {
      position: absolute;
      top: 0;
      left: 0px;
      width: 32px;
      height: 2px;
      background: #fff;
      text-align: center;
    }
    .line_01 {
      top: 10px;
      transition: 0.4s ease;
    }
    .line_02 {
      top: 20px;
      transition: 0.4s ease;
    }
    .line_03 {
      top: 30px;
      transition: 0.4s ease;
    }
  }
  .btn_line01 {
    transform: translateY(10px) rotate(-45deg);
    transition: 0.4s ease;
  }
  .btn_line02 {
    transition: 0.4s ease;
    opacity: 0;
  }
  .btn_line03 {
    transform: translateY(-10px) rotate(45deg);
    transition: 0.4s ease;
  }

  .sp-menu-enter {
    transform: translate(0px, -50px);
    // transition: 0.4s ease;
    opacity: 0;
  }
  .sp-menu-enter-to{
    // transition: 0.4s ease;
    opacity: 1;
  }
  .sp-menu-enter-active {
    transition: 0.4s ease;
  }
  .sp-menu-leave{
    transform: translate(0, 0);
    transition: 0.4s ease;
    opacity: 1;
  }
  .sp-menu-leave-to {
    transform: translate(0px, -50px);
    transition: 0.4s ease;
    opacity: 0;
  }
  .sp-menu-leave-active {
    transition: 0.4s ease;
  }

  ol {
    position: absolute;
    right: 0;
    background: #004015dd;
    width: 220px;
    padding-bottom: 0.5rem;
    margin-top: 8px;
  }
  li {
    border-bottom: 1px solid #fff;
  }
}
</style>
