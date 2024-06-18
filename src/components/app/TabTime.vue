<script setup>
import { ref } from 'vue';
const active = ref(0);

import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

import CV from "../../components/app/CV.vue";
</script>

<template>
    <div class="container mx-auto">
        <div id="lebenslauf">
            <h1 class="
      py-20
      text-blue
      pb-8
      text-center
      font-bold
      text-3xl
      sm:pt-32
      md:text-5xl
      ">
                {{ $t("impressum.streitschlichtung4") }}
            </h1>
            <TabView v-model:activeIndex="active" :pt="{
                nav: { class: 'flex flex-row justify-center' }
            }">
                <TabPanel :header="$t('fullService.dokumentation')" :pt="{
                    header: { class: 'cursor-pointer text-center text-lg text-gray hover:text-blue tracking-wide pb-2' }
                }">
                    <div class="flex items-center justify-center h-full px-4 font-sans">
                        <ol class="border-l border-blue">
                            <!--First item-->
                            <li>
                                <div class="justify-items-center">
                                    <div
                                        class="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-blue text-gray ">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"
                                            class="h-4 w-4">
                                            <path fill-rule="evenodd"
                                                d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div class="mb-10 ml-6 block max-w-md rounded-lg p-6 shadow-md shadow-black/5">
                                        <div class="mb-4 flex justify-between">
                                            <p class="text-sm">
                                                <b class="text-black">FullStack {{ $t("home.miguel") }}</b> <br>
                                                <em>MST Medien-Systemtechnik GmbH</em>
                                            </p>
                                            <p class="text-sm ">
                                                11/22 - 12/23</p>
                                        </div>
                                        <ol class="list-disc mb-6">
                                            <p class="pb-5">{{ $t("fullService.möblierung") }}</p>
                                            <li>{{ $t("fullService.möblierungP") }}</li>
                                            <li>{{ $t("verkauf.verkaufView") }}</li>
                                            <li>{{ $t("verkauf.verkaufView2") }}</li>
                                            <li>{{ $t("vermietung.vermietungView") }}</li>
                                        </ol>
                                    </div>
                                </div>
                            </li>

                            <!--Second item-->
                            <li>
                                <div class="flex-start md:flex">
                                    <div
                                        class="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-blue text-gray ">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"
                                            class="h-4 w-4">
                                            <path fill-rule="evenodd"
                                                d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div class="mb-10 ml-6 block max-w-md rounded-lg p-6 shadow-md shadow-black/5">
                                        <div class="mb-4 flex justify-between">
                                            <p class="text-sm ">
                                                <b class="text-black">IT Officer</b> <br>
                                                <em>FINNOVA (EU)</em>
                                            </p>
                                            <p class="text-sm ">
                                                09/21 - 03/22</p>
                                        </div>
                                        <ol class="list-disc mb-6">
                                            <li>{{ $t("vermietung.vermietungView2") }}</li>
                                            <li>{{ $t("vermietung.vermietungView3") }}</li>
                                            <li>{{ $t("vermietung.vermietungView4") }}</li>
                                            <li>{{ $t("vermietung.vermietungView5") }}</li>
                                            <li>{{ $t("vermietung.vermietungView6") }}</li>
                                            <li>{{ $t("vermietung.vermietungView7") }}</li>
                                        </ol>
                                    </div>
                                </div>
                            </li>

                            <!--Third item-->
                            <li>
                                <div class="flex-start md:flex">
                                    <div
                                        class="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-blue text-gray ">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"
                                            class="h-4 w-4">
                                            <path fill-rule="evenodd"
                                                d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div
                                        class="mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5">
                                        <div class="mb-4 flex justify-between">
                                            <p class="text-sm ">
                                                <b class="text-black">FrontEnd {{ $t("home.miguel") }}</b> <br>
                                                <em>Ibermática</em>
                                            </p>
                                            <p class="text-sm ">
                                                03/19 - 06/19</p>
                                        </div>
                                        <ol class="list-disc mb-6 text-neutral-700 dark:text-neutral-200">
                                            <li>{{ $t("vermietung.vermietungView8") }}</li>
                                            <li>{{ $t("smartHome.smartHomeView") }}</li>
                                            <li>{{ $t("smartHome.smartHomeView2") }}</li>
                                            <li>{{ $t("streaming.streamingView") }}</li>
                                        </ol>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </TabPanel>
                <TabPanel :header="$t('fullService.dokumentationP')" :pt="{
                    header: { class: 'cursor-pointer text-center text-lg text-gray hover:text-blue tracking-wide pb-2' }
                }">
                    <div class="flex items-center justify-center h-full">
                        <ol class="tabpanel border-l border-blue">
                            <!--First item-->
                            <li>
                                <div class="flex-start md:flex">
                                    <div
                                        class="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-blue text-gray ">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"
                                            class="h-4 w-4">
                                            <path fill-rule="evenodd"
                                                d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div
                                        class="mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5">
                                        <div class="mb-4 flex justify-between">
                                            <p class="text-sm ">
                                                <b class="text-black">Web {{ $t("home.miguel") }}</b> <br>
                                                <em>Upgrade Hub - Madrid</em>
                                            </p>
                                            <p class="text-sm ">
                                                2020</p>
                                        </div>
                                        <ol class="list-disc mb-6 text-neutral-700 dark:text-neutral-200">
                                            <li>GitHub & GitLab.</li>
                                            <li>HTML5</li>
                                            <li>CSS3</li>
                                            <li>JavaScript</li>
                                            <li>React</li>
                                            <li>Angular</li>
                                            <li>NodeJs</li>
                                            <li>Typescript</li>
                                            <li>{{ $t("impressum.streitschlichtung") }}</li>
                                            <li>{{ $t("impressum.streitschlichtung2") }}</li>
                                            <li>{{ $t("impressum.streitschlichtung3") }}</li>
                                        </ol>
                                    </div>
                                </div>
                            </li>
                            <!--Second item-->
                            <li>
                                <div class="flex-start md:flex">
                                    <div
                                        class="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-blue text-gray ">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"
                                            class="h-4 w-4">
                                            <path fill-rule="evenodd"
                                                d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div class="mb-10 ml-6 block max-w-md rounded-lg p-6 shadow-md shadow-black/5">
                                        <div class="mb-4 flex justify-between">
                                            <p class="text-sm ">
                                                <b class="text-black">Web {{ $t("home.miguel") }}</b> <br>
                                                <em>IFP Madrid - Grupo Planeta</em>
                                            </p>
                                            <p class="text-sm">
                                                2017 - 2019</p>
                                        </div>
                                        <ol class="list-disc mb-6">
                                            <li class="pb-5">{{ $t("streaming.streamingView2") }}</li>
                                            <li>{{ $t("streaming.streamingView3") }}</li>
                                            <li>{{ $t("streaming.streamingView4") }}</li>
                                            <li>{{ $t("streaming.streamingView5") }}</li>
                                            <li>{{ $t("impressum.anschrift") }}</li>
                                            <li>{{ $t("impressum.kontaktdaten") }}</li>
                                            <li>{{ $t("impressum.telefon") }}</li>
                                            <li>{{ $t("impressum.geschäftsführer") }}</li>
                                            <li>{{ $t("impressum.umsatzsteuer") }}</li>
                                            <li>{{ $t("impressum.inhaltlich") }}</li>
                                            <li>{{ $t("impressum.konzeption") }}</li>
                                        </ol>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>

                </TabPanel>
            </TabView>

            <CV />
        </div>
    </div>
</template>

<style>
.p-tabview .p-tabview-nav .p-highlight{
    color: #4d6df7;
}
</style>
