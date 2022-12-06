<template>
  <div class="faq-wrapper">
    <img
      class="left-column"
      src="/img/faq-phones.webp"
      alt=""
    >
    <div
      class="right-column"
      @click="onRightColumnClick"
    >
      <h2 class="section-header big-header">
        {{ $t('section.faq.header') }}
      </h2>
      <div class="accordion">
        <button class="accordion-button">
          <span class="corner" />
          {{ $t('section.faq.first.button') }}
        </button>
        <div>
          <p class="accordion-text">
            {{ $t('section.faq.first.text') }}
          </p>
        </div>
      </div>
      <div class="accordion">
        <button class="accordion-button">
          <span class="corner" />
          {{ $t('section.faq.second.button') }}
        </button>
        <div>
          <p class="accordion-text">
            {{ $t('section.faq.second.text') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const onRightColumnClick = (event) => {
  if (!window) {
    return;
  }
  if (!event.target) {
    return;
  }
  if (!event.target.classList.contains('accordion')) {
    return;
  }
  event.target.classList.toggle('opened');
}
</script>

<style scoped>
.section-header.big-header {
  font-size: 90px;
  margin: 0 0 20px;
}
.faq-wrapper {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 200px 0;
  background-image: radial-gradient( farthest-corner at -100% -100%, #BEBEBE, #D2D2D2);
}
.left-column {
  width: 40%;
}
.right-column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 40%;
}
.accordion {
  width: 100%;
  max-width: 600px;
  padding: 20px;
  margin-bottom: 20px;
  background: var(--main-background);
  cursor: pointer;
  border-radius: 30px;
  overflow: hidden;
  box-sizing: border-box;
}
.accordion-button {
  outline: none;
  border: none;
  width: 100%;
  font-size: 28px;
  text-align: left;
  background: transparent;
  color: #FFFFFF;
  cursor: pointer;
  pointer-events: none;
}
.corner {
  display: inline-block;
  border-left: 3px solid #FFFFFF;
  border-bottom: 3px solid #FFFFFF;
  width: 10px;
  height: 10px;
  margin: 0 20px 5px 10px;
  transform: rotate(-45deg);
}
.accordion-text {
  display: block;
  white-space: wrap;
  margin: 0;
  padding: 0 5px;
  height: 0;
  visibility: hidden;
  color: #FFFFFF;
  max-width: 100%;
}
.accordion.opened .corner {
  transform: rotate(135deg);
}
.accordion.opened .accordion-text {
  visibility: visible;
  height: auto;
  margin: 10px 0;
}
@media screen and (max-width: 1000px) {
.section-header.big-header {
  font-size: 60px;
  margin: 0 0 15px;
}
.accordion {
  padding: 10px;
}
}
@media screen and (max-width: 800px) {
  .faq-wrapper {
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 50px;
  }
  .right-column,
  .left-column {
    width: 60%;
  }
  .section-header.big-header {
    margin: 0 auto 20px;
  }
}
@media screen and (max-width: 480px) {
  .right-column,
  .left-column {
    width: 85%;
  }
}
</style>