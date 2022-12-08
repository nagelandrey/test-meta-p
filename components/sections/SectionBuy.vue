<template>
  <section
    id="buy"
    class="buy-wrapper"
  >
    <h2 class="section-header">
      {{ $t('section.buy.header') }}
    </h2>
    <div class="buy-links">
      <a
        class="link disable"
        href="#"
      >
        <img
          src="/img/logo-binance.png"
          alt=""
          class="store"
        >
        <img
          src="/img/buy-soon.webp"
          alt=""
          class="soon"
        >
      </a>
      <a
        class="link disable"
        href="#"
      >
        <img
          src="/img/logo-pancake.png"
          alt=""
          class="store"
        >
        <img
          src="/img/buy-soon.webp"
          alt=""
          class="soon"
        >
      </a>
      <a
        class="link disable"
        href="#"
      >
        <img
          src="/img/logo-bybit.png"
          alt=""
          class="store"
        >
        <img
          src="/img/buy-soon.webp"
          alt=""
          class="soon"
        >
      </a>
      <a
        class="link disable"
        href="#"
      >
        <img
          src="/img/logo-bitmart.png"
          alt=""
          class="store"
        >
        <img
          src="/img/buy-soon.webp"
          alt=""
          class="soon"
        >
      </a>
      <a
        class="link disable"
        href="#"
      >
        <img
          src="/img/logo-huobi.png"
          alt=""
          class="store"
        >
        <img
          src="/img/buy-soon.webp"
          alt=""
          class="soon"
        >
      </a>
    </div>
  </section>
</template>

<style scoped>
.buy-links {
  display: flex;
  justify-content: space-around;
  background: var(--main-background);
}
.store {
  height: 100px;
  max-width: 400px;
  object-fit: contain;
}
.link {
  position: relative;
  margin: 25px 0;
}
.link .soon {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 0;
  padding-left: 30px;
  height: 100%;
  object-fit: contain;
}
.link.disable .store {
  opacity: 0.2;
}
@media screen and (max-width: 1775px) {
  .store {
    height: 80px;
    max-width: 300px;
  }
}
@media screen and (max-width: 1467px) {
  .store {
    height: 60px;
    max-width: 230px;
  }
  .link .soon {
    height: 60px;
  }
}
@media screen and (max-width: 1040px) {
  .buy-links {
    flex-wrap: wrap;
    justify-content: center;
  }
  .buy-links .link {
    margin: 20px;
  }
}
@media screen and (max-width: 550px) {
  .buy-links {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
  .buy-links .link {
    margin: 20px;
  }
}
</style>