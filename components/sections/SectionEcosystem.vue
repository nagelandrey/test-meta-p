<template>
  <section 
    id="ecosystem"
    class="ecosystem-wrapper"
  >
    <h2 class="section-header">
      {{ $t('section.ecosystem.header') }}
    </h2>
    <div class="cards">
      <div class="card">
        <img
          src="/img/card-background.webp"
          alt=""
          class="card-background"
        >
        <div class="card-content">
          <div class="card-badge">
            01
          </div>
          <div class="cart-header">
            {{ $t('section.ecosystem.game.header') }}
          </div>
          <ul class="card-items">
            <li class="item">
              <img
                src="/img/icon-swords.webp"
                alt=""
                class="item-icon"
              >
              {{ $t('section.ecosystem.game.first') }}
            </li>
            <li class="item">
              <img
                src="/img/icon-compass.webp"
                alt=""
                class="item-icon"
              >
              {{ $t('section.ecosystem.game.second') }}
            </li>
          </ul>
        </div>
        <div class="pokemon-wrapper">
          <img
            src="/img/ecosystem-pikachu.webp"
            alt=""
            class="pokemon"
          >
          <img
            class="pokemon-background"
            src="/img/ecosystem-circle-orange.webp"
            alt=""
          >
        </div>
      </div>
      <div class="card">
        <img
          src="/img/card-background.webp"
          alt=""
          class="card-background"
        >
        <div class="card-content">
          <div class="card-badge">
            02
          </div>
          <div class="cart-header">
            {{ $t('section.ecosystem.community.header') }}
          </div>
          <ul class="card-items">
            <li class="item">
              <img
                src="/img/icon-egg.webp"
                alt=""
                class="item-icon"
              >
              {{ $t('section.ecosystem.community.first') }}
            </li>
            <li class="item">
              <img
                src="/img/icon-heart.webp"
                alt=""
                class="item-icon"
              >
              {{ $t('section.ecosystem.community.second') }}
            </li>
            <li class="item">
              <img
                src="/img/icon-bridge.webp"
                alt=""
                class="item-icon"
              >
              {{ $t('section.ecosystem.community.third') }}
            </li>
          </ul>
        </div>
        <div class="pokemon-wrapper">
          <img
            src="/img/ecosystem-cubone.webp"
            alt=""
            class="pokemon cubone"
          >
          <img
            class="pokemon-background"
            src="/img/ecosystem-circle-purple.webp"
            alt=""
          >
        </div>
      </div>
      <div class="card">
        <img
          src="/img/card-background.webp"
          alt=""
          class="card-background"
        >
        <div class="card-content">
          <div class="card-badge">
            03
          </div>
          <div class="cart-header">
            {{ $t('section.ecosystem.marketplaces.header') }}
          </div>
          <ul class="card-items">
            <li class="item">
              <img
                src="/img/icon-nft.webp"
                alt=""
                class="item-icon"
              >
              {{ $t('section.ecosystem.marketplaces.first') }}
            </li>
            <li class="item">
              <img
                src="/img/icon-arrows.webp"
                alt=""
                class="item-icon"
              >
              {{ $t('section.ecosystem.marketplaces.second') }}
            </li>
          </ul>
        </div>
        <div class="pokemon-wrapper">
          <img
            src="/img/ecosystem-charmander.webp"
            alt=""
            class="pokemon charmander"
          >
          <img
            class="pokemon-background"
            src="/img/ecosystem-circle-red.webp"
            alt=""
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ecosystem-wrapper {
  margin: 0 auto;
  max-width: 1500px;
  overflow: hidden;
  padding-bottom: 60px;
}
.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}
.ecosystem-wrapper .section-header {
  padding: 30px 10px 60px;
  text-align: left;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: calc(33% - 60px);
  box-sizing: border-box;
}
.card-content {
  border-radius: 30px;
  background: var(--main-background);
  color: #FFFFFF;
  width: 100%;
  min-height: 600px;
  box-sizing: border-box;
  z-index: 200;
}
.card-badge {
  display: inline-block;
  margin: -10px 0 0 -10px;
  padding: 25px 35px;
  border-radius: 0 20px 20px 20px;
  background: #FFCB05;
  font-weight: 700;
  font-size: 50px;
  color: #000000;
  box-sizing: border-box;
}
.cart-header {
  display: inline-block;
  font-size: 35px;
  box-sizing: border-box;
}
.card-items {
  width: 100%;
  margin: 0;
  padding: 50px 40px;
  list-style-type: none;
  box-sizing: border-box;
}
.card-items .item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 0 0 20px 0;
  padding: 0;
  font-size: 22px;
  line-height: 1.1;
  box-sizing: border-box;
}
.card-background {
  position: absolute;
  top: -35px;
  left: -15px;
  width: calc(100% + 30px);
  height: calc(100%);
  z-index: 100;
}
.item .item-icon {
  width: 43px;
  margin-right: 10px;
  box-sizing: border-box;
}
.pokemon-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: -40%;
  box-sizing: border-box;
}
.pokemon {
  position: relative;
  z-index: 300;
}
.pokemon.cubone {
  margin-top: 35px;
}
.pokemon.charmander {
  margin-top: 40px;
}
.pokemon-background {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: -10px;
  z-index: 250;
  animation: pokemonBackground 7s linear infinite;
}
.card:nth-child(2) .pokemon-background {
  animation-delay: 2s;
}
.card:nth-child(3) .pokemon-background {
  animation-delay: 4s;
}
@keyframes pokemonBackground {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media screen and (max-width: 1564px) {
  .cards {
    padding: 0 30px;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
  }
  .card .cart-header {
    font-size: 25px;
    margin-left: 10px;
  }
  .card {
    width: calc(30% - 20px);
    min-width: 360px;
    margin-bottom: 30px;
  }
  .card-items .item {
    font-size: 18px;
  }
  .card-content {
    min-height: 450px;
  }
}
</style>