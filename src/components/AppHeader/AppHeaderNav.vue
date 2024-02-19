<script>
import { store } from '../../store';
import AppHeaderContent from './AppHeaderContent.vue';

export default {
  name: "AppHeaderNav",
  components:{
    AppHeaderContent
},
  data() {
    return {
      store
    };
  }
};
</script>

<template>
  <header class="container-fluid position-relative">


    <div class="nav-container d-flex row align-items-between py-3">

      <!-- Logo -->
      <figure class="col-2 d-flex align-items-center">
        <img src="../../assets/images/dark-logo.png" alt="Logonetflix" class="img-fluid">
      </figure>

      <!-- Nav Menu -->
      <div class="col-10">
        <nav>
          <ul class="navbar-nav ">
            <li v-for="menuItem in store.menuItems" :key="menuItem.id" class="nav-item">
              <a :href="menuItem.link" class="nav-link">{{ menuItem.label }} <i class="fa fa-angle-down fa-xs"></i></a>
            </li>
            <!-- Cart icon -->
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-shopping-cart" style="color: #3f3a64;"></i>
                <span class="badge rounded">0</span>
              </a>
            </li>
            <!-- User Icon -->
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-user-circle"></i>
              </a>
            </li>
            <!-- SearchBar -->
            <li class="d-flex nav-item">
              <div class="input-group">
                <input type="text" class="form-control rounded p-2" placeholder="Search..." aria-label="Search" aria-describedby="button-addon2">
                <div class="input-group-append">
                  <button class="btn " type="button" id="button-addon2">
                    <i class="fas fa-search" style="color: #20ad96;"></i>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>

    </div>
    <div class="nav-container">
      <AppHeaderContent />
    </div>

    <!-- Underlay Shape -->
    <img class="underlay-shape" src="../../assets/images/jumbo-overlay.svg" alt="Underlay Shape">
  </header>

</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
div{
  z-index: 1;
}
.container-fluid{
  background-color: #f5f1ed;
}
.navbar-nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  gap: 20px;
}
.nav-container {
  max-width: 70%;
  margin: auto;
}
.nav-link {
  color: #3f3a64;
  text-decoration: none;
}
.badge{
  background: #20ad96;
  position: absolute;
  font-size: x-small;
  padding: 2px;
  text-align: center;
}
.input-group {
  position: relative;
}
.input-group-append {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.underlay-shape {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%;
  z-index: 0;
  transform: scaleY(-1);
}
</style>
