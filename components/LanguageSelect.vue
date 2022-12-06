<template>
  <div class="wrapper">
    <div
      class="select-wrapper"
      @mouseover="isOptionsEnable = true"
      @mouseleave="isOptionsEnable = false"
    >
      <img
        :src="options[currentOption].iconName"
        alt=""
        class="selected-item-icon"
      >
      <span class="selected-item-label">
        {{ options[currentOption].label }}
      </span>
      <span class="arrow" />
    </div>
    <Transition name="fade">
      <ul
        v-show="isOptionsEnable"
        ref="optionsRef"
        class="options"
        @click="selectItem"
        @mouseover="isOptionsEnable = true"
        @mouseleave="isOptionsEnable = false"
      >
        <li
          v-for="option in options"
          :key="option.id"
          class="option"
          :data-id="option.id"
        >
          {{ option.label }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const options = ref([
  {
    id: 0,
    label: 'RU',
    iconName: '/img/russia-flag.svg'
  },
  {
    id: 1,
    label: 'EN',
    iconName: '/img/english-flag.svg'
  }
])

const optionsRef = ref();
const isOptionsEnable = ref();
const route = useRoute();
const router = useRouter();

const currentOption = computed(() => route.path === '/ru' ? 0 : 1);

const selectItem = (event) => {
  if (!event.target.dataset.id) {
    return;
  }
  router.push(event.target.dataset.id === '0' ? '/ru' : '/');
}
</script>

<style scoped>
.selected-item,
.options {
  color: #ffffff;
  cursor: pointer;
}
.selected-item {
  background: #212529;
}
.options {
  position: absolute;
  left: 0;
  top: 0;
  padding: 0;
  width: 100%;
  transform: translateY(60px);
  box-sizing: border-box;
  list-style-type: none;
  transition: all 0.3s ease;
}
.fade-enter-active,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.option {
  padding: 5px 0 5px 10px;
  width: 100%;
  background: #212529;
  box-sizing: border-box;
}
.option:hover {
  background: #5a5e63;
}
.options .option:first-child {
  border-radius: 5px 5px 0 0;
}
.options .option:last-child {
  border-radius: 0 0 5px 5px;
}

.select-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.selected-item-label {
  margin: 0 10px;
  border-radius: 10px;
  background: #212529;
  padding: 5px 10px;
  color: #FFFFFF;
}

.selected-item-icon {
  height: 40px;
}

.arrow {
  margin-left: 10px;
  border-top: 15px solid #FFFFFF;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}
.wrapper {
  position: relative;
}

@media screen and (max-width: 600px) {
    .selected-item-icon {
        display: none;
    }
    .arrow {
      display: none;
    }
    .arrow {
      margin-left: 0px;
    }
}
</style>