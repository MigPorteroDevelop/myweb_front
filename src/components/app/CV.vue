<script>
// import Atropos component
import AtroposComponent from 'atropos/element';
// register Atropos component
customElements.define('atropos-component', AtroposComponent);

export default {
  data() {
    return {
      pdf1: 'CV-EN.pdf',
      pdf2: 'CV-DE.pdf',
      route1: '/documents/CV-EN.pdf',
      route2: '/documents/CV-DE.pdf',
    };
  }
};
</script>

<template>
  <div class="flex flex-col sm:flex-row justify-center items-center space-y-10 sm:space-y-0 sm:space-x-18 py-32">
    <div class="sm:hover:border-2 sm:hover:border-blue">
      <div class="w-52 sm:w-72 sm:p-10 sm:hover:bg-light_blue">
        <atropos-component shadow-scale="0">
          <img src="/images/flag-EN.png" />
          <h1 class="text-lg text-center font-bold pt-6 pb-2">{{ $t("impressum.urheberrecht") }}</h1>
          <a :href="route1" :download="pdf1" class="
                    block
                    py-2
                    px-4
                    text-gray
                    text-center
                    transform
                    transition
                    duration-300
                    hover:text-blue
                    cursor-pointer">
            <em>{{ $t("impressum.urheberrecht2") }}</em></a>
        </atropos-component>
      </div>
    </div>
    <div class="sm:hover:border-2 sm:hover:border-blue">
      <div class="w-52 sm:w-72 sm:p-10 sm:hover:bg-light_blue">
        <atropos-component shadow-scale="0">
          <img src="/images/flag-DE.png" />
          <h1 class="text-lg text-center font-bold pt-6 pb-2">{{ $t("impressum.urheberrecht3") }}</h1>
          <a :href="route2" :download="pdf2" class="
                    block
                    py-2
                    px-4
                    text-gray
                    text-center
                    transform
                    transition
                    duration-300
                    hover:text-blue
                    cursor-pointer">
            <em>{{ $t("impressum.urheberrecht2") }}</em></a>
        </atropos-component>
      </div>
    </div>
  </div>
</template>
