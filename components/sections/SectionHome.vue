<template>
  <section class="section-home home-wrapper">
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
  justify-content: space-between;
  align-items: center;
  background: url('/img/main-background-space.webp') center no-repeat;
  background-size: cover;
  padding-bottom: calc($timer-offset + 10px);
}
.pokeball {
  margin-top: 100px;
  transform: translate(80px, -100px);
}
.pokeball.left {
  animation: pokeballLeft 1s ease-in-out alternate infinite;
}
.pokeball.right {
  transform:  translate(-80px, 80px) rotate(35deg) scale(-1, 1);
  animation: pokeballRight 1s 0.2s ease-in-out alternate infinite;
}
@keyframes pokeballLeft {
  0% {
    margin-bottom: -$pokeball-animation-margin;
  }
  100% {
    margin-bottom: $pokeball-animation-margin;
  }
}
@keyframes pokeballRight {
  0% {
    margin-bottom: $pokeball-animation-margin;
  }
  100% {
    margin-bottom: -$pokeball-animation-margin;
  }
}
.front-position {
  position: relative;
  z-index: 150;
}
.logo {
  max-width: 900px;
  margin: 54px 0 0;
  object-fit: contain;
}
.main-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.home-description {
  padding: 0;
  margin: 0;
  color: #FFFFFF;
  font-size: 50px;
  max-width: 1200px;
  text-align: center;
}
</style>