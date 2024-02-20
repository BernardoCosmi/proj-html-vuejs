<script>
import SectionOne from "./AppMainSection/SectionOne.vue"
import SectionTwo from "./AppMainSection/SectionTwo.vue"

import { store } from '../../store';


export default {
  name: "AppMain",
  components:{
    SectionOne,
    SectionTwo
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
</template>

<style lang="scss" scoped>

</style>
