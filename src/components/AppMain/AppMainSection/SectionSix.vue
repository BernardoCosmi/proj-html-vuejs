<script>
import { store } from '../../../store';

export default {
  name: "SectionSix",
  data(){
    return{
      store
    }
  }
};
</script>

<template>
  <div>
    <div class="section-container my-5">
      <h5 class="section-subtitle text-center">
        get in contact now
      </h5>

      <h1 class="section-title text-center">
        upcoming <span>events</span> 
      </h1>

      <div class="d-flex flex-wrap my-4">
        <div v-for="(event, index) in store.upcomingEvents" :key="index" class="col-6 d-flex justify-content-between">

            <div class="col-7">
              <p><i class="fa-regular fa-location-dot" style="color: #808080;"></i>{{ event.place }}</p>
              <h5>{{ event.name }}</h5>
            </div>

            <div class="col-3 text-center">
              <h1>
                {{ event.day }}
              </h1>
              <h4>
                {{ event.month }}
              </h4>
              <button class="">
                <a :href="`${event.link}`">Get Ticket</a>
              </button>
            </div>
           
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
*{
  border: 1px solid black;
}
</style>
