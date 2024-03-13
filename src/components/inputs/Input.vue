<script setup>
import { ref } from "vue";
import axios from "axios";
import { BASE_URL } from '@/main.js';

const form = ref({});

const onClickCaptcha = async function () {
  return grecaptcha.execute('6LeDmX4pAAAAAIOBNIit7YtMC0jvrQ08SUHyQRk7', { action: 'submit' }).then(function (token) {
    return token;
  });
}

const submitForm = async function () {
  const responseCaptcha = await onClickCaptcha();

  if (responseCaptcha) {

    const response = await axios.post(
      `http://localhost/Send_Mail/sendMail.php`,
      {
        ...form.value,
        captcha: responseCaptcha,
      }
    );

    console.log(response);

    if (!response.response) {
      alert(response.messageResponse)
    }

  }
};

// ejemplo de php a validar
// $_POST['name']
// $_POST['email']
// $_POST['message']


// echo json_encode([
//   'response'=> false,
//   'messageRespose'=> 'El mail no es valido'
// ]);

</script>

<template>
  <div>
    <label for="name" class="block mb-2 text-sm font-medium">Name</label>
    <input type="text" id="name" v-model.trim="form.name"
      class="shadow-2xl border text-sm rounded-lg block w-72 md:w-full p-3" required />
  </div>
  <div>
    <label for="email" class="block mb-2 text-sm font-medium">{{
      $t("home.email")
    }}</label>
    <input type="email" id="email" v-model.trim="form.email" class="
        block
        p-3
        w-72
        md:w-full
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
        w-72
        md:w-full
        text-sm 
        bg-gray-50
        rounded-lg
        border
        shadow-sm
      " required />
  </div>
  <!-- <div class="pt-3 pb-3">
    <VueRecaptcha
      ref="recaptcha"
      sitekey="6Lczw0kpAAAAAHnY5mmgfmbFTdVXIyYUyEW-g6W7"
      :load-recaptcha-script="true"
      @verify="handleSuccess"
      @error="handleError"
    />
  </div>-->
  <div class="pt-3 pb-3">
    <button @click="submitForm" type="submit" class="
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
      ">
      {{ $t("home.send") }}
    </button>
  </div>
</template>
