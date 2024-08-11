<script lang="ts" setup>
import InputBase from "./InputBase.vue";

withDefaults(defineProps<{
  name: string;
  label: string;
  placeholder: string;
  rows: number;
  value: string;
  error: string | null;
}>(), {
  rows: 3,
  error: null
});

defineEmits<{
  input: [value: string];
  blur: [];
}>();
</script>

<template>
  <InputBase
    class="InputTextarea u-relative"
    :name="name"
    :label="label"
    :error="!!error"
  >
    <textarea
      :id="name"
      class="input"
      :name="name"
      :placeholder="placeholder"
      :rows="rows"
      :value="value"
      @input="$emit('input', ($event.target as HTMLTextAreaElement).value)"
      @blur="$emit('blur')"
    />
    <transition name="fade">
      <p
        v-if="error"
        class="error"
      >
        {{ error }}
      </p>
    </transition>
  </InputBase>
</template>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.InputTextarea.has-error {
  .input {
    border-color: var(--c-danger);
  }
}

.input {
  width: 100%;
  padding: 11px 16px;
  background-color: var(--c-white-mute);
  border: 1px solid transparent;
  border-radius: 4px;
  transition: border-color 0.25s, background-color 0.25s, color 0.25s;

  &::placeholder {
    color: var(--c-gray-light);
  }

  &:hover,
  &:focus {
    border-color: var(--c-vue-green);
  }

  &:focus {
    background-color: var(--c-white);
  }
}

.error {
  position: absolute;
  bottom: -20px;
  left: 0;
  padding-left: 4px;
  font-size: 12px;
  line-height: 20px;
  color: var(--c-danger);
}

.error.fade-enter-active,
.error.fade-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}

.error.fade-enter,
.error.fade-leave-to {
  opacity: 0;
  transform: translateX(-4px);
}
</style>
