<template>
  <header class="header">
    <nav class="header-navigation container">
      <a
        class="navigation-logo-wrapper"
        href=""
      >
        <img
          class="logo-pokemon-image"
          src="/img/header-logo.webp"
          alt=""
        >
      </a>
      <ul class="navigation-items">
        <li class="navigation-item">
          <a
            href="#ecosystem"
            class="link"
          >
            {{ $t('menu.ecosystem') }}
          </a>
        </li>
        <li class="navigation-item">
          <a
            href="#roadmap"
            class="link"
          >
            {{ $t('menu.roadmap') }}
          </a>
        </li>
        <li class="navigation-item">
          <a
            href="/whitepaper.pdf"
            class="link"
            target="_blank"
          >
            {{ $t('menu.whitepaper') }}
          </a>
        </li>
        <li class="navigation-item social-links">
          <a
            :href="$t('link.telegram')"
            class="link"
          >
            <img
              src="/img/icon-telegram.png"
              alt=""
              class="social-icon"
            >
          </a>
          <!-- <a
            href="https://twitter.com/"
            class="link"
          >
            <img
              src="/img/icon-twitter.png"
              alt=""
              class="social-icon"
            >
          </a> -->
        </li>
        <li class="navigation-item select-language">
          <LanguageSelect />
        </li>
        <div
          class="burger"
          @click="showMenu"
        >
          <div class="burger-line" />
          <div class="burger-line" />
          <div class="burger-line" />
        </div>
        <div
          v-show="isMenuOpened"
          class="burger-menu"
        >
          <a
            href="#ecosystem"
            class="link"
          >
            {{ $t('menu.ecosystem') }}
          </a>
          <a
            href="#roadmap"
            class="link"
          >
            {{ $t('menu.roadmap') }}
          </a>
          <a
            href="/whitepaper.pdf"
            class="link"
          >
            {{ $t('menu.whitepaper') }}
          </a>
        </div>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LanguageSelect from '~/components/LanguageSelect.vue'

const isMenuOpened = ref(false);

const showMenu = () => {
  isMenuOpened.value = !isMenuOpened.value;
}
</script>

<style scoped>
.burger {
  display: none;
  cursor: pointer;
  box-sizing: border-box;
}
.burger-line {
  width: 30px;
  height: 2px;
  margin: 8px 0;
  background: #FFFFFF;
  pointer-events: none;
  box-sizing: border-box;
}
.burger-menu {
  position: absolute;
  left: 0;
  top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.4);
}
.burger-menu .link {
  color: #FFFFFF;
  padding: 10px 40px 10px;
  box-sizing: border-box;
}
@media screen and (max-width: 1120px) {
  .burger {
    display: block;
  }
}
</style>