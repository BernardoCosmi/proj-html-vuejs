
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
      <div>

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
  data(){
    return{
      store
    }
  }
};
</script>

<style lang="scss" scoped>
*{
  border: 1px solid black;
}
.container-fluid{
  background-color: #f8f8f8;
}
.section-title{
  text-transform: none;
}
.get-started{

}
.btn-green {
  color: white;
  font-weight: bold;
  font-size: small;
  background-color: #20ad96;
}
.get-started {
  position: relative;
  overflow: visible; /* Consente all'elemento di sbordare */
  background-image: url('../../../assets/images/maxcoach-shape-01.png'), url('../../../assets/images/maxcoach-shape-02.png');
  background-size: 12%, 10%; /* Imposta le dimensioni dell'immagine di sfondo */
  background-position: bottom 40% left 10px, bottom 10px right 10px; /* Imposta la posizione dell'immagine di sfondo */
  background-repeat: no-repeat; /* Impedisce la ripetizione delle immagini di sfondo */
}
</style>