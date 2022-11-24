<template>
  <header class="header">
    <nav class="header-navigation container">
      <a
        class="navigation-logo-wrapper"
        href=""
      >
        <img
          class="logo-pokemon-image"
          src="/img/logo-pokemon-image.webp"
          alt=""
        >
        <img
          class="logo-pokemon-name"
          src="/img/logo-pokemon-name.webp"
          alt=""
        >
      </a>
      <ul class="navigation-items">
        <li class="navigation-item">
          <a
            href=""
            class="link"
          >
            {{ $t('menu.main') }}
          </a>
        </li>
        <li class="navigation-item">
          <a
            href=""
            class="link"
          >
            {{ $t('menu.ecosystem') }}
          </a>
        </li>
        <li class="navigation-item">
          <a
            href=""
            class="link"
          >
            {{ $t('menu.roadmap') }}
          </a>
        </li>
        <li class="navigation-item">
          <a
            href=""
            class="link"
          >
            {{ $t('menu.whitepaper') }}
          </a>
        </li>
        <li class="navigation-item">
          <a
            href=""
            class="link"
          >
            {{ $t('menu.buy') }}
          </a>
        </li>
        <li class="navigation-item">
          <a
            href=""
            class="link"
          >
            {{ $t('menu.faq') }}
          </a>
        </li>
        <li class="navigation-item social-links">
          <a
            href="https://t.me/123"
            class="link"
          >
            <img
              src="/img/telegram-icon.svg"
              alt="telegram channel"
              class="social-icon"
            >
          </a>
          <a
            href="https://twitter.com/123"
            class="link"
          >
            <img
              src="/img/twitter-icon.svg"
              alt="telegram channel"
              class="social-icon"
            >
          </a>
        </li>
        <li class="navigation-item select-language">
          <LanguageSelect />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import LanguageSelect from '~/components/LanguageSelect.vue'
</script>