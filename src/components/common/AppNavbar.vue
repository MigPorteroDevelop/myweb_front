<script setup>
import { ref } from "vue";
const pdf1 = 'CV-DE.pdf';
const pdf2 = 'CV-EN.pdf';
const route1 = '../../public/documents/CV-DE';
const route2 = '../../public/documents/CV-EN';

const navigation =
  [
    {
      name: "buttons.verkauf",
      route: "/howi",
    },
    {
      name: "buttons.vermietung",
      route: "/lebenslauf",
    },
    {
      name: "buttons.kontakt",
      route: "/kontakt",
    }
  ];
const showMobileMenu = ref(true);
</script>

<template>
  <header class="sticky top-0 z-50 shadow-sm">
    <!--desktop menu-->
    <div class="bg-white">
      <div class="max-w-1xl mx-auto">
        <div class="flex justify-left">
          <!--menu-->
          <div class="flex md:space-x-1 2xl:space-x-14">
            <!--logo-->
            <router-link to="/" @click="showMobileMenu = !showMobileMenu" class="flex items-center space-x-1 px-16 py-5">
              <img src="/images/General/logo.svg" class="h-14 w-14 ml-10 md:block 2xl:h-20 2xl:w-20" />
            </router-link>

            <div class="md:w-10 2xl:w-52"></div>
            
            <!--menu-->
            <nav class="hidden items-center 2xl:space-x-1 xl:flex">
              <div v-for="item in navigation" class="
                  text-black
                  text-bold
                  transform
                  transition
                  duration-300
                  hover:text-blue
                  py-5
                  px-2
                ">
                <router-link :to="item.route">{{ this.$t(item.name) }}</router-link>
              </div>

              <a :href="route2" :download="pdf2" class="
          block
            py-2
            px-4
            text-black
            transform
            transition
            duration-300
            hover:text-blue
                  ">CV</a>
              <div>
                <select v-model="$i18n.locale" class="
                      relative
                      inline-flex
                      items-center
                      justify-center
                      p-1
                      overflow-hidden
                      font-medium
                      bg-white
                      text-black
                      border-2
                      border-black
                      rounded-full
                      hover:text-blue
                      hover:border-blue
                      ">
                  <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
                    {{ locale }}
                  </option>
                </select>
              </div>
            </nav>
          </div>
          <!--show mobile menu-->
          <div class="flex items-center xl:hidden">
            <button @click="showMobileMenu = !showMobileMenu" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black"
                class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--Mobile menu-->
    <div class="2xl:hidden w-40 bg-white absolute inset-y-30 right-0" :class="{ hidden: showMobileMenu }">
      <div v-for="item in navigation" class="
          block
            py-2
            px-4
            text-black
            transform
            transition
            duration-300
            hover:text-mst_orange
                ">
        <router-link @click="showMobileMenu = !showMobileMenu" :to="item.route">{{ this.$t(item.name) }}</router-link>
      </div>
      <a :href="route2" :download="pdf2" class="
          block
            py-2
            px-4
            text-black
            transform
            transition
            duration-300
            hover:text-blue
                  ">CV</a>
      <div class="
            relative
            inline-flex
            items-center
            justify-center
            p-2
            px-6
            py-3
            overflow-hidden
            transition
            duration-300
            ease-out
            rounded-full
            shadow-md
            group
          ">
        <select v-model="$i18n.locale" class="
            p-1
            font-medium
             bg-black
             text-black
            border-2
             border-blue
            rounded-full
          ">
          <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
            {{ locale }}
          </option>
        </select>
      </div>
    </div>
  </header>
</template>