<script>
// import

export default {
  name: "AppFooter",
};
</script>

<template>

  <div class="section-container">

    <div class="d-flex gap-5 my-5">
      <!-- Address -->
      <div class="col-6">
        <h6>Address</h6>
        <ul class="footer-list">
          <li>382 NE 191st St # 87394 Miami, FL 33179-3899</li>
          <li>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</li>
          <li>support@maxcoach.com</li>
        </ul>
        <div>
          <i class="fa-brands fa-square-facebook fa-xl me-3" style="color: #808080;"></i>
          <i class="fa-brands fa-x-twitter fa-xl mx-3" style="color: #808080;"></i>
          <i class="fa-brands fa-instagram fa-xl mx-3" style="color: #808080;"></i>
          <i class="fa-brands fa-linkedin fa-xl mx-3" style="color: #808080;"></i>
        </div>
      </div>
  
      <div class="d-flex gap-5">
        <!-- Explore -->
      <div class="d-flex gap-5 ">
        
        <div>
          <h6>Explore</h6>
          <ul class="footer-list">
            <li>Start here</li>
            <li>Information</li>
            <li>Blog About us</li>
          </ul>
        </div>
        <div>
          <h6 class="invisible">Allignment</h6>
          <ul class="footer-list">
            <li>Success story</li>
            <li>Courses</li>
            <li>Contact us</li>
          </ul>
        </div>

      </div>
  
      <!-- Information -->
      <div class="col">
        <h6>Information</h6>
        <ul class="footer-list">
          <li>Membership</li>
          <li>Purchase guide</li>
          <li>Privacy policy</li>
          <li>Terms of service</li>
        </ul>
      </div>
  
    </div>

    </div>

    <div class="copyright d-flex justify-content-center pb-2 mb-4">
      <span>
        &copy; 2020 Maxcoach. All Rights Reserved
      </span>
    </div>

  </div>

</template>

<style lang="scss" scoped>
.footer-list{
  padding: 0;
  list-style-type: none;
  color: grey;
  line-height: 2em;
}
p{
  font-size: smaller;
}
.copyright{
  color: grey;
}
</style>
