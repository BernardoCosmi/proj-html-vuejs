<script>
import SectionOne from "./AppMainSection/SectionOne.vue"
import { store } from '../../store';


export default {
  name: "AppMain",
  components:{
    SectionOne,
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
</template>

<style lang="scss" scoped>

</style>
