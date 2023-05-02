<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <!-- <div id="loading-screen">
    <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
  </div> -->
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>

<style scoped></style>
