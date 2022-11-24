<template>
  <div class="timer-wrapper">
    <div class="timer-item">
      <div class="timer-item-number">
        {{ resultTimerData.days }}
      </div>
      <div class="timer-item-label">
        {{ $t('timer.days') }}
      </div>
    </div>
    <div class="separator">
      :
    </div>
    <div class="timer-item">
      <div class="timer-item-number">
        {{ resultTimerData.hours }}
      </div>
      <div class="timer-item-label">
        {{ $t('timer.hours') }}
      </div>
    </div>
    <div class="separator">
      :
    </div>
    <div class="timer-item">
      <div class="timer-item-number">
        {{ resultTimerData.minutes }}
      </div>
      <div class="timer-item-label">
        {{ $t('timer.minutes') }}
      </div>
    </div>
    <div class="separator">
      :
    </div>
    <div class="timer-item">
      <div class="timer-item-number">
        {{ resultTimerData.seconds }}
      </div>
      <div class="timer-item-label">
        {{ $t('timer.seconds') }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";
import {computed} from "vue";
import {ITimerParams} from "~/types/ITimerParams";

const endDateTimeString = '2022-11-25T00:00:00.000+00:00';

const timeZoneOffset = 0
const endTime = ref(Date.parse(endDateTimeString) / 1000);
const startTime = Date.parse(new Date().toUTCString()) / 1000;

const resultTimerData = ref<ITimerParams>({
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
});

setInterval(() => endTime.value--, 1000)

const differenceTime = computed(() => endTime.value - startTime + timeZoneOffset * 3600)

const convertNumberTimerToString = (value: number) => value < 10 ? `0${value}` : `${value}`

const updateTimer = () => {
  resultTimerData.value.days = String(differenceTime.value / 3600 / 24 ^ 0)
  resultTimerData.value.hours = convertNumberTimerToString(differenceTime.value / 3600 ^ 0)
  resultTimerData.value.minutes = convertNumberTimerToString((differenceTime.value - parseInt(resultTimerData.value.hours) * 3600)  / 60 ^ 0)
  resultTimerData.value.seconds = convertNumberTimerToString(differenceTime.value - parseInt(resultTimerData.value.hours) * 3600 - parseInt(resultTimerData.value.minutes) * 60)
}

updateTimer();

watch(differenceTime, () => {
  updateTimer();
});

</script>

<style scoped>
.timer-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px 80px;
  background: #212529;
  box-shadow: 0 10px 25px -3px #000;
  color: #FFCB05;
  border-radius: 30px;
  line-height: 1;
  font-weight: 200;
  text-shadow: 0 0 3px #FFCB05;
}

.timer-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.timer-item-number {
  font-size: 54px;
  margin-bottom: 10px;
}

.timer-item-label {
  font-size: 23px;
}

.separator {
  font-size: 33px;
}
</style>