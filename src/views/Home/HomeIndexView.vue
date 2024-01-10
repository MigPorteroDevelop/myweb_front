<script>
import HowI from "../../components/app/HowI.vue";
import Principal from "../../components/app/Principal.vue";
import Contact from "../../components/app/Contact.vue";
import TabTime from "../../components/app/TabTime.vue";

export default {
  components: {
    HowI,
    Principal,
    Contact,
    TabTime
  }
};
</script>

<template id="template">
  <div class="object-fit">
    <Principal />

    <HowI />

    <TabTime />

    <Contact />
  </div>
</template>