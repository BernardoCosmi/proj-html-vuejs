<script>

export default {
  name: "AppHeaderContent",
};
</script>

<template>
  <div class="home-container d-flex justify-content-around pb-5">

    <!-- SECTION left -->
    <div class="home-text-container col-4 d-flex flex-column justify-content-center">
      <h1 class="my-2">
        Complete Your Dreams in JavaS programming
      </h1>
      <p class="my-2">
        Learn any coding program in distance and for a reasonable fee. You don't have to struggle alone, you've got our
        assistance and help.
      </p>
      <button class="btn download-btn col-8 my-2">
        <i class="fa-solid fa-download" style="color: #ffffff;"></i>
        <span>Download free E-Book</span>
      </button>
    </div>

    <!-- SECTION right -->
    <figure class="col-6">
      <img src="../../assets/images/home-5-hero-image.png" alt="">
    </figure>
    
  </div>


</template>

<style lang="scss" scoped>
* {

  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.home-container {
  position: relative;
}
.home-text-container {
  h1 {
    color: #3f3a64;
    font-weight: bold;
  }

  p {
    color: #3f3a64;
  }

  .download-btn {
    background: #20ad96;
    padding: 10px;
    span {
      font-size: smaller;
      color: white;
      font-weight: bolder;
      margin-left: 10px;
    }
  }
}
.download-btn:hover{
      background: #3f3a64;
}
figure {
  img {
    max-width: 100%;
  }
}

</style>
