<script lang="ts">
import { defineComponent } from "vue";
import IconCheckCircle from "./icons/IconCheckCircle.vue";
import IconXCircle from "./icons/IconXCircle.vue";
import AppModal from "./AppModal.vue";

interface Data {
  type: "success" | "error";
  title: string;
  text: string;
}

interface Classes {
  success: boolean;
  error: boolean;
}

export default defineComponent({
  components: {
    AppModal
  },

  computed: {
    data(): Data {
      return this.$store.state.modal.data;
    },

    classes(): Classes {
      return {
        success: this.data.type === "success",
        error: this.data.type === "error"
      };
    },

    icon() {
      if (this.data.type === "error") {
        return IconXCircle;
      }

      return IconCheckCircle;
    }
  },

  methods: {
    close(): void {
      this.$store.dispatch("alert/close");
    }
  }
});
</script>

<template>
  <AppModal name="alert">
    <div
      class="AppAlert"
      :class="classes"
    >
      <div class="box">
        <div class="status">
          <component
            :is="icon"
            class="status-icon"
          />
        </div>

        <div class="body">
          <p class="title">
            {{ data.title }}
          </p>
          <p class="text">
            {{ data.text }}
          </p>
        </div>

        <div class="action">
          <button
            class="button"
            @click="close"
          >
            {{ $t('components.AppAlert.close') }}
          </button>
        </div>
      </div>
    </div>
  </AppModal>
</template>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.AppAlert {
  margin-top: 64px;
  margin-right: 12px;
  margin-bottom: 96px;
  margin-left: 12px;

  @media (min-width: 375px) {
    margin-right: 16px;
    margin-left: 16px;
  }

  @media (min-width: 560px) {
    margin-right: 32px;
    margin-left: 32px;
  }
}

.AppAlert.success {
  .status-icon { fill: var(--c-vue-green); }
}

.AppAlert.error {
  .status-icon { fill: var(--c-danger); }
}

.box {
  max-width: 640px;
  padding: 48px 16px;
  margin: 0 auto;
  background-color: var(--c-white);
  border-radius: 8px;
  box-shadow: var(--shadow-depth-3);

  @media (min-width: 560px) {
    padding: 64px 48px 48px;
  }
}

.status {
  width: 48px;
  height: 48px;
  margin: 0 auto;
}

.status-icon {
  width: 48px;
  height: 48px;
}

.body {
  padding: 24px 8px 0;
}

.title {
  font-size: 20px;
  line-height: 32px;
  text-align: center;
}

.text {
  padding-top: 12px;
  text-align: center;
}

.action {
  padding-top: 48px;
  text-align: center;
}

.button {
  min-width: 128px;
  font-size: 14px;
  line-height: 48px;
  line-height: 48px;
  background-color: var(--c-white-mute);
  border-radius: 4px;
  transition: background-color 0.25s;

  &:hover {
    background-color: var(--c-gray-lighter);
  }
}
</style>
