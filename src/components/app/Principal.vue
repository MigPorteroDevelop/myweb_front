<script setup>
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 400);
});
</script>

<template>
  <div class="container mx-auto">
    <div class="
            flex flex-col
            drop-shadow-2xl
            lg:flex-row
            p-8
            md:p-20
          ">
      <div class="
            flex flex-col
            tracking-wider
            p-8
            lg:flex-1
          ">
        <div class="m-auto xl:pr-64 text-center lg:text-left">
          <p class="text-blue font-semibold">Hey {{ $t("fullService.edvP") }} 👋 {{ $t("fullService.edv") }}</p>
          <h1 class="text-2xl sm:text-3xl font-semibold md:text-4xl py-4">Miguel Portero</h1>

          <div class="text-center lg:text-left">
            <div class="flex flex-row space-x-2 justify-center lg:justify-start">
              <h2 class="text-md sm:text-lg md:text-xl lg:text-2xl font-medium text-gray pb-5">Web</h2>
              <h2 class="text-md sm:text-lg md:text-xl lg:text-2xl font-medium text-black">{{ $t("home.miguel") }}</h2>
            </div>
            <h2 class="text-gray text-md sm:text-lg md:text-xl"><em>"{{ $t("home.partners") }}"</em></h2>
          </div>
        </div>
      </div>
      <div 
        :class="['imagePrincipal', { visible: isVisible }]" 
        class="flex opacity-0"
      >
        <img class="saturate-50 w-64 h-64 md:w-96 md:h-96 rounded-full m-auto"
          src="/images/General/Miguel.jpg" alt="miguel_portero" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .imagePrincipal {
    transition: opacity 1.5s ease-in;
}
  .imagePrincipal.visible {
    opacity: 1;
}
</style>