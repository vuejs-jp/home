<template>
  <form class="ContactForm" @submit.prevent>
    <div class="group">
      <InputText
        v-model="form.name"
        name="name"
        label="お名前"
        placeholder="John Doe"
        :error="errors.name"
        @blur="$v.form.name.$touch"
      />
    </div>

    <div class="group">
      <InputText
        v-model="form.email"
        type="email"
        name="email"
        label="Email"
        placeholder="john.doe@example.com"
        :error="errors.email"
        @blur="$v.form.email.$touch"
      />
    </div>

    <div class="group">
      <InputTextarea
        v-model="form.message"
        name="message"
        label="お問い合わせ内容"
        placeholder="お問い合わせ内容をご記入ください。"
        :rows="5"
        :error="errors.message"
        @blur="$v.form.message.$touch"
      />
    </div>

    <div class="action">
      <button class="button" @click="send">
        送信する
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { required, email } from 'vuelidate/lib/validators'
import InputText from './InputText.vue'
import InputTextarea from './InputTextarea.vue'

interface Errors {
  name: string | null
  email: string | null
  message: string | null
}

export default Vue.extend({
  components: {
    InputText,
    InputTextarea
  },

  data () {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },

  computed: {
    errors (): Errors {
      return {
        name: this.nameError() || null,
        email: this.emailError() || null,
        message: this.messageError() || null
      }
    }
  },

  validations: {
    form: {
      name: { required },
      email: { required, email },
      message: { required }
    }
  },

  methods: {
    nameError (): string | void {
      const name = (this.$v.form as any).name

      if (name.$error) {
        return 'お名前を入力してください。'
      }
    },

    emailError (): string | void {
      const email = (this.$v.form as any).email

      if (email.$error && !email.required) {
        return 'Emailアドレスを入力してください。'
      }

      if (email.$error && !email.email) {
        return 'Emailアドレスの形式が正しくありません。'
      }
    },

    messageError (): string | void {
      const message = (this.$v.form as any).message

      if (message.$error) {
        return 'お問い合わせ内容を入力してください。'
      }
    },

    send (): void {
      this.$v.$touch()

      if (this.$v.$invalid) {

      }
    }
  }
})
</script>

<style lang="postcss" scoped>
@import '@/assets/styles/variables';

.ContactForm {
  padding: 32px 16px;
  background-color: var(--c-white);
  border-radius: 8px;
  box-shadow: var(--shadow-depth-3);

  @media (min-width: 560px) {
    padding: 48px;
  }

  @media (min-width: 1056px) {
    padding: 64px;
  }
}

.group {
  & + & {
    padding-top: 32px;
  }
}

.action {
  padding-top: 48px;
}

.button {
  display: block;
  width: 100%;
  line-height: 48px;
  color: var(--c-white);
  text-align: center;
  background-color: var(--c-vue-green);
  border-radius: 4px;
  transition: background-color 0.25s;

  &:hover  { background-color: var(--c-vue-green-dark); }
  &:active { background-color: var(--c-vue-green-darker); }
}
</style>
