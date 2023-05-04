<script setup lang="ts">
import { RouterLink } from 'vue-router'

const recommendCategories = [
  {
    id: 'chocolate',
    name: 'Chocolate'
  },
  {
    id: 'fruits',
    name: 'Fruits'
  },
  {
    id: 'strawberry',
    name: 'Strawberry'
  },
  {
    id: 'vanilla',
    name: 'Vanilla'
  }
]
</script>

<template>
  <footer>
    <div class="footer container">
      <div class="footer__logo">
        <img src="@assets/images/logo.png" alt="footer logo" />
      </div>
      <div class="footer__lists">
        <div class="footer__list">
          <h6 class="footer__list__title">Categories</h6>
          <ul>
            <li v-for="category in recommendCategories" :key="category.id">
              <RouterLink :to="`/cakes?categories=chocolate${category.id}`">{{
                category.name
              }}</RouterLink>
            </li>
          </ul>
        </div>
        <div class="footer__list">
          <h6 class="footer__list__title">About</h6>
          <ul>
            <li>Geek's Bakery</li>
            <li>Pham Chi Trung</li>
            <li>phamchitrung.work@gmail.com</li>
          </ul>
        </div>
        <div class="footer__list">
          <h6 class="footer__list__title">Social</h6>
          <div class="footer__list__social">
            <a target="_blank" href="https://www.facebook.com/trungxi.it">
              <img src="@assets/icons/facebook.svg" alt="facebook icon" />
            </a>
            <a target="_blank" href="https://github.com/TrungXiIT">
              <img src="@assets/icons/github.svg" alt="github icon" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/trung-ph%E1%BA%A1m-101b871a2/">
              <img src="@assets/icons/linkedin.svg" alt="linkedin icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid footer__copyright">
      <p>Copyright © 2021 Pham Chi Trung</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import url('@assets/scss/footer.scss');
</style>
