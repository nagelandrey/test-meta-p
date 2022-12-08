<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { onMounted, onUnmounted, ref } from 'vue';

const swiperRef = ref()
const numberOfSlidesPerView = ref(2)

const toLeft = () => {
  swiperRef.value.slidePrev()
}

const toRight = () => {
  swiperRef.value.slideNext()
}

const onSwiper = (newSwiper) => {
  if (!process.server) {
    swiperRef.value = newSwiper
  }
}

const onResize = () => {
  if (process.server) {
    return;
  }
  if (document.body.clientWidth < 480) {
    numberOfSlidesPerView.value = 1
  }
  else {
    numberOfSlidesPerView.value = 2
  }
}

onMounted(() => {
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <section
    id="roadmap"
    class="roadmap-wrapper"
  >
    <img
      src="/img/roadmap-background-mountains.webp"
      alt=""
      class="background-mountains"
    >
    <h2 class="section-header">
      {{ $t('section.roadmap.header') }}
    </h2>
    <div class="swiper-container-mobile">
      <swiper
        :slides-per-view="numberOfSlidesPerView"
        :space-between="5"
        @swiper="onSwiper"
      >
        <swiper-slide>
          <div class="slide-container-mobile">
            <div class="text">
              <div class="badge">
                Q4 2022
              </div>
              <p class="text-item">
                {{ $t('section.roadmap.first.1') }}
                <br>
                <br>
                {{ $t('section.roadmap.first.2') }}
                <br>
                <br>
                {{ $t('section.roadmap.first.3') }}
              </p>
            </div>
            <img
              src="/img/roadmap-psyduck.webp"
              alt=""
              class="pokemon"
            >
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="text">
            <div class="badge">
              Q1 2023
            </div>
            <p class="text-item">
              {{ $t('section.roadmap.second.1') }}
              <br>
              <br>
              {{ $t('section.roadmap.second.2') }}
              <br>
              <br>
              {{ $t('section.roadmap.second.3') }}
            </p>
          </div>
          <img
            src="/img/pokemon-ekans.webp"
            alt=""
            class="pokemon"
          >
        </swiper-slide>
        <swiper-slide>
          <div class="text">
            <div class="badge">
              Q2 - Q3 2023
            </div>
            <p class="text-item">
              {{ $t('section.roadmap.third.1') }}
              <br><br>
              {{ $t('section.roadmap.third.2') }}
              <br><br>
              {{ $t('section.roadmap.third.3') }}
            </p>
          </div>
          <img
            src="/img/pokemon-ditto.webp"
            alt=""
            class="pokemon"
          >
        </swiper-slide>
        <swiper-slide>
          <div class="text">
            <div class="badge">
              Q4 2023 >
            </div>
            <p class="text-item">
              {{ $t('section.roadmap.fourth.1') }}
              <br><br>
              {{ $t('section.roadmap.fourth.2') }}
              <br><br>
              {{ $t('section.roadmap.fourth.3') }}
            </p>
          </div>
          <img
            src="/img/pokemon-squirtle.webp"
            alt=""
            class="pokemon"
          >
        </swiper-slide>
        <button
          class="arrow to-left"
          @click="toLeft"
        >
          <div class="arrow-inner" />
        </button>
        <button
          class="arrow to-right"
          @click="toRight"
        >
          <div class="arrow-inner" />
        </button>
      </swiper>
    </div>

    <div class="rows">
      <div class="first">
        <div class="text">
          <div class="badge">
            Q4 2022
          </div>
          <p class="text-item">
            {{ $t('section.roadmap.first.1') }}
            <br>
            <br>
            {{ $t('section.roadmap.first.2') }}
            <br>
            <br>
            {{ $t('section.roadmap.first.3') }}
          </p>
        </div>
        <img
          src="/img/pokemon-ekans.webp"
          alt=""
          class="pokemon"
        >
        <div class="text">
          <div class="badge">
            Q1 2023
          </div>
          <p class="text-item">
            {{ $t('section.roadmap.second.1') }}
            <br>
            <br>
            {{ $t('section.roadmap.second.2') }}
            <br>
            <br>
            {{ $t('section.roadmap.second.3') }}
          </p>
        </div>
        <img
          src="/img/pokemon-squirtle.webp"
          alt=""
          class="pokemon"
        >
      </div>
      <div class="separators">
        <div class="blue-line" />
        <img
          src="/img/roadmap-separator.webp"
          alt=""
          class="separator size-1"
        >
        <img
          src="/img/roadmap-separator.webp"
          alt=""
          class="separator size-2"
        >
        <img
          src="/img/roadmap-separator.webp"
          alt=""
          class="separator size-3"
        >
        <img
          src="/img/roadmap-separator.webp"
          alt=""
          class="separator size-4"
        >
      </div>
      <div class="second">
        <img
          src="/img/roadmap-psyduck.webp"
          alt=""
          class="pokemon"
        >
        <div class="text">
          <div class="badge">
            Q2 - Q3 2023
          </div>
          <p class="text-item">
            {{ $t('section.roadmap.third.1') }}
            <br><br>
            {{ $t('section.roadmap.third.2') }}
            <br><br>
            {{ $t('section.roadmap.third.3') }}
          </p>
        </div>
        <img
          src="/img/pokemon-ditto.webp"
          alt=""
          class="pokemon"
        >
        <div class="text">
          <div class="badge">
            Q4 2023 >
          </div>
          <p class="text-item">
            {{ $t('section.roadmap.fourth.1') }}
            <br><br>
            {{ $t('section.roadmap.fourth.2') }}
            <br><br>
            {{ $t('section.roadmap.fourth.3') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.arrow {
  position: absolute;
  top: 50%;
  z-index: 600;
  border-radius: 50%;
  padding: 10px;
  background: var(--main-background);
  outline: none;
  border: none;
  cursor: pointer;
}

.arrow:hover {
  background: #333;
}

.arrow.to-left {
  transform: rotate(45deg);
  left: 10px;
}

.arrow.to-right {
  transform: rotate(-135deg);
  right: 10px;
}

.arrow-inner {
  padding-right: 20px;
  padding-top: 20px;
  border-bottom: 5px solid #FFFFFF;
  border-left: 5px solid #FFFFFF;
  transform: translate(2px, -2px);
  pointer-events: none;
}

.roadmap-wrapper {
  position: relative;
  max-width: 1500px;
  margin: 0 auto 0;
  padding: 160px 0 0;
}

.background-mountains {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 150;
}

.roadmap-wrapper .section-header {
  position: relative;
  z-index: 200;
  padding-bottom: 40px;
}

.rows {
  position: relative;
  z-index: 200;
  width: 100%;
}

.row {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.first,
.second {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.first {
  margin-bottom: -50px;
}

.separators {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 40px;
}

.blue-line {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 100%;
  background: #26E0FF;
}

.pokemon {
  height: 250px;
  max-width: 25%;
  object-fit: contain;
}

.text {
  position: relative;
  width: 25%;
  padding: 40px 20px 20px;
  background: var(--main-background);
  border-radius: 30px;
  box-sizing: border-box;
  color: #ffffff;
  font-size: 16px;
}

.size-1 {
  height: 89px;
  margin-bottom: -2px;
  margin-left: 100px;
}

.size-2 {
  height: 115px;
  margin-bottom: -3px;
}

.size-3 {
  height: 128px;
  margin-bottom: -3px;
}

.size-4 {
  height: 150px;
  margin-bottom: -4px;
  margin-right: 80px;
}

.badge {
  position: absolute;
  left: -30px;
  top: -30px;
  display: inline-block;
  background: #FFCB05;
  font-size: 38px;
  font-weight: 700;
  color: #000000;
  padding: 10px 70px 10px 15px;
  border-radius: 0 15px 15px 15px;
}

.swiper-container-mobile {
  position: relative;
  display: none;
  z-index: 300;
}

@media screen and (max-width: 1480px) {
  .roadmap-wrapper {
    padding-left: 50px;
    padding-right: 50px;
    box-sizing: border-box;
  }

  .badge {
    font-size: 30px;
    padding-right: 30px;
  }
}

@media screen and (max-width: 1170px) {
  .roadmap-wrapper {
    padding-top: 40px;
  }

  .second {
    margin-top: 30px;
  }

  .text {
    font-size: 14px;
  }

  .text-item {
    margin: 0;
  }
}

@media screen and (max-width: 1070px) {
  .swiper-container-mobile {
    display: block;
    text-align: center;
    box-sizing: border-box;
  }

  .rows {
    display: none;
  }
  .pokemon,
  .text {
    width: auto;
    max-width: 80%;
  }
  .text {
    margin: 30px 0 20px 30px;
  }
  .text-item {
    text-align: left;
  }
}
@media screen and (max-width: 800px) {
  .badge {
    font-size: 20px;
    left: -15px;
    top: -15px;
    padding: 5px;
    box-sizing: border-box;
  }
  .text {
    padding: 30px 10px 10px;
    border-radius: 15px;
  }
  .pokemon,
  .text {
    max-width: 100%;
    box-sizing: border-box;
  }
  .roadmap-wrapper {
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
  }
}
</style>