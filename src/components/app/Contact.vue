<script>
import Input from "../../components/inputs/Input.vue";
import { mapActions } from "vuex";

export default {
  name: "ContactIndexView",
  components: {
    Input,
  },
  data() {
    return {
      task: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    //Recive an array
    ...mapActions(["setTasks"]),

    processForm() {
      //Delete data
      this.task = {
        name: "",
        email: "",
        message: "",
      };
    },
  },
};
</script>

<template>
  <div id="kontakt" class="bg-light_blue">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row justify-between py-20 text-center lg:text-left">
        <div class="pb-8 px-12 lg:w-2/4">
          <h1 class="
            text-blue
            pb-10
            font-bold
            text-3xl
            sm:text-5xl
              ">
            {{ $t("impressum.haftungLink2") }} <br>
          </h1>
          <p class="pb-4 text-xl tracking-wide">{{ $t("impressum.haftungLink3") }}</p>
          <a href="mailto:migporuiz@gmail.com" class="hover:text-blue hover:underline flex justify-center lg:justify-start" target="_blank">
            <li class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
              </svg>
              <p>migporuiz@gmail.com</p>
            </li>
          </a>
        </div>
        <div class="mx-auto sm:px-12 py-6 w-2/4">
          <!--FORM-->
          <form action="sendMail.php" @submit.prevent="processForm" method="POST" class="space-y-4">
            <Input :task="task" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
          
 