<script>
import { BASE_URL } from '@/main.js'
import axios from "axios";

export default {
  data() {
    return {
      selected: null,
      members: []
    };
  },
  methods: {
    select(item) {
      //Tests if the value of 'this.selected' is equal to item.
      if (this.selected == item) {
        //If they are equal, sets 'this.selected' as an empty string, i.e. clears its current value.
        this.selected = null;
      } else {
        //If they are not equal, assign the value of item to 'this.selected'.
        this.selected = item;
      }
    },
  },
  mounted() {
    axios.get(`${BASE_URL}/api/members/list`)
      .then(response => {
        this.members = response.data;
        console.log(this.members)
      })
      .catch(error => {
        console.error(error);
      });
  }
}
</script>

<template>
  <div class="h-full w-full border-y-4 border-mst_orange">
    <h1 class="
      my-10
      text-center
      font-extrabold
      text-5xl
      md:text-7xl
      text-mst_black
      ">
      {{ $t("home.team") }}
    </h1>
    <div class="
      w-4/6
      flex
      flex-wrap
      justify-center
      items-start
      gap-x-20
      gap-y-16
      mx-auto
      pb-20
    ">
      <div v-for="member in members" :key="member.id">
        <div class="
          item
          w-64
          shadow-inner
          shadow-mst_black
          rounded-2xl
          grayscale
          transition
          duration-300
          hover:grayscale-0
          md:shadow-2xl md:shadow-mst_black
          cursor-pointer" @click="select(member.id)" :class="[selected == member.id ? 'h-[420px]' : 'h-[390px]']">
          <img :src="member.urlImage" class="pt-4 pb-2 h-52 mx-auto">
          <h1 class="text-center font-bold tracking-wide text-2xl mt-3">
            {{ member.name }}
          </h1>
          <h2 class="text-center mt-4 text-lg">
            {{ member.position1 }} <br>
            {{ member.position2 }}
          </h2>
          <h2 class="text-center mt-4 text-lg"></h2>
          <div class="text-center mt-4" v-if="selected == member.id">
            <div class="relative flex items-center w-16 mb-4 mx-auto">
              <div class="flex-grow border-2 border-mst_orange"></div>
            </div>
            <p>
              <strong>{{ $t("impressum.telefon") }}</strong>: {{ member.telefon }}
            </p>
            <p><strong>Email:</strong> {{ member.email }}</p>
          </div>
        </div>
      </div>
      <div class="item 
        w-64
        h-[390px]
        shadow-inner
        shadow-mst_black
        rounded-2xl
        grayscale
        transition
        duration-300
        hover:grayscale-0
        md:shadow-2xl md:shadow-mst_black
        cursor-pointer">
        <img src="images/General/logo_black.png" class="pt-4 pb-2 h-52 mx-auto">
        <h1 class="text-center font-bold tracking-wide text-2xl mt-3">
          {{ $t("home.bewird") }}
        </h1>
        <h2 class="text-center mt-4 text-lg"></h2>
        <div class="text-center mt-4">
          <div class="relative flex items-center w-16 mb-4 mx-auto">
            <div class="flex-grow border-2 border-mst_orange"></div>
          </div>
          <p class="text-lg">
            {{ $t("home.freuen") }}<strong>jobs@mst-extra.net</strong>
          </p>
          <p class="text-lg">
            {{ $t("home.oder") }}<strong>+49 421 20 77 30</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>