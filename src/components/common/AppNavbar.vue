<script setup>
import { ref } from "vue";

const smoothScroll = function (anchor) {
  let pos = document.querySelector('#' + anchor).offsetTop;
  const headerHeight = document.querySelector('#header').clientHeight;

  window.scroll({
    top: pos - headerHeight,
    behavior: 'smooth'
  });
  return false;
};

const navigation = [
  {
    name: "buttons.verkauf",
    route: "/#whoi",
  },
  {
    name: "buttons.vermietung",
    route: "/#lebenslauf",
  },
  {
    name: "buttons.kontakt",
    route: "/#kontakt",
  },
  {
    name: "buttons.impressum",
    route: "/projekte",
  }
];
const showMobileMenu = ref(true);
const isHome = function() {
  return window.location.pathname == '/';
}
</script>

<template>
  <header id="header" class="sticky top-0 z-50 w-full shadow bg-white">
    <div class="container mx-auto pl-8 sm:pl-16">
      <div class="flex justify-between items-center py-4">

        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-1">
          <img src="/images/General/logo.svg" class="h-14 w-14 md:h-20 md:w-20" alt="Logo" />
        </router-link>

        <!-- Mobile Menu Button -->
        <div class="flex items-center pr-8 md:hidden">
          <button @click="showMobileMenu = !showMobileMenu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black"
              class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        <!-- Desktop Menu -->
        <nav class="hidden items-center space-x-4 sm:pr-16 md:flex">
          <div v-for="item in navigation" :key="item.name" class="cursor-pointer
                  text-black
                  text-bold
                  transform
                  transition
                  duration-300
                  hover:text-blue
                  py-5
                  px-2">

            <!--Si la ruta está fuera de la home-->
            <!--Necesitas validar que estás en la home-->
            <span v-if="item.route.includes('#') && isHome()" @click="smoothScroll(item.route.replace('/', '').replace('#', ''))">{{ $t(item.name) }}</span>
            <a v-else-if="item.route.includes('#')" :href="item.route">{{ $t(item.name) }}</a>
            <router-link v-else :to="item.route">{{ $t(item.name) }}</router-link>
          </div>
          <div>
            <select v-model="$i18n.locale"
              class="relative inline-flex items-center justify-center p-1 overflow-hidden font-medium bg-white text-black border-2 border-black rounded-full hover:text-blue hover:border-blue">
              <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
                {{ locale }}
              </option>
            </select>
          </div>
        </nav>
      </div>

      <!-- Mobile Menu -->
      <div class="2xl:hidden w-32 bg-white rounded-b-[25px] absolute inset-y-30 right-0"
        :class="{ hidden: showMobileMenu }">
        <div v-for="item in navigation" :key="item.name"
          class="block py-2 px-4 text-black transition duration-300 hover:text-blue">
          <a v-if="item.route.includes('#')" :href="item.route">{{ $t(item.name) }}</a>
          <router-link v-else :to="item.route">{{ $t(item.name) }}</router-link>
        </div>
        <div
          class="relative inline-flex items-center justify-center p-2 px-6 py-3 overflow-hidden transition duration-300 ease-out rounded-full  group">
          <select v-model="$i18n.locale" class="p-1 font-medium text-black border-2 border-blue rounded-full">
            <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
              {{ locale }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </header>
</template>