<template>
  <transition mode="out-in" name="modal" appear>
    <div id="overlay">
      <section class="modal">
        <div class="modal-header">
          <button class="close-btn" @click="$emit('close')"></button>
        </div>
        <img :src="val.thumb">
        <dl class="modal-description">
          <dt>{{ val.title }}</dt>
          <dd>{{ val.detail }}</dd>
        </dl>
        <div class="modal-skillset">
          <span>使用技術：</span><component :is="val.lang"></component>
        </div>
        <p>URL：{{ val.url }}</p>

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

<style lang="scss">
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
  max-width: 850px;
  width: 65%;
  padding: 3rem 3rem 2.5rem;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 0 5px #444;
  position: relative;
  &-header {
    position: absolute;
    top: 0;
    right: 1.5%;
    height: 30px;
  }

  & > img {
    width: 100%;
  }

  &-description {
    margin-top: 0;
    dt {
      font-size: 1.15rem;
      padding: 0.35rem 0;
      text-align: center;
      border-top: 1px dashed #165821;
      border-bottom: 1px dashed #165821;
      background: #16582122;
    }
    dd {
      margin: .25rem 0 1.5rem;
      padding: 0 .5rem .5rem;
      line-height: 2;
      border-bottom: 1px dashed #165821;
    }
  }
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
  border: none;
  padding: 0;
  cursor: pointer;
  background: transparent;
  &::before {
    content: "×";
    display: block;
    font-size: 3rem;
  }
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
</style>
