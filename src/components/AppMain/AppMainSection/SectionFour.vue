<script>
import { store } from '../../../store';

export default {
  name: "SectionFour",
  data(){
    return{
      store
    }
  },

};
</script>

<template>
  <div class="background-container">
    <div class="section-container mt-2 pb-5">

      <!-- Section Subtitle -->
      <h5 class="section-subtitle text-center">choose where you'd like to begin</h5>
      
      <!-- Section Title -->
      <h1 class="section-title text-center mb-4">latest featured <span>courses</span></h1>

      <!-- Cards -->
      <div class="d-flex flex-wrap">

        <div v-for="(card, index) in store.coursesCard" :key="index" class="col-4 p-3">
          <div class="position-relative course-cards">

            <!-- Img and price -->
            <figure class="rounded-top course-img">
              <span class="price-tag col-3 text-center">{{ card.price }}</span>
              <img :src="`../../../../src/assets/images/${ card.courseImg}`" alt="course presentation pic" />
            </figure>

            <!-- Text and propic -->
            <div class="mx-3 mb-2 pb-2">
              <img class="rounded-circle mb-2" :src="`../../../../src/assets/images/${ card.profProPic}`" alt="course presentation pic" />
              <span class="fw-light mx-3 my-2">{{ card.profName }}</span>
              <h5>{{ card.title }}</h5>
              <div class="class-info">
                <span class="me-2">
                  <i class="fa-regular fa-file-lines" style="color: #808080;"></i>
                  {{ card.lessonsNumber }}
                </span>
                <span class="ms-3"> 
                  <i class="fa-regular fa-user" style="color: #808080;"></i>
                  {{ card.studentsNumber }}
                </span>
              </div>

            </div>

          </div>
          
        </div>
        
      </div>

      <!-- Button -->
      <button class="view-all-btn btn d-flex px-5 py-3 mx-auto my-4">
        View all courses &rarr;
      </button>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.background-container{
  background-image: linear-gradient(to bottom, white, #F5F5F5); 
  border-radius: 50% 50% / 5% 5%;
  margin-bottom: 20px;
}
.course-img{
  img{
    max-width: 100%;
    border-radius: 5px 5px 0px 0px;
  }
}
.price-tag {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  padding: 5px 0px;
  border-radius: 0px 5px 0px 0px;
  color: white;
  font-weight: bolder;
  background-color: #20ad96; 
  border-bottom-left-radius: 0.25rem;
}
.class-info{
  color: grey;
  font-size:medium;
}
.course-cards:hover{
  background-color: white;
  border-radius: 10px;
  border: 1px solid grey;
}
.view-all-btn{
  color: white;
  font-weight: bold;
  font-size: small;
  background-color: #20ad96;

}  
.view-all-btn:hover{
    background-color: #f8f8f8;
    color: #20ad96 ;
  }
</style>
