<template>
  <section class="home-wrapper">
    <img
      src="/img/pokeball.webp"
      alt=""
      class="pokeball left front-position"
    >
    <div class="main-content front-position">
      <img
        src="/img/logo-meta-pokemon.webp"
        alt=""
        class="logo"
      >
      <p class="home-description">
        {{ $t('section.home.mainDescriptionGrab') }}
      </p>
      <p class="home-description">
        {{ $t('section.home.mainDescriptionLeft') }}
      </p>
      <p class="home-description-small">
        {{ $t('section.home.mainDescriptionSmall') }}
      </p>
    </div>
    <img
      src="/img/pokeball.webp"
      alt=""
      class="pokeball right front-position"
    >
  </section>
  <div class="timer-container front-position">
    <TheTimer />
  </div>
</template>

<script setup lang="ts">
import TheTimer from '@/components/TheTimer.vue'
</script>

<style scoped lang="scss">
$timer-offset: 78px;
$pokeball-animation-margin: 45px;

.timer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -$timer-offset 0 0;
}
.home-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('/img/main-background-space-blur.webp') center no-repeat, #151729;
  background-size: cover;
  padding-bottom: calc($timer-offset + 30px);
  overflow: hidden;
  --top-offset: 200px;
  margin-top: 100px;
}
.home-wrapper .pokeball { 
  position: absolute;
  transform: translate(80px, -100px);
}
.pokeball.left {
  left: 0;
  animation: pokeballLeft 1s ease-in-out alternate infinite;
}
.pokeball.right {
  right: 0;
  transform:  translate(-80px, 80px) rotate(35deg) scale(-1, 1);
  animation: pokeballRight 1s 0.2s ease-in-out alternate infinite;
}
@keyframes pokeballLeft {
  0% {
    top: calc(var(--top-offset) - $pokeball-animation-margin);
  }
  100% {
    top: calc($pokeball-animation-margin + var(--top-offset));
  }
}
@keyframes pokeballRight {
  0% {
    top: calc($pokeball-animation-margin + var(--top-offset));
  }
  100% {
    top: calc(var(--top-offset) - $pokeball-animation-margin);
  }
}
.front-position {
  position: relative;
  z-index: 150;
}
.logo {
  max-width: 900px;
  margin: 54px 0 10px;
  object-fit: contain;
}
.main-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 200;
}
.home-description-small,
.home-description {
  padding: 0;
  margin: 0;
  color: #FFFFFF;
  font-size: 43px;
  max-width: 1200px;
  text-align: center;
}
.home-description-small {
  display: none;
}
@media screen and (max-width: 1550px) {

  .logo {
    max-width: 750px;
  }
  .home-wrapper .pokeball {
    --top-offset: 150px;
    width: 220px;
    height: 220px;
  }
  .home-description {
    font-size: 30px;
  }
}
@media screen and (max-width: 1110px) {
  .pokeball {
    display: none;
  }
}
@media screen and (max-width: 788px) {
  .home-wrapper {
    margin-top: 40px;
  }
  .pokeball {
    display: none;
  }
  .home-description {
    display: none;
  }
  .home-description-small {
    display: block;
    font-size: 30px;
    max-width: 550px;
    margin: 0 15px;
    width: 100%;
  }
  .logo {
    width: 100%;
    height: auto;
    margin: 20px -30px 10px -30px;
  }
} 
@media screen and (max-width: 550px) {
  .home-description-small {
    font-size: 20px;
  }
}
@media screen and (max-width: 400px) {
  .home-description-small {
    font-size: 16px;
  }
}

</style>