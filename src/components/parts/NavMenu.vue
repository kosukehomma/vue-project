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

    <!-- PC用メニュー -->
    <ol class="pc-menu">
      <li v-on:click="onActive(item)" v-for="(item, index) in items" :key=index v-bind:class="{ 'active': activeItem === item }">
        <router-link v-bind:to=item.path>
          {{ item.title }}
        </router-link>
      </li>
    </ol>

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

<style scoped>
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
}
.sideMenu h1 {
  display: none;
}
.sideMenu span {
  margin: auto auto .5rem;
}
.sideMenu span img {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  border-radius: 100%;
  max-width: 9rem;
  max-height: 9rem;
  border: .6rem solid #14a243;
}
.hamburger_btn {
  display: none;
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
  margin: auto;
  font-size: 18px;
  position: relative;
  opacity: 0.6;
  transition: .4s ease;
}

li:hover {
  background: rgba(255, 255, 255, 0.2);
  opacity: 0.8;
}
li.active {
  background: transparent;
  pointer-events: none;
  opacity: 1;
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

@media (max-width: 768px) {
  .sideMenu {
    width: 100%;
    height: auto;
    display: block;
    padding: 0.5rem 0 0.5rem;
    z-index: 10;
    text-align: left;
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
  .sideMenu h1 {
    display: inline-block;
    color: #fff;
    margin: 0.25rem 0.5rem 0.25rem;
    font-weight: normal;
  }
  .sideMenu h1 a {
    position: sticky;
    line-height: 1;
  }
  .sideMenu span {
    margin: 0 0 0 .25rem;
    float: left;
  }
  .sideMenu span img {
    max-width: 2.5rem;
    max-height: 2.5rem;
    border: .2rem solid #14a243;
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
  }
  .hamburger_btn .line {
    position: absolute;
    top: 0;
    left: 0px;
    width: 32px;
    height: 2px;
    background: #fff;
    text-align: center;
  }
  .hamburger_btn .line_01 {
    top: 10px;
    transition: 0.4s ease;
  }
  .hamburger_btn .line_02 {
    top: 20px;
    transition: 0.4s ease;
  }
  .hamburger_btn .line_03 {
    top: 30px;
    transition: 0.4s ease;
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
  .sp-menu-enter-active, .sp-menu-leave-active {
    transition: 0.4s ease;
  }
  .sp-menu-enter, .sp-menu-leave-to {
    transform: translate(0px, -100px);
    transition: 0.4s ease;
    opacity: 0;
  }
  .sp-menu-leave, .sp-menu-enter-to{
    transform: translate(0px, -55px);
    transition: 0.4s ease;
    opacity: 1;
  }
  ol {
    position: absolute;
    top: 45px;
    right: 0;
    background: #004015dd;
    width: 220px;
    padding-bottom: 0.5rem;
  }
  li {
    border-bottom: 1px solid #fff;
  }
}
</style>
