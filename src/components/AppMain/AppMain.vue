<script>
import SectionOne from "./AppMainSection/SectionOne.vue"
import SectionTwo from "./AppMainSection/SectionTwo.vue"
import SectionThree from "./AppMainSection/SectionThree.vue"
import SectionFour from "./AppMainSection/SectionFour.vue"
import SectionFive from "./AppMainSection/SectionFive.vue"




import { store } from '../../store';


export default {
  name: "AppMain",
  components:{
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
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
  <SectionFive/>
</template>

<style lang="scss" scoped>

</style>
