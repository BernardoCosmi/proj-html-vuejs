<script>
import SectionOne from "./AppMainSection/SectionOne.vue"
import SectionTwo from "./AppMainSection/SectionTwo.vue"
import SectionThree from "./AppMainSection/SectionThree.vue"
import SectionFour from "./AppMainSection/SectionFour.vue"



import { store } from '../../store';


export default {
  name: "AppMain",
  components:{
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour
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
  <SectionFour/>
</template>

<style lang="scss" scoped>

</style>
