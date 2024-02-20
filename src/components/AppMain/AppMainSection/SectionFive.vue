<script>
// import

export default {
  name: "SectionFive",
};
</script>

<template>
  <div class="section-container my-5">
    <!-- Learn at your own pace section -->
    <div class="d-flex mt-5 align-items-top">
      <!-- Title, subtitle, list -->
      <div class="col-5">
        <!-- Subtitle -->
        <h5 class="section-subtitle my-3">
          why hesitate to register?
        </h5>

        <!-- Title -->
        <h1 class="section-title my-3">
          learn at your own <span>pace</span>
        </h1>

        <ul class="advantages-list my-3">
          <li><i class="fa-solid fa-check me-2" style="color: #20ad96;"></i>Select & customize courses to your preferences
          </li>
          <li><i class="fa-solid fa-check me-2" style="color: #20ad96;"></i>Change the tutor and make arrangements</li>
          <li><i class="fa-solid fa-check me-2" style="color: #20ad96;"></i>Participate in events to join others</li>
          <li><i class="fa-solid fa-check me-2" style="color: #20ad96;"></i>Get the desired certificate delivered at house
          </li>
        </ul>

        <button class="btn-green btn d-flex px-5 py-3 my-4">
          Get started for free
        </button>
      </div>

      <!-- image -->
      <figure class="col-7 figure-top ms-5">
        <img src="../../../assets/images/home-5-image-01.png" alt="">
      </figure>
    </div>

    <!-- Learn on your mobile  -->
    <div class="d-flex mt-5 align-items-center">

      <!-- image -->
      <figure class="col-7 figure-bottom me-5">
        <img src="../../../assets/images/home-5-image-02.png" alt="">
      </figure>

      <!-- Title, subtitle, list -->
      <div class="col-5">
        <!-- Subtitle -->
        <h5 class="section-subtitle my-3">
          what are you looking for
        </h5>

        <!-- Title -->
        <h1 class="section-title my-3">
          learn on your <span>mobile</span> anytyme
        </h1>

        <p class="my-3">
          Save lessons for later and revise or write notes at any time and on multiple devices on your way. Never
          interfere with activities of enjoyment or other precious moments.
        </p>

        <button class="btn-green btn d-flex px-5 py-3 mx-auto my-4">
          Download Our App
        </button>
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
.advantages-list {
  list-style-type: none;
  padding: 0px;

  li {
    padding: 5px 0px;
  }
}
.btn-green {
  color: white;
  font-weight: bold;
  font-size: small;
  background-color: #20ad96;
}
figure{
  text-align: center;
  overflow: visible;
  padding: 5px;
  img{
    scale: 0.9;
  }
}
.figure-top {
  position: relative;
  height: auto; /* Imposta l'altezza in base al contenuto */
}
.figure-top::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 65%;
  height: 80%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='200px' height='202px' fill='%23ece8e4' viewBox='0 0 200 202'%3E%3Cpath class='elementor-shape-fill' d='M139.374493,198.087515 C155.702187,206.99353 190.724846,197.001323 197.677982,159.049528 C204.827153,120.027728 184.496324,118.997566 188.045232,104.801934 C202.287755,83.6528313 204.827153,56.662651 190.073179,40.4146034 C153.570125,2.39058926 144.444362,48.0194062 114.025151,20.1351292 C101.727304,7.83728238 83.0989526,-6.73517414 56.2286492,3.40456297 C18.2385839,17.7404371 27.3303985,47.659333 27.3303985,69.3128542 C27.3303985,76.9370868 3.11408002,91.2696589 0.460095291,110.885776 C-2.88628833,135.619549 12.6277797,168.175291 27.3303985,179.329002 C50.6517938,205.692318 86.6478605,199.608476 102.87144,190.482713 C116.802125,182.646702 128.220783,192.003673 139.374493,198.087515 Z'%3E%3C/path%3E%3C/svg%3E");
  z-index: -1;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.figure-top::after {
  content: "";
  position: absolute;
  bottom: 25%;
  right: 0;
  width: 40%;
  height: 80%;
  background-image: url('../../../assets/images/maxcoach-shape-05.png');
  background-size: 55%;
  background-repeat: no-repeat;
  background-position: bottom;
}
.figure-bottom {
  position: relative;
  overflow: visible; /* Consente all'elemento di sbordare */
  background-image: url('../../../assets/images/maxcoach-shape-01.png'), url('../../../assets/images/maxcoach-shape-07.png'), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='200px' height='202px' fill='%23ece8e4' viewBox='0 0 200 202'%3E%3Cpath class='elementor-shape-fill' d='M139.374493,198.087515 C155.702187,206.99353 190.724846,197.001323 197.677982,159.049528 C204.827153,120.027728 184.496324,118.997566 188.045232,104.801934 C202.287755,83.6528313 204.827153,56.662651 190.073179,40.4146034 C153.570125,2.39058926 144.444362,48.0194062 114.025151,20.1351292 C101.727304,7.83728238 83.0989526,-6.73517414 56.2286492,3.40456297 C18.2385839,17.7404371 27.3303985,47.659333 27.3303985,69.3128542 C27.3303985,76.9370868 3.11408002,91.2696589 0.460095291,110.885776 C-2.88628833,135.619549 12.6277797,168.175291 27.3303985,179.329002 C50.6517938,205.692318 86.6478605,199.608476 102.87144,190.482713 C116.802125,182.646702 128.220783,192.003673 139.374493,198.087515 Z'%3E%3C/path%3E%3C/svg%3E");
  background-size: 15%, 30%, 80%; /* Imposta le dimensioni dell'immagine di sfondo */
  background-position: top 40% left , bottom 20% right 5%, bottom left 20%; /* Imposta la posizione dell'immagine di sfondo */
  background-repeat: no-repeat; /* Impedisce la ripetizione delle immagini di sfondo */
  img{
    position: relative;
    left: 5%;
  }
}
</style>
