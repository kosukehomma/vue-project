<template>
  <div class="container skills">
    <section class="skills-area">
      <h1 class="area-title">{{ title }}</h1>
      <h2 class="sub-area-title">{{ lang }}</h2>
      <div class="skill-icons">
        <HtmlIcon />
        <CssIcon />
        <JavascriptIcon />
        <JqueryIcon />
        <IllustratorIcon />
        <PhotoshopIcon />
        <SassIcon />
        <VueIcon /><br>
        <NodejsIcon />
        <NpmIcon />
        <LaravelIcon />
        <WordpressIcon />
        <!-- <VscodeIcon /> -->
        <!-- <BitbucketIcon /> -->
        <!-- <DockerIcon /> -->
        <!-- <GitlabIcon /> -->
        <GitIcon />
        <GulpIcon />
        <WebpackIcon />
        <VagrantIcon />
        <!-- <NuxtIcon /> -->
        <!-- <SlackIcon /> -->
        <!-- <PhpIcon /> -->
        <!-- <YarnIcon /> -->
      </div>
    </section>
    <section class="skills-area">
      <h2 class="sub-area-title">{{ work }}</h2>
      <ul class="skill-list">
        <li>スマホ、タブレットでも快適に閲覧できるレスポンシブデザインを制作できます。</li>
        <li>人材サービス会社のwebサイトからはじまり、様々な企業、店舗のサイト作りを手掛けてきた経験から、ご希望のデザイン案に沿ってより生産的なコーディングを行います。</li>
      </ul>
      <h2 class="sub-area-title">Favorite</h2>
      <ul class="skill-list">
        <li>YouTubeで動画巡り</li>
        <li>Funk Music</li>
      </ul>
    </section>
  </div>
</template>

<script>
import HtmlIcon from '@/components/parts/skills/HtmlIcon'
import CssIcon from '@/components/parts/skills/CssIcon'
import JavascriptIcon from '@/components/parts/skills/JavascriptIcon'
import JqueryIcon from '@/components/parts/skills/JqueryIcon'
import IllustratorIcon from '@/components/parts/skills/IllustratorIcon'
import PhotoshopIcon from '@/components/parts/skills/PhotoshopIcon'
import SassIcon from '@/components/parts/skills/SassIcon'
import VueIcon from '@/components/parts/skills/VueIcon'
import NodejsIcon from '@/components/parts/skills/NodejsIcon'
import NpmIcon from '@/components/parts/skills/NpmIcon'
import LaravelIcon from '@/components/parts/skills/LaravelIcon'
import WordpressIcon from '@/components/parts/skills/WordpressIcon'
import VscodeIcon from '@/components/parts/skills/VscodeIcon'
import BitbucketIcon from '@/components/parts/skills/BitbucketIcon'
import DockerIcon from '@/components/parts/skills/DockerIcon'
import GitlabIcon from '@/components/parts/skills/GitlabIcon'
import GitIcon from '@/components/parts/skills/GitIcon'
import GulpIcon from '@/components/parts/skills/GulpIcon'
import WebpackIcon from '@/components/parts/skills/WebpackIcon'
import VagrantIcon from '@/components/parts/skills/VagrantIcon'
import NuxtIcon from '@/components/parts/skills/NuxtIcon'
import SlackIcon from '@/components/parts/skills/SlackIcon'
import PhpIcon from '@/components/parts/skills/PhpIcon'
import YarnIcon from '@/components/parts/skills/YarnIcon'
import DjangoIcon from '@/components/parts/skills/DjangoIcon'
import KotlinIcon from '@/components/parts/skills/KotlinIcon'
import NetlifyIcon from '@/components/parts/skills/NetlifyIcon'
import NextIcon from '@/components/parts/skills/NextIcon'
import PythonIcon from '@/components/parts/skills/PythonIcon'
import ReactIcon from '@/components/parts/skills/ReactIcon'
import RubyIcon from '@/components/parts/skills/RubyIcon'
import RubyonrailsIcon from '@/components/parts/skills/RubyonrailsIcon'
import TypescriptIcon from '@/components/parts/skills/TypescriptIcon'
import VuetifyIcon from '@/components/parts/skills/VuetifyIcon'

export default {
  name: 'Skills',
  data () {
    return {
      title: 'Skills',
      lang: 'Programming Languages & tools',
      work: 'Strong points'
    }
  },
  components: {
    HtmlIcon,
    CssIcon,
    JavascriptIcon,
    JqueryIcon,
    IllustratorIcon,
    PhotoshopIcon,
    SassIcon,
    VueIcon,
    NodejsIcon,
    NpmIcon,
    LaravelIcon,
    WordpressIcon,
    VscodeIcon,
    BitbucketIcon,
    DockerIcon,
    GitlabIcon,
    GitIcon,
    GulpIcon,
    WebpackIcon,
    VagrantIcon,
    NuxtIcon,
    SlackIcon,
    PhpIcon,
    YarnIcon,
    DjangoIcon,
    KotlinIcon,
    NetlifyIcon,
    NextIcon,
    PythonIcon,
    ReactIcon,
    RubyIcon,
    RubyonrailsIcon,
    TypescriptIcon,
    VuetifyIcon
  }
}
</script>

<style lang="scss" scoped>
/* --for PC & global-- */
.skills {
  text-align: left;

  &-area {
    padding: 0 1.5rem 0;
    max-width: 850px;
    width: 93%;
    margin-bottom: 2.5rem;
  }
}

.skill-icons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 820px;
  margin: 0 auto;
  svg {
    width: 3rem;
    height: 3rem;
    margin: 0.75rem 0.75rem;
    overflow: initial;
    fill: rgb(88, 85, 85) !important;
  }
}

.skill-list {
  padding: 0 .75rem 0 1.5rem;
  margin-bottom: 1.5rem;

  li {
    list-style-type: none;
    position: relative;
    margin-bottom: 0.5rem;
    &::before {
      content: "";
      top: 4px;
      left: -20px;
      width: 15px;
      height: 10px;
      position: absolute;
      background-image: url(../assets/img/list-mark.png);
    }
  }
}

/* --for tablet-- */
@media screen and (max-width: 959px){
  .skills {
    &-area {
      padding: 0 .5rem 0;
      max-width: 750px;
      width: 90%;
      margin-bottom: 1.5rem;
    }
  }
}

/* --for SP-- */
@media screen and (max-width: 559px){
  .skills {
    &-area {
      max-width: 100%x;
      width: 95%;
      margin: 0 auto 1.5rem;
    }
  }
  .skill-icons {
    width: 90%;
    margin: 0 auto;
  }
}
</style>
