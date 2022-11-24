<template>
  <div class="select-wrapper">
    <img
      :src="currentLocaleIcon"
      alt=""
      class="selected-item-icon"
    >
    <span class="selected-item-label">
      {{ options[currentOption].label }}
    </span>
    <ul class="options">
      <li
        v-for="option in options"
        :key="option.id"
        class="option"
        @click="selectItem(option)"
      >
        {{ option.label }}
      </li>
    </ul>
    <span />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { IOption } from '~/types/IOption';

const options = ref<IOption[]>([
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

const currentOption = ref(0);

const selectItem = (option: IOption) => {
  currentOption.value = option.id;
}

const currentLocaleIcon = computed(() => options.value[currentOption.value].iconName)
</script>

<style scoped>
.selected-item,
.options {
  background: #212529;
  color: #ffffff;
}

.select-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.selected-item-label {
  border-radius: 5px;
  padding: 10px;
}

.selected-item-icon {
  width: 60px;
  height: 60px;
}
</style>