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
  <div class="overlay-effect-container-bg">
    <div class="overlay-effect-container">

      <div class="section-container mt-5 pb-4">

        <!-- Subtitle -->
        <h5 class="section-subtitle text-center">
          get in contact now
        </h5>

        <!-- Title -->
        <h1 class="section-title text-center">
          upcoming <span>events</span> 
        </h1>

        <!-- Cards -->
        <div class="d-flex flex-wrap my-4 justify-content-around">
          <div v-for="(event, index) in store.upcomingEvents" :key="index" class="col-6 d-flex justify-content-between">

              <div class="event-card rounded-3 d-flex col m-3 justify-content-between px-4 py-3">
                
                <div class="col-8 mt-3">
                  <span class="position"><i class="fa-solid fa-location-dot me-2" style="color: #808080;"></i>{{ event.place }}</span>
                  <h5 class="mt-3">{{ event.name }}</h5>
                </div>

                <div class="col-4 text-center">
                  <h1 class="event-day">
                    {{ event.day }}
                  </h1>
                  <h5 class="fw-bold pb-1">
                    {{ event.month }}
                  </h5>
                  <button class="btn-ticket btn col-12">
                    Get Ticket
                  </button>
                </div>
              </div>
          </div>
        </div>

        <!-- Link -->
        <p class="all-events text-center mt-2 mb-5 pb-5">
          Excited about our events? <a href="#">View all events &rarr;</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
*{
  // border: 1px solid black;
}
template{
  background-color: #F8F8F8;
}
.overlay-effect-container{
  border-radius: 70% 0% / 20% 0%;
  background-color: white;
}
.overlay-effect-container-bg{
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(248,248,248,1) 51%, rgba(248,248,248,1) 100%);
}
.event-card{
  background-color: #f8f8f8;
}
.btn-ticket{
  background-color: #20ad96;
  color: white;
  font-weight: bolder;
}
.position{
  color: grey;
}
.event-day{
  color: #20ad96;
  font-weight: 400;
}
.all-events{
  color: #3f3a64;
  a{
    text-decoration: none;
    color: #20ad96;
    font-weight: bold;
  }
}
</style>
