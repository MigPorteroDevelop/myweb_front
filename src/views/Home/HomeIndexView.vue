<script setup>
import WhoI from "../../components/app/WhoI.vue";
import Principal from "../../components/app/Principal.vue";
import Contact from "../../components/app/Contact.vue";
import TabTime from "../../components/app/TabTime.vue";
import MyStack from "../../components/app/MyStack.vue";
import Navbar from "../../components/common/AppNavbar.vue";
</script>

<template>
  <Navbar />

  <div class="mx-auto">
    <Principal />

    <WhoI />

    <MyStack />

    <hr class="h-px m-auto w-4/5 my-8 bg-blue border-0 dark:bg-gray">

    <TabTime />

    <Contact />
  </div>
</template>