<script setup lang="ts">
import SectionHome from '@/components/sections/SectionHome.vue';
import SectionMainInfo from '@/components/sections/SectionMainInfo.vue';
import SubSectionToMoon from '@/components/sections/SubSectionToMoon.vue';
import SectionBuy from '@/components/sections/SectionBuy.vue';
import SectionFaq from '@/components/sections/SectionFaq.vue';
import SectionEcosystem from '@/components/sections/SectionEcosystem.vue';
import SectionRoadmap from '@/components/sections/SectionRoadmap.vue';
</script>

<template>
  <div>
    <SectionHome />
    <SectionMainInfo />
    <SubSectionToMoon />
    <SectionEcosystem />
    <SectionRoadmap />
    <SectionBuy />
    <SectionFaq />
  </div>
</template>

<style scoped lang="scss" />
