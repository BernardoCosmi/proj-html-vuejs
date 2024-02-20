<script>
import SectionOne from "./AppMainSection/SectionOne.vue"
import SectionTwo from "./AppMainSection/SectionTwo.vue"
import SectionThree from "./AppMainSection/SectionThree.vue"


import { store } from '../../store';


export default {
  name: "AppMain",
  components:{
    SectionOne,
    SectionTwo,
    SectionThree
  },
  data() {
    return {
      store
    };
  }
};
</script>

<template>
  <SectionOne/>
  <SectionTwo/>
  <SectionThree/>
</template>

<style lang="scss" scoped>

</style>
