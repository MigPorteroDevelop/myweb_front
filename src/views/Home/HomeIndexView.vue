<script>
import HowI from "../../components/app/HowI.vue";
import Principal from "../../components/app/Principal.vue";
import Contact from "../../components/app/Contact.vue";
import TabTime from "../../components/app/TabTime.vue";
import MyStack from "../../components/app/MyStack.vue";

MyStack

export default {
  components: {
    HowI,
    Principal,
    Contact,
    TabTime,
    MyStack
  }
};
</script>

<template id="template">
  <div class="object-fit">
    <Principal />

    <HowI />

    <TabTime />

    <MyStack />

    <Contact />
  </div>
</template>