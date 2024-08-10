<script lang="ts">
import { defineComponent } from "vue";
import { required, email } from "vuelidate/lib/validators";
import InputText from "./InputText.vue";
import InputTextarea from "./InputTextarea.vue";

interface Errors {
  name: string | null;
  email: string | null;
  message: string | null;
}

interface RequestBody {
  [key: string]: string;
}

export default defineComponent({
  components: {
    InputText,
    InputTextarea
  },

  data() {
    return {
      sending: false,

      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },

  computed: {
    errors(): Errors {
      return {
        name: this.nameError() || null,
        email: this.emailError() || null,
        message: this.messageError() || null
      };
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
    nameError(): string | void {
      const name = (this.$v.form as any).name;

      if (name.$error) {
        return this.$t("components.ContactForm.form.name.require-input") as string;
      }
    },

    emailError(): string | void {
      const email = (this.$v.form as any).email;

      if (email.$error && !email.required) {
        return this.$t("components.ContactForm.form.email.require-address") as string;
      }

      if (email.$error && !email.email) {
        return this.$t("components.ContactForm.form.email.invalid-address") as string;
      }
    },

    messageError(): string | void {
      const message = (this.$v.form as any).message;

      if (message.$error) {
        return this.$t("components.ContactForm.form.message.require-message") as string;
      }
    },

    reset(): void {
      this.$v.$reset();

      this.form = {
        name: "",
        email: "",
        message: ""
      };
    },

    send(): void {
      if (this.sending) {
        return;
      }

      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      this.performSend();
    },

    performSend(): Promise<void> {
      this.openDialog();

      const body = this.createRequestBody();

      return fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode(body)
      })
        .then(() => this.openSuccessAlert())
        .catch(() => this.openErrorAlert())
        .finally(() => this.reset());
    },

    createRequestBody(): RequestBody {
      return {
        "form-name": "contact",
        "name": this.form.name,
        "email": this.form.email,
        "message": this.form.message
      };
    },

    encode(requestBody: RequestBody): string {
      return Object.keys(requestBody)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(requestBody[key])}`
        )
        .join("&");
    },

    openDialog(): void {
      this.$store.dispatch("dialog/open", {
        title: this.$t("components.ContactForm.states.progress")
      });
    },

    openSuccessAlert(): void {
      this.$store.dispatch("alert/open", {
        type: "success",
        title: this.$t("components.ContactForm.states.success.title"),
        text: this.$t("components.ContactForm.states.success.text")
      });
    },

    openErrorAlert(): void {
      this.$store.dispatch("alert/open", {
        type: "error",
        title: this.$t("components.ContactForm.states.fail.title"),
        text: this.$t("components.ContactForm.states.fail.text")
      });
    }
  }
});
</script>

<template>
  <form
    class="ContactForm"
    name="contact"
    method="post"
    data-netlify="true"
    data-netlify-honeypost="bot-field"
    @submit.prevent="send"
  >
    <input
      type="hidden"
      name="form-name"
      value="contact"
    >
    <div class="group">
      <InputText
        v-model="form.name"
        name="name"
        :label="$t('components.ContactForm.form.name.label')"
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
        :label="$t('components.ContactForm.form.message.label')"
        :placeholder="$t('components.ContactForm.form.message.placeholder')"
        :rows="5"
        :error="errors.message"
        @blur="$v.form.message.$touch"
      />
    </div>

    <div class="action">
      <button class="button">
        {{ $t('components.ContactForm.form.button') }}
      </button>
    </div>
  </form>
</template>

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
