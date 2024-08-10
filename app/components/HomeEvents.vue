<script lang="ts">
import { defineComponent } from "vue";
import IconConnpass from "./icons/IconConnpass.vue";
import StyleMount from "./StyleMount.vue";
import ButtonOutline from "./ButtonOutline.vue";
import ImageStack from "./ImageStack.vue";

export default defineComponent({
  components: {
    StyleMount,
    ButtonOutline,
    ImageStack
  },

  data() {
    return {
      iconConnpass: IconConnpass,
      stackImageTo: "right",
      images: [
        {
          src: "/img/home/vue-fes-japan-2018-evan-you.jpg",
          alt: "Evan You at Vue Fes Japan 2018."
        },
        {
          src: "/img/home/vue-fes-japan-2018-sarah-drasner.jpg",
          alt: "Sarah Drasner at Vue Fes Japan 2018."
        },
        {
          src: "/img/home/vue-fes-japan-2018-yoshiya-oki.jpg",
          alt: "Yoshiya Oki at Vue Fes Japan 2018."
        },
        {
          src: "/img/home/vue-fes-japan-2018-guillaume-chau.jpg",
          alt: "Guillaume Chau at Vue Fes Japan 2018."
        },
        {
          src: "/img/home/vue-fes-japan-2018-sebastien-chopin.jpg",
          alt: "Sébastien Chopin at Vue Fes Japan 2018."
        },
        {
          src: "/img/home/vue-fes-japan-2018-katashin.jpg",
          alt: "Katashin at Vue Fes Japan 2018."
        }
      ]
    };
  },

  mounted() {
    this.refreshImageStackDirection();

    window.addEventListener("resize", this.refreshImageStackDirection);
  },

  methods: {
    refreshImageStackDirection(): void {
      this.stackImageTo = window.innerWidth >= 768 ? "left" : "right";
    }
  }
});
</script>

<template>
  <StyleMount
    class="HomeEvents u-wrapper"
    tag="section"
  >
    <div class="container u-container">
      <div class="content u-section-content">
        <p class="u-section-content__heading">
          {{ $t('components.HomeEvents.heading') }}
        </p>
        <i18n
          tag="h2"
          path="components.HomeEvents.title"
          class="title u-section-content__title"
        >
          <template #newline>
            <br>
          </template>
        </i18n>
        <p class="u-section-content__body">
          {{ $t('components.HomeEvents.body1') }}
        </p>
        <p class="u-section-content__body">
          {{ $t('components.HomeEvents.body2') }}
        </p>

        <div class="u-section-content__actions">
          <div class="u-section-content__action">
            <ButtonOutline
              tag="a"
              :block="true"
              href="https://vuejs-meetup.connpass.com/"
              :icon="iconConnpass"
              :label="$t('components.HomeEvents.connpass')"
            />
          </div>
        </div>
      </div>

      <div class="image">
        <div class="image-container">
          <ImageStack
            :images="images"
            :aspect-ratio="1440 / 944 * 100"
            :to="stackImageTo"
          />
        </div>
      </div>
    </div>
  </StyleMount>
</template>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.HomeEvents {
  padding-top: 32px;
  padding-bottom: 32px;

  @media (min-width: 375px) {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  @media (min-width: 768px) {
    padding-top: 96px;
    padding-bottom: 64px;
  }

  @media (min-width: 1088px) {
    padding-bottom: 96px;
  }
}

.HomeEvents.mount-active {
  transition: opacity 0.5s, transform 0.5s;
  transition-delay: 0.75s;
}

.HomeEvents.mount {
  opacity: 0;
  transform: translateY(8px);
}

.container {
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
}

.content {
  max-width: 560px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-shrink: 0;
    order: 2;
    width: 50%;
    max-width: 100%;
    padding: 0 0 0 24px;
  }

  @media (min-width: 1056px) {
    padding: 0 0 48px 24px;
  }

  @media (min-width: 1088px) {
    padding: 0 0 48px 32px;
  }
}

.title {
  @media (min-width: 1056px) {
    margin-right: -16px;
  }
}

.image {
  max-width: 384px;
  padding: 64px 0 0;
  margin: 0 auto;
  transform: translateX(-8px);

  @media (min-width: 768px) {
    flex-shrink: 0;
    order: 1;
    width: 50%;
    max-width: 100%;
    padding: 0 24px 0 0;
    transform: translateX(0);
  }

  @media (min-width: 1088px) {
    padding: 0 32px 0 0;
  }
}

.image-container {
  @media (min-width: 1088px) {
    margin-left: -24px;
  }
}
</style>
