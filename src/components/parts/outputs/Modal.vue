<template>
  <transition mode="out-in" name="modal" appear>
    <div id="overlay">
      <section class="modal">
        <img :src="val.thumb">
        <p>説明：{{ val.title }}</p>
        <p>作業範囲：{{ val.detail }}</p>
        <div>
          使用技術：<component :is="val.lang"></component></div>
        <p>URL：{{ val.url }}</p>
        <button class="close-btn" @click="$emit('close')">CLOSE</button>
      </section>
      <div class="overwrap" @click="$emit('close')"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: ['val']
}
</script>

<style>
#overlay {
  z-index: 11;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .4);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 120px;
}

.modal {
  z-index: 15;
  width: 55%;
  padding-top: 5em;
  padding-bottom: 5em;
  text-align: center;
  background: #fff;
  border-radius: 20px;
}

.modal > img {
  width: 95%;
}

.overwrap {
  z-index: 12;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.close-btn {
  font-size: 1.25rem;
  color: #fff;
  background-color: #658b66;
  border: 1px solid #658a66;
  box-shadow: 2px 2px 3px #646464;
  padding: 0.25rem 1rem;
  border-radius: 15px;
  position: relative;
}

.close-btn:focus {
  outline: none;
}

.close-btn:active {
  top: 2px;
  left: 2px;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.6s, transform 0.6s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}
.icon-layout {
  max-width: 50px;
}
</style>
