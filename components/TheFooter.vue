<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="left-column">
        <img
          class="footer-logo"
          src="/img/header-logo.webp"
          alt=""
        >
        <p class="email">
          partners@meta-pokemon.xyz
        </p>
      </div>
      <div class="right-column">
        <div class="footer-description">
          {{ $t('footer.text') }}
        </div>
        <div class="footer-links">
          <a
            :href="$t('link.telegram')"
            class="link"
          >
            <img
              class="link-image"
              src="/img/icon-telegram.png"
              alt=""
            >
          </a>
          <!-- <a
            href="https://twitter.com/"
            class="link"
          >
            <img
              class="link-image"
              src="/img/icon-twitter.png"
              alt=""
            >
          </a> -->
          <a
            href="mailto:partners@meta-pokemon.xyz"
            class="link"
          >
            <img
              class="link-image"
              src="/img/icon-mail.png"
              alt=""
            >
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      All rights reserved.
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 80px 0 40px;
  background: var(--main-background);
  color: #FFFFFF;
}
.footer-top {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  max-width: 1600px;
  padding: 0 20px;
  box-sizing: border-box;
}
.left-column,
.right-column {
  flex: 1 1 auto;
  max-width: 500px;
}
.footer-logo {
  max-width: 460px;
}
.email {
  font-size: 30px;
}
.footer-links {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 30px 0;
  gap: 25px;
}
.link {
  border-radius: 50%;
  height: 70px;
  width: 70px;
  background: transparent;
}

.link-image {
  width: 100%;
  object-fit: contain;
}
.footer-description {
  font-size: 26px;
}
@media screen and (max-width: 1100px) {
  .footer-top {
    justify-content: space-between;
  }
  .footer-logo {
    max-width: 300px;
  }
.email {
  font-size: 20px;
}
.footer-description {
  font-size: 17px;
  text-align: right;
}
.footer-links {
  justify-content: flex-end;
}
}
@media screen and (max-width: 700px) {
  .footer-logo {
    max-width: 170px;
  }
.email {
  font-size: 17px;
}
.link {
  height: 40px;
  width: 40px;
}
.footer-links {
  padding: 10px 0;
  gap: 15px;
}
}
@media screen and (max-width: 700px) {
  .footer {
    padding-top: 30px;
  }
  .footer-logo {
    display: block;
    margin: 0 auto;
  }
.footer-description {
  text-align: center;
}
  .footer-top {
    flex-direction: column;
    align-items: center;
  }
.footer-links {
  justify-content: center;
}
.footer-bottom {
  font-size: 12px;
}
}
</style>
