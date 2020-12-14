<template>
  <transition mode="out-in" name="modal" appear>
    <div id="overlay">
      <section class="modal">
        <div class="modal-header">
          <h1 class="area-title">{{ val.title }}</h1>
        </div>
        <figure class="modal-capture">
          <img :src="val.thumb">
        </figure>
        <div class="modal-description">
          <h2 class="sub-area-title">Description</h2>
          <p>{{ val.detail }}</p>
        </div>
        <div class="modal-skillset">
          <h2 class="sub-area-title">Language / tool</h2>
          <component :is="val.lang"></component>
        </div>
        <div class="modal-link">
          <p><span>URL</span><a :href="val.url" target="_blank">{{ val.url }}</a></p>
        </div>
        <div class="modal-closed">
          <button class="close-btn" @click="$emit('close')"></button>
        </div>
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
/* --for PC & global-- */
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
  max-width: 800px;
  width: 65%;
  padding: 3rem 3rem 2.5rem;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 0 5px #444;
  position: relative;

  &-header {
    .area-title {
      font-size: 1.55rem;
      margin-bottom: .75rem;
      text-shadow: 3px 4px 5px #b3d3a7;
      &::before {
        width: 7px;
        height: 1.6rem;
        margin-right: .35rem;
      }
    }
  }

  &-capture {
    margin: 0 auto;
    text-align: center;

    > img {
      width: 85%;
    }
  }

  &-description {
    margin: 0 auto 1.5rem;
    p {
      margin-top: 0;
      padding: 0 0.5rem;
      font-size: .85rem;
    }
  }

  &-skillset {
    margin-bottom: 1.5rem;
  }

  &-link {
    font-family: Arial,'Kosugi', sans-serif;

    span {
      background: #ddd;
      border: 1px solid #666;
      border-radius: 5px;
      padding: 0.05rem 0.25rem;
      margin-right: .5rem;
      color: #12692f;
    }
  }

  &-closed {
    position: absolute;
    top: 0;
    right: 2%;
    height: 30px;
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
  position: relative;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 3rem;
  background: transparent;
  transition: .4s;
  &::before {
    content: "×";
    display: block;
    font-size: 3.5rem;
  }
  &:focus {
    outline: none;
  }

  &:active,
  &:hover {
    transform: rotate(90deg);
  }
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

/* --for tablet-- */
@media screen and (max-width: 959px){
  #overlay {
    padding-left: 80px;
  }
  .modal {
    max-width: 600px;
    min-height:65%;
    width: 52%;
    padding: 2rem 2rem 1.5rem;

    &-capture {
      & > img {
        width: 100%;
      }
    }
  }
  .close-btn {
    &::before {
      font-size: 2.5rem;
    }
  }
}

/* --for SP-- */
@media screen and (max-width: 559px){
  #overlay {
    padding-left: 0;
  }

  .modal {
    max-width: 450px;
    min-height:50%;
    width: 75%;
    padding: 1.5rem 1.05rem .75rem;
    &-header {
      .area-title {
        font-size: 1.15rem;
        margin-bottom: .5rem;
        &::before {
          width: 5px;
          height: 1.2rem;
        }
      }
    }
    &-description {
      margin: 0 auto .5rem;
      p {
        padding: 0 .25rem;
        font-size: .7rem;
      }
    }

    &-skillset {
      margin-bottom: .5rem;
    }

    &-link {
      font-size: .75rem;
    }

    .sub-area-title {
      font-size: .85rem;
      margin-bottom: .5rem;
    }

    .skillsetarea {
      .icon-layout {
        margin: 0 .15rem .15rem;
        span {
          font-size: 9px;
          font-weight: normal;
        }
        svg {
          width: 1.7rem;
          height: 1.7rem;
          margin: 0 .05rem .15rem;
        }
      }
    }
  }
}
</style>
