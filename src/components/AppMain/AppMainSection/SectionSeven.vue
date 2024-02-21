
<template>
  <div class="container-fluid">

    <div class="section-container py-5">

      <!-- Subtitle -->
      <h5 class="section-subtitle text-center">
        people are praising maxcoach
      </h5>

      <!-- Title -->
      <h1 class="section-title text-center">
        What make they <span>love us?</span>
      </h1>

      <!-- carousel -->
      <div id="carouselExampleControls" class="carousel slide" >
        <div class="carousel-inner py-2">

          <div class="carousel-item active d-flex justify-content-between py-2">

            <div class="carousel-container col-4">
              <div class="col mx-4">
                <div class="carousel-card-content text-center mt-5 px-3">
                  <img class="rounded-circle" src="../../../assets/images/testimonial-avata-02.jpg" alt="">
                  <p>
                    I am free to learn at my own pace, follow my own schedule and choose the subject I like. Great study portal for people like me.
                  </p>
                  <h6 class="m-3 mt-4">
                    mina hollace
                  </h6>
                  <p class="pb-4 role">
                    /Freelancer
                  </p>
                </div>
              </div>
            </div>

            <div class="carousel-container col-4">
              <div class="col mx-4">
                <div class="carousel-card-content text-center mt-5 px-3">
                  <img class="rounded-circle" src="../../../assets/images/testimonial-avata-04.jpg" alt="">
                  <p>
                    MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.
                  </p>
                  <h6 class="m-3 mt-5">
                    madley pondore
                  </h6>
                  <p class="pb-4 role">
                    /IT Specialist
                  </p>
                </div>
              </div>
            </div>

            <div class="carousel-container col-4">
              <div class="col mx-4">
                <div class="carousel-card-content text-center mt-5 px-3">
                  <img class="rounded-circle" src="../../../assets/images/testimonial-avata-01.jpg" alt="">
                  <p>
                    I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation.
                  </p>
                  <h6 class="m-3 mt-5">
                    luvic dubble
                  </h6>
                  <p class="pb-4 role">
                    Private Tutor
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">

            <div class="carousel-container col-4">
              <div class="col mx-4">
                <div class="carousel-card-content text-center mt-5 px-3">
                  <img class="rounded-circle" src="../../../assets/images/testimonial-avata-03.jpg" alt="">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque mollitia adipisci consectetur amet sunt ullam cumque, exercitationem 
                  </p>
                  <h6 class="m-3 mt-4">
                    zylan thorne
                  </h6>
                  <p class="pb-4 role">
                    / Freelancer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>

      </div>

      <!-- Get started now -->
      <div class="get-started d-flex flex-column align-items-center mt-5">
        <h4 class="section-title text-center my-1">
          Start today for getting <span>Online Certification</span>
        </h4>
        <h2 class="section-title text-center">
          You can be your own guiding star with our help!
        </h2>
        <button class="btn btn-green col-3 my-4">
          Get started now
        </button>
      </div>

    </div>

  </div>
</template>

<script >
import { store } from '../../../store';

export default {
  name: "SectionSeven",
  data() {
    return {
      store
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  // border: 1px solid black;
}

.container-fluid {
  background-color: #f8f8f8;
}

.section-title {
  text-transform: none;
}

.get-started {}

.btn-green {
  color: white;
  font-weight: bold;
  font-size: small;
  background-color: #20ad96;
}
.get-started {
  position: relative;
  overflow: visible;
  /* Consente all'elemento di sbordare */
  background-image: url('../../../assets/images/maxcoach-shape-01.png'), url('../../../assets/images/maxcoach-shape-02.png');
  background-size: 12%, 10%;
  /* Imposta le dimensioni dell'immagine di sfondo */
  background-position: bottom 40% left 10px, bottom 10px right 10px;
  /* Imposta la posizione dell'immagine di sfondo */
  background-repeat: no-repeat;
  /* Impedisce la ripetizione delle immagini di sfondo */
}
*{

}
.carousel-card-content{
  background-color: white;
  min-height: 300px;
  p{
    color: #3f3a64;
    font-weight: 400;
  }
  img{
    height: 40%;
    width: 40%;
    transform: translateY(-40%);
  }  
  h6{
    text-transform: uppercase;
    font-size: smaller;
    font-weight: bolder;
  }
  .role{
    color: grey;
    font-size: smaller;
  }
}
.carousel-indicators{
  transform: translateY(120%);
  margin-top: 50px;
  button{
    background-color: #3f3a64;
  }

}
</style>