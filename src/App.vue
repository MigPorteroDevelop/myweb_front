<script >
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/common/AppNavbar.vue";
import Footer from "./components/common/AppFooter.vue";
import TopButton from "./components/common/TopButton.vue";
import Cookies from "./components/app/Cookies.vue";
import VueCookies from 'vue-cookies'

export default {
  components: {
    Navbar,
    Footer,
    TopButton,
    RouterLink,
    RouterView,
    Cookies,
    VueCookies
  },
};
</script>

<template>
  <div >
    <Navbar />

    <div>
      <RouterView />
    </div>

    <Footer />
    <div class="arrowTop sticky bottom-[60px] collapse md:visible">
      <TopButton />
    </div>
  </div>
</template>

<style>
@import "./assets/font-family/fonts.css";

html,
body,

.arrowTop {
  z-index: 100;
}
</style>