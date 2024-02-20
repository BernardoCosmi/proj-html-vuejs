<script>
// import

export default {
  name: "SectionTwo",
};
</script>

<template>
  <div class="mb-3 section-container d-flex justify-content-around align-items-center">
    <!-- Image -->
    <figure>
      <img src="../../../assets/images/about-us-03-image-01.png" alt="">
    </figure>

    <!-- Text and accordion -->
    <div class="col-6 ">
      <!-- Text -->
      <h5 class="text-uppercase accordion-subtitle">dream with <span>maxcoach</span></h5>
      <h1 class="accordion-title text-capitalize">construct a <span>stunning</span> career perspective</h1>
      
      <!-- Accordion -->
      <div class="accordion accordion-flush" id="accordionFlushExample">
      <!-- item #1 -->
        <div class="accordion-item shadow my-4">
          <h2 class="accordion-header rounded">
            <button class="accordion-button collapsed text-capitalize" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              multiple platforms supported for teaching & studying
              <i class="fas fa-minus-circle d-none"></i>
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              MaxCoach supports the act of teaching and learning multiple platforms like online or offline via materials downloads. We know things aren't supposed to be devoured in a schort time, you can always access our knowledge base from any device.
            </div>
          </div>
        </div>
        
        <!-- item #2 -->
        <div class="accordion-item shadow my-4">
          <h2 class="accordion-header rounded">
            <button class="accordion-button collapsed text-capitalize" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              multiple course partecipation at the same time
              <i class="fas fa-minus-circle d-none"></i>
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea a possimus veniam tempore cumque amet minus illo rerum, obcaecati laboriosam et aliquam. Aspernatur at eligendi eum quo ullam animi?
            </div>
          </div>
        </div>

        <!-- item #3 -->
        <div class="accordion-item shadow my-4">
          <h2 class="accordion-header rounded">
            <button class="accordion-button collapsed text-capitalize" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              track study progress & deliver prompt feedback
              <i class="fas fa-minus-circle d-none"></i>
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed molestias officia suscipit mollitia reprehenderit, odit impedit. Culpa ab enim, expedita sit rerum deserunt mollitia possimus ipsam unde amet corrupti!
            </div>
          </div>
        </div>

      </div>
    </div>

    
  </div>
</template>

<style lang="scss" scoped>

figure{
  padding: 0px 30px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='200px' height='202px' fill='%23b6b7d2' viewBox='0 0 200 202'%3E%3Cpath class='elementor-shape-fill' d='M139.374493,198.087515 C155.702187,206.99353 190.724846,197.001323 197.677982,159.049528 C204.827153,120.027728 184.496324,118.997566 188.045232,104.801934 C202.287755,83.6528313 204.827153,56.662651 190.073179,40.4146034 C153.570125,2.39058926 144.444362,48.0194062 114.025151,20.1351292 C101.727304,7.83728238 83.0989526,-6.73517414 56.2286492,3.40456297 C18.2385839,17.7404371 27.3303985,47.659333 27.3303985,69.3128542 C27.3303985,76.9370868 3.11408002,91.2696589 0.460095291,110.885776 C-2.88628833,135.619549 12.6277797,168.175291 27.3303985,179.329002 C50.6517938,205.692318 86.6478605,199.608476 102.87144,190.482713 C116.802125,182.646702 128.220783,192.003673 139.374493,198.087515 Z'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: left 0% bottom 40%;
  background-size: 70%;
  text-align: right;
  img{
    width: 80%;
  }
}
.accordion-subtitle{
  color: grey;
  font-weight: lighter;
  span{
    font-weight: bolder;
  }
}
.accordion-title{
  color: #3f3a64;
  font-weight: bold;
  span{
    color: #20ad96;
    font-weight: lighter;
  }

}

.accordion-button.collapsed::after {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--%3E%3Cpath fill='%23bebebe' d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z'/%3E%3C/svg%3E");
}

.accordion-button {
  border-radius: 10px !important; 

}
.accordion-button:not(.collapsed) {
  border-radius: 10px 10px 0px 0px  !important; 
}

.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--%3E%3Cpath fill='%23ffffff' d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z'/%3E%3C/svg%3E");
}

.accordion {
  --bs-accordion-btn-bg: white;
  --bs-accordion-btn-color: rgb(110, 110, 110);
  --bs-accordion-active-bg: rgb(32, 173, 150, 0.8);
  --bs-accordion-active-color: white;
  --bs-accordion-btn-focus-box-shadow: none;
  border-radius: 25px;

  button {
    font-weight:600;
  }

  .accordion-body {
    color: grey;
  }
}</style>
