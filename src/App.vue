<script >
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/common/AppNavbar.vue";
import Footer from "./components/common/AppFooter.vue";
import TopButton from "./components/common/TopButton.vue";

export default {
  components: {
    Navbar,
    Footer,
    TopButton,
    RouterLink,
    RouterView,
  },
};
</script>

<template>
  <div>
    <Navbar />

    <div>
      <RouterView />
    </div>
    <div>
      <Footer />
    </div>
    <div class="arrowTop sticky bottom-[60px]">
      <TopButton />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

html,
body {
  font-family: 'inter', sans-serif;
}

.arrowTop {
  z-index: 100;
}
</style>