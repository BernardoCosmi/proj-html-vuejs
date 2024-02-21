<script>
import { store } from '../../../store';

export default {
  name: "SectionThree",
  data() {
    return {
      store
    };
  }
};
</script>

<template>
  
  <div class="container-fluid my-5">
    <div class="section-container py-5">
      <div class="row">
        <div v-for="(card, index) in store.infoDataArray " :key="index" class=" col-3">
          <div class="">
            <div class="info text-center">
              <h1>{{ card.data }}</h1>
              <h5>{{ card.info }}</h5>
            </div>
          </div>
        </div>
      </div>
  </div>

  </div>

</template>

<style lang="scss" scoped>
.container-fluid{
  background-color: #f5f1ed;
}
.info{
  h1{
    color: #20ad96;
    font-weight: bold;
  }
  h5{
    text-transform: uppercase;
    font-size: medium;
    font-weight: 600;
    color: #3f3a64 ;
  }
}
</style>
