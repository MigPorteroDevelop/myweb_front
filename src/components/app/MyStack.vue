<script>
// import Atropos component
import AtroposComponent from 'atropos/element';
// register Atropos component
customElements.define('atropos-component', AtroposComponent);

const pdf1 = 'CV-DE.pdf';
const pdf2 = 'CV-EN.pdf';
const route1 = '../../public/documents/CV-DE';
const route2 = '../../public/documents/CV-EN';
</script>


<template>
    <div class="flex flex-col sm:flex-row justify-center items-center sm:space-x-28 py-12">
        <div class="w-52">
            <atropos-component shadow-scale="0">
                <img src="/images/flag-EN.png" />
                <h1 class="text-lg text-center font-bold pt-6 pb-2">{{ $t("impressum.urheberrecht") }}</h1>
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
                  "><em>{{ $t("impressum.urheberrecht2") }}</em></a>
            </atropos-component>
        </div>
        <div class="w-52">
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
                  "><em>{{ $t("impressum.urheberrecht2") }}</em></a>
            </atropos-component>
        </div>
    </div>
</template>