<script setup>
import { RouterView } from "vue-router";
import Footer from "./components/common/AppFooter.vue";
import TopButton from "./components/common/TopButton.vue";
</script>

<template>
  <div>
    <div>
      <RouterView />
    </div>
    
    <div class="arrowTop sticky left-80 bottom-[60px] mt-2">
      <TopButton />
    </div>
    <div>
      <Footer />
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