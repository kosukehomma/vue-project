<template>
  <div class="skills">
    <section class="skill-area">
      <h1>{{ title }}</h1>
      <h2>{{ lang }}</h2>
      <div class="skill-icons">
        <HtmlIcon />
        <CssIcon />
        <JavascriptIcon />
        <JqueryIcon />
        <IllustratorIcon />
        <PhotoshopIcon />
        <SassIcon />
        <VueIcon />
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
      <h2>{{ work }}</h2>
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

export default {
  name: 'Skills',
  data () {
    return {
      title: 'Skills',
      lang: 'Programming Languages & tools',
      work: 'WORKFLOW'
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
    YarnIcon
  }
}
</script>

<style scoped>
.skills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  max-width: 100vw;
  width: auto;
  min-height: 100vh;
}
.skill-area {
  text-align: left;
  padding-left: 2rem;
}
h1 {
  color: #2c8829;
  font-size: 3.25rem;
  font-weight: normal;
  margin-bottom: 2rem;
}
h2 {
  color:#549752;
  margin-top: 0;
  margin-bottom: 1.25rem;
  font-size: 1.25rem;
}
.skill-icons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.skill-icons svg {
  width: 3rem;
  height: 3rem;
  margin: 0.75rem 0.5rem;
  overflow: initial;
  fill: rgb(88, 85, 85) !important;
}
</style>
