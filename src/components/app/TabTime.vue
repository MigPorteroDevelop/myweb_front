<script setup>
import { ref } from 'vue';
const active = ref(0);

import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

import CV from "../../components/app/CV.vue";
</script>

<template>
    <h1 class="
      pt-24
      pb-8
      text-center
      font-bold
      text-3xl
      md:text-5xl
      ">
        {{ $t("impressum.streitschlichtung4") }}
    </h1>
    <TabView v-model:activeIndex="active">
        <TabPanel :header="$t('fullService.dokumentation')" :pt="{
            header: { class: 'cursor-pointer text-center text-lg text-blue tracking-wide pb-2' }
        }">
            <div class="flex items-center justify-center h-full px-4">
                <ol class="border-l border-blue">
                    <!--First item-->
                    <li>
                        <div class="justify-items-center">
                            <div
                                class="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-blue text-gray ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="h-4 w-4">
                                    <path fill-rule="evenodd"
                                        d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div
                                class="mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                                <div class="mb-4 flex justify-between">
                                    <p
                                        class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                                        <b>FullStack {{ $t("home.miguel") }}</b> <br>
                                        <em>MST Medien-Systemtechnik GmbH</em>
                                    </p>
                                    <p
                                        class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                                        11/22 - 12/23</p>
                                </div>
                                <ol class="list-disc mb-6 text-neutral-700 dark:text-neutral-200">
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="h-4 w-4">
                                    <path fill-rule="evenodd"
                                        d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div
                                class="mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                                <div class="mb-4 flex justify-between">
                                    <p
                                        class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                                        <b>IT Officer</b> <br>
                                        <em>FINNOVA (EU)</em>
                                    </p>
                                    <p
                                        class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                                        09/21 - 03/22</p>
                                </div>
                                <ol class="list-disc mb-6 text-neutral-700 dark:text-neutral-200">
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="h-4 w-4">
                                    <path fill-rule="evenodd"
                                        d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div
                                class="mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                                <div class="mb-4 flex justify-between">
                                    <p
                                        class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                                        <b>FrontEnd {{ $t("home.miguel") }}</b> <br>
                                        <em>Ibermática</em>
                                    </p>
                                    <p
                                        class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
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
            header: { class: 'cursor-pointer text-center text-lg text-blue tracking-wide pb-2' }
        }">
            <div class="flex items-center justify-center h-full">
                <ol class="border-l border-blue">
                    <!--First item-->
                    <li>
                        <div class="flex-start md:flex">
                            <div
                                class="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-blue text-gray ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="h-4 w-4">
                                    <path fill-rule="evenodd"
                                        d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div
                                class="mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                                <div class="mb-4 flex justify-between">
                                    <p
                                        class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                                        <b>Web {{ $t("home.miguel") }}</b> <br>
                                        <em>Upgrade Hub - Madrid</em>
                                    </p>
                                    <p
                                        class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="h-4 w-4">
                                    <path fill-rule="evenodd"
                                        d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div
                                class="mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                                <div class="mb-4 flex justify-between">
                                    <p
                                        class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                                        <b>Web {{ $t("home.miguel") }}</b> <br>
                                        <em>IFP Madrid - Grupo Planeta</em>
                                    </p>
                                    <p
                                        class="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700">
                                        2017 - 2019</p>
                                </div>
                                <ol class="list-disc mb-6 text-neutral-700 dark:text-neutral-200">
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
</template>

<style scoped>
 .p-tabview{
    background-color: yellowgreen;
 }
</style>