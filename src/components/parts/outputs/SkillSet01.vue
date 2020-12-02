<template>
  <div class="skillsetarea">
    <VueIcon />
    <HtmlIcon />
    <CssIcon />
    <SassIcon />
    <JavascriptIcon />
    <WebpackIcon />
    <NodejsIcon />
    <NpmIcon />
    <GitIcon />
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
  name: 'Output',
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

<style>
.skillsetarea {
  display: flex;
}
.icon-layout svg {
  width: 2.5rem;
  height: 2.5rem;
  margin: .25rem .6rem;
}
</style>
