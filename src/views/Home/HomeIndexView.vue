<script>
import WhoI from "../../components/app/WhoI.vue";
import Principal from "../../components/app/Principal.vue";
import Contact from "../../components/app/Contact.vue";
import TabTime from "../../components/app/TabTime.vue";
import MyStack from "../../components/app/MyStack.vue";

export default {
  components: {
    WhoI,
    Principal,
    Contact,
    TabTime,
    MyStack
  }
};
</script>

<template>
  <div class="object-fit">
    <Principal />

    <WhoI />

    <MyStack />

    <hr class="h-px m-auto w-4/5 my-8 bg-blue border-0 dark:bg-gray">

    <TabTime />

    <Contact />
  </div>
</template>