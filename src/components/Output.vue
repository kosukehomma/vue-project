<template>
  <div class="output">
    <div class="content" v-for="i in 6" :key=i>
      <h3> {{ name }} </h3>
      <p> {{ text }} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Output',
  data () {
    return {
      name: '好きな飲食店一覧',
      text: '自分の好きな飲食店の一覧を評価まとめて、アプリにしました。ここをこのように工夫しました。ここが難しかったです。今後はこうゆう機能を追加したいです。'.repeat(3)
    }
  }
}
</script>

<style>

div.output {
  text-align: center;
}

div.content {
  background-color: #eee;
  display: inline-block;
  margin: 10px;
  width: 30%;
}

h3 {
  color: white;
}

div.content > p {
  width: 90%;
  display: inline-block;
  text-align: left;
}

</style>
