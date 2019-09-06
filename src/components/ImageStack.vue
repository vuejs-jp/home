<template>
  <div class="ImageStack" :class="classes">
    <ul class="list" :style="{ paddingBottom: `${aspectRatio}%` }" role="button" @click="next">
      <TransitionGroup name="slide">
        <li v-for="(stack, i) in stacks" :key="stack.src" class="item" :class="`item-${i}`">
          <figure class="figure">
            <img class="img" :src="stack.src" :alt="stack.alt">
          </figure>
        </li>
      </TransitionGroup>
    </ul>

    <div class="control">
      <transition :name="movingTo" mode="out-in">
        <p :key="currentImage.src" class="caption">
          {{ currentImage.alt }}
        </p>
      </transition>

      <div class="actions">
        <div class="action">
          <button class="button" @click="prev">
            <IconChevronLeft class="icon" />
          </button>
        </div>

        <div class="action">
          <button class="button" @click="next">
            <IconChevronRight class="icon" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import IconChevronLeft from './IconChevronLeft.vue'
import IconChevronRight from './IconChevronRight.vue'

interface Image {
  src: string
  alt: string
}

interface Classes {
  right: boolean
  bottom: boolean
  left: boolean
}

export default Vue.extend({
  components: {
    IconChevronLeft,
    IconChevronRight
  },

  props: {
    images: { type: Array, required: true } as PropOptions<Image[]>,
    aspectRatio: { type: Number, required: true },
    to: { type: String, required: true }
  },

  data () {
    return {
      index: 0,
      movingTo: 'next'
    }
  },

  computed: {
    classes (): Classes {
      return {
        right: this.to === 'right',
        bottom: this.to === 'bottom',
        left: this.to === 'left'
      }
    },

    currentImage (): Image {
      return this.images[this.index]
    },

    lastIndex (): number {
      return this.images.length - 1
    },

    stacks (): Image[] {
      return [0, 1, 2].map((n) => {
        const count = n + this.index
        const index = count > this.lastIndex ? count - this.lastIndex - 1 : count

        return this.images[index]
      }).reverse()
    }
  },

  methods: {
    next (): void {
      this.movingTo = 'next'

      this.index = this.index === this.lastIndex ? 0 : this.index + 1
    },

    prev (): void {
      this.movingTo = 'prev'

      this.index = this.index === 0 ? this.lastIndex : this.index - 1
    }
  }
})
</script>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.ImageStack.right {
  .item { transform-origin: 100% 50%; }

  .item-0 { transform: translateX(32px) scale(0.9); }
  .item-1 { transform: translateX(16px) scale(0.95); }

  .item-0.slide-enter,
  .item-0.leave-to {
    transform: translateX(48px) scale(0.85);
  }

  .item-2.slide-enter,
  .item-2.slide-leave-to {
    transform: translateX(-16px) scale(1.05);
  }

  .caption.next-enter    { opacity: 0; transform: translateX(8px); }
  .caption.next-leave-to { opacity: 0; transform: translateX(-8px); }

  .caption.prev-enter    { opacity: 0; transform: translateX(-8px); }
  .caption.prev-leave-to { opacity: 0; transform: translateX(8px); }
}

.ImageStack.left {
  .item { transform-origin: 0 50%; }

  .item-0 { transform: translateX(-32px) scale(0.9); }
  .item-1 { transform: translateX(-16px) scale(0.95); }

  .item-0.slide-enter,
  .item-0.leave-to {
    transform: translateX(-48px) scale(0.85);
  }

  .item-2.slide-enter,
  .item-2.slide-leave-to {
    transform: translateX(16px) scale(1.05);
  }

  .caption.next-enter    { opacity: 0; transform: translateX(-8px); }
  .caption.next-leave-to { opacity: 0; transform: translateX(8px); }

  .caption.prev-enter    { opacity: 0; transform: translateX(8px); }
  .caption.prev-leave-to { opacity: 0; transform: translateX(-8px); }
}

.list {
  position: relative;
}

.item {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  filter: blur(0);
  border-radius: 8px;
  box-shadow: var(--shadow-depth-5);
  transition: opacity 0.5s, transform 0.5s, filter 0.5s;
  transform: translateX(0) scale(1);
}

.item-0 .figure { filter: blur(32px); }
.item-1 .figure { filter: blur(16px); }

.item-0.slide-enter,
.item-0.slide-leave-to,
.item-2.slide-enter,
.item-2.slide-leave-to {
  filter: blur(16px);
  opacity: 0;
}

.figure {
  filter: blur(0);
  transition: filter 0.75s;
}

.img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
}

.control {
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 16px 4px 0;
}

.caption {
  position: absolute;
  top: 29px;
  left: 4px;
  flex-grow: 1;
  padding-right: 104px;
  font-size: 14px;
  line-height: 20px;
  color: var(--c-gray);
}

.caption.next-enter-active,
.caption.next-leave-active,
.caption.prev-enter-active,
.caption.prev-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}

.actions {
  position: relative;
  display: flex;
  flex-shrink: 0;
  width: 104px;
  margin-right: -16px;
}

.action + .action {
  padding-left: 8px;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;

  &:hover .icon {
    fill: var(--c-black);
  }
}

.icon {
  display: block;
  width: 16px;
  height: 16px;
  fill: var(--c-gray);
  transition: fill 0.25s;
}
</style>
