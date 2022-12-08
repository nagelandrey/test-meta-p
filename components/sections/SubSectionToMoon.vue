<script setup lang="ts"></script>

<template>
  <section class="moon-wrapper">
    <img
      class="moon-background-image"
      src="/img/subsection-to-moon.webp"
      alt=""
      loading="lazy"
    >
    <div class="spacer" />
    <div class="text-wrapper">
      <p class="moon-text">
        {{ $t('section.moon.send') }}
        <span class="accent">{{ $t('section.moon.pokemons') }}</span>
      </p>
      <p class="moon-text">
        {{ $t('section.moon.toMoon') }}
        <span class="accent">{{ $t('section.moon.together') }}</span>
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.moon-wrapper {
  --background-banner-size: 420px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  margin: -140px 0 0;
  padding: 0;
  overflow-x: hidden;
  height: var(--background-banner-size);
}
.moon-text {
  position: relative;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 200;
  line-height: 1.2;
  font-size: 60px;
  font-weight: 600;
  color: #FFFFFF;
}
.moon-text:last-child {
  margin-bottom: 20px;
  font-size: 75px;
  font-weight: 600;
}
.accent {
  color: #FFCB05;
}
.moon-background-image {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 150;
  width: auto;
  height: var(--background-banner-size);
  object-fit: contain;
}
@media screen and (max-width: 1600px) {
.moon-text {
  margin-right: -200px;
}
.moon-text:last-child {
  margin-right: -200px;
}
}
@media screen and (max-width: 1450px) {
.moon-text {
  margin-right: -50px;
}
.moon-text:last-child {
  margin-right: -50px;
}
  .moon-wrapper {
  --background-banner-size: 300px;
  }
.moon-text {
  font-size: 40px;
}
.moon-text:last-child {
  font-size: 50px;
}
}
@media screen and (max-width: 1090px) {
  .moon-wrapper {
    justify-content: flex-end;
  }
  .moon-wrapper {
  --background-banner-size: 250px;
  }
.moon-text {
  font-size: 30px;
  margin-right: 50px;
}
.moon-text:last-child {
  font-size: 40px;
  margin-right: 50px;
}
.spacer {
  display: none;
}
}
@media screen and (max-width: 770px) {
.moon-background-image {
margin-left: -100px;
}
.moon-text:last-child {
  font-size: 30px;
}
.moon-text {
  font-size: 25px;
  margin-right: 30px;
}
}
@media screen and (max-width: 578px) {
  .moon-wrapper {
  --background-banner-size: 200px;
  }
.moon-background-image {
  margin-left: -200px;
}
.moon-text:last-child {
  font-size: 24px;
}
.moon-text {
  font-size: 18px;
  margin-right: 30px;
}
}
</style>