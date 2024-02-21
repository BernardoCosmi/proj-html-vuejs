<template>
    <div class="section-one-container">

        <!-- Subtitle and Title -->
        <div class="section-title-container m-5 col-6 text-center">
            <p class="text-uppercase">start learning coding languages</p>
            <div>
                <h1 class="text-capitalize">
                    build your dream
                    <span class="text-uppercase">
                        today
                    </span>
                </h1>

            </div>
        </div>

        <!-- Cards -->
        <div class="cards-container d-flex ">
            <div v-for="(card, index) in store.startNowCards" :key="index" class="startnow-card col-3 text-center px-3">

                <img class="my-2" :src="`../../../../src/assets/images/home-5-image-box-${card.imgURL}.png`"
                    alt="card image">

                <div class="d-flex flex-column gap-2 mb-5">
                    <h5>{{ card.title }}</h5>
                    <p>{{ card.text }}</p>
                    <a :href="card.link" class="card-link">Start now &#8594;</a>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
import { store } from '../../../store';

export default {
    name: "SectionOne",
    data() {
        return {
            store
        };
    },
};
</script>
  
<style lang="scss" scoped>
.section-one-container {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}    
p {
    color: grey;
    font-size: smaller;
}
.section-title-container {
    h1 {
        color: #3f3a64;
        font-weight: bold;
        span {
            color: #1fa690;
            font-weight: 400;
        }
    }
}
.card-link{
    text-decoration: none;
    color: #3f3a64;
}
.startnow-card:hover{
    background: #f8f8f8;
}
</style>