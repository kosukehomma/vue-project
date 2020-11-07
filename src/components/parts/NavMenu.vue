<template>
  <nav class="sideMenu">
    <h1 class="myname">KOSUKE HOMMA</h1>
    <span><img src="@/assets/prof_test.jpg"></span>

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
        { title: 'TOP', path: '/', class: 'active' },
        { title: 'PROFILE', path: '/profile' },
        { title: 'SKILLS', path: '/skills' },
        { title: 'OUTPUTS', path: '/outputs' },
        { title: 'CONTACT', path: '/contact' },
        { title: 'vue-lesson', path: '/vue-lesson' }
      ],
      activeItem: null,
      ActiveBtn: false
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
  }
}
</script>

<style scoped>
.sideMenu {
  background: #004015;
  width: 220px;
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

li:last-child {
  background-color:brown;
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
    position: relative;
  }
  .sideMenu h1 {
    display: inline-block;
    color: #fff;
    margin: 0.25rem 0.5rem 0.5rem;
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
    top: 40px;
    right: 0;
    background: #004015dd;
    width: 220px;
  }
  li {
    border-bottom: 1px solid #fff;
  }
}
</style>
