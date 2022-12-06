<template>
  <section class="main-info-wrapper">
    <div class="left-column">
      <h1 class="main-info-header">
        {{ $t('section.mainInfo.header') }}
      </h1>
      <p class="main-info-text">
        {{ $t('section.mainInfo.anime') }}
      </p>
      <p class="main-info-text">
        {{ $t('section.mainInfo.features') }}
      </p>
    </div>
    <div class="right-column">
      <div class="image-wrapper">
        <div class="main-image-wrapper">
          <img
            class="main-info-image"
            src="/img/main-info-image.webp"
            alt=""
            loading="lazy"
          >
          <img
            class="main-info-image-background"
            src="/img/main-info-image-background.webp"
            alt=""
            loading="lazy"
          >
        </div>
        <div class="main-info-image-shadow" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$pokemon-animation-duration: 2s;
.main-info-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  margin: 50px auto 0;
  padding: 50px 20px 0;
  max-width: 1500px;
  overflow: hidden;
}
.left-column {
  width: 50%;
}
.right-column {
  width: 50%;
}
.main-image-wrapper {
  position: relative;
}
.main-info-image-background {
  position: absolute;
  top: -60px;
  right: -150px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 150;
}
.main-info-image {
  position: relative;
  z-index: 200;
}
.image-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main-info-header {
  margin: 0 0 30px;
  padding: 0;
  font-size: 50px;
}
.main-info-text {
  margin: 0 0 30px;
  padding: 0;
  font-size: 32px;
}
.main-info-image {
  max-width: 700px;
  transform: translateY(0);
  animation: pokemonAnimation $pokemon-animation-duration 0s ease-in-out alternate infinite;
}
.main-info-image-shadow {
  height: 100px;
  width: 500px;
  background: radial-gradient(farthest-corner, rgba(0, 0, 0, 0.6) 0%, transparent 50%);
  animation: pokemonShadowAnimation $pokemon-animation-duration calc($pokemon-animation-duration / 4) ease-in-out alternate-reverse infinite;
}
@keyframes pokemonAnimation {
  0% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(-40px);
  }
}
@keyframes pokemonShadowAnimation {
  0% {
    transform: scale(1.2, 1.2);
  }
  100% {
    transform: scale(1.8, 1.8);
  }
}
@media screen and (max-width: 1300px) {
.main-info-image {
  max-width: 500px;
}
.main-info-header {
  margin: 0 0 20px;
  font-size: 35px;
}
.main-info-text {
  margin: 0 0 20px;
  font-size: 24px;
}
.main-info-image-shadow { 
  width: 350px;
}
}
@media screen and (max-width: 1000px) {
.main-info-header {
  font-size: 32px;
}
.main-info-text {
  font-size: 24px;
}
.main-info-image {
  max-width: 400px;
}
.left-column {
  margin-bottom: 130px;
}
}
@media screen and (max-width: 780px) {
.main-info-image-shadow { 
  height: 60px;
  width: 300px;
}
  .main-info-wrapper {
    flex-direction: column;
  }
.right-column {
  order: -1;
  width: 80%;
  margin-top: 30px;
}
.left-column {
  width: 88%;
}
}
</style>