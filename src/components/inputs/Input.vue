<script setup>
import { ref } from "vue";
import axios from "axios";

const form = ref({});
const isSent = ref(false);

const onClickCaptcha = async function () {
  return grecaptcha.execute('6LeDmX4pAAAAAIOBNIit7YtMC0jvrQ08SUHyQRk7', { action: 'submit' }).then(function (token) {
    return token;
  });
}

const submitForm = async function () {
  const responseCaptcha = await onClickCaptcha();

  if (responseCaptcha) {

    const response = await axios.post(
      `https://api.ceieuropa.com/sendMailComplete.php`,
      {
        ...form.value,
        captcha: responseCaptcha,
      }
    );

    console.log(response);

    if (!response.response) {
      isSent.value = true;
    }

  }
};
</script>

<template>
  <div>
    <label for="name" class="block mb-2 text-sm font-medium">Name</label>
    <input type="text" id="name" v-model.trim="form.name"
      class="shadow-2xl border text-sm rounded-lg block w-full p-3" required />
  </div>
  <div>
    <label for="email" class="block mb-2 text-sm font-medium">{{
      $t("home.email")
    }}</label>
    <input type="email" id="email" v-model.trim="form.email" class="
        block
        p-3
        w-full
        text-sm text-gray-900
        bg-gray-50
        rounded-lg
        border border-gray-300
        shadow-sm
      " required />
  </div>
  <div class="md:col-span-2">
    <label for="message" class="block mb-2 text-sm font-medium">{{ $t("home.message") }}</label>
    <textarea type="text" id="message" v-model.trim="form.message" rows="6" class="
      block
        p-3
        w-full
        text-sm 
        bg-gray-50
        rounded-lg
        border
        shadow-sm
      " required />
  </div>
  <div class="pt-3 pb-3">
    <button v-if="!isSent" @click="submitForm" type="submit" class="
        w-full
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
        text-center
      ">
      {{ $t("home.send") }}
    </button>
    <p v-else>{{ $t("footer.philosophy") }}</p>
  </div>
</template>
