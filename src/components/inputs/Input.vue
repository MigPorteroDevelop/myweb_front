<script>
import { VueRecaptcha } from "vue-recaptcha";
import axios from "axios";
import { BASE_URL } from '@/main.js'; 

export default {
  data() {
    return {
      recaptchaVerified: false,
      errorMessage: "",
      formDisabled: true,
    };
  },
  props: {
    task: Object,
  },
  components: {
    VueRecaptcha,
  },
  methods: {
    handleSuccess(code) {
      this.recaptchaVerified = true;
      this.errorMessage = "";

      //add response code to the object of email
      this.task['g-recaptcha-response'] = code;
    },
    async submitForm() {
      if (this.recaptchaVerified) {        
        this.$refs.recaptcha.reset();
        try {
          const response = await axios.post(
            `${BASE_URL}/api/contact`,
            this.task
          );
          // console.log(response.data);

        } catch (error) {
          // console.log(error);
        }
        this.recaptchaVerified = false;
      } else {
        this.errorMessage = alert(this.$t("recaptcha.r1"));

      }
    },
  },
};
</script>

<template>
  <div>
    <label for="name" class="block mb-2 text-sm font-medium"
      >Name</label
    >
    <input
      type="text"
      id="name"
      v-model.trim="task.name"
      class="shadow-2xl border text-sm rounded-lg block w-72 md:w-full p-2.5"
      required
    />
  </div>
  <div>
    <label for="email" class="block mb-2 text-sm font-medium">{{
      $t("home.email")
    }}</label>
    <input
      type="email"
      id="email"
      v-model.trim="task.email"
      class="
        block
        p-3
        w-72
        md:w-full
        text-sm text-gray-900
        bg-gray-50
        rounded-lg
        border border-gray-300
        shadow-sm
      "
      required
    />
  </div>
  <div class="md:col-span-2">
    <label
      for="message"
      class="block mb-2 text-sm font-medium"
      >{{ $t("home.message") }}</label
    >
    <textarea
      type="text"
      id="message"
      v-model.trim="task.message"
      rows="6"
      class="
      block
        p-3
        w-72
        md:w-full
        text-sm text-gray-900
        bg-gray-50
        rounded-lg
        border border-gray-300
        shadow-sm
      "
      required
    />
  </div>
  <div class="pt-3 pb-3">
    <VueRecaptcha
      ref="recaptcha"
      sitekey="6Lczw0kpAAAAAHnY5mmgfmbFTdVXIyYUyEW-g6W7"
      :load-recaptcha-script="true"
      @verify="handleSuccess"
      @error="handleError"
    />
  </div>
  <div class="pt-3 pb-3">
    <button
      @click="submitForm"
      type="submit"
      class="
        w-36
        text-black
        bg-gradient-to-br
        from-blue
        to-white
        hover:bg-gradient-to-bl
        focus:ring-2 focus:outline-none focus:ring-blue
        font-medium
        rounded-lg
        text-sm
        px-5
        py-2.5
        ml-[75px]
        text-center
        md:w-full
        lg:w-36
        md:mx-auto
        xl:ml-0
      "
    >
      {{ $t("home.send") }}
    </button>
  </div>
</template>
