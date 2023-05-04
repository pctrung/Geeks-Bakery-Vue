<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
let state = reactive({
  search: ''
})

const handleSearch = () => {
  state.search && router.push(`/cakes?search=${state.search}`)
}
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <header class="header">
        <RouterLink to="/" class="header__logo">
          <img src="@assets/images/logo.png" alt="Geek's Bakery Logo" />
        </RouterLink>
        <nav class="header__menu noselect">
          <RouterLink to="/" class="header__menu__item">Home</RouterLink>
          <RouterLink to="/cakes" class="header__menu__item">Cakes</RouterLink>
          <RouterLink to="/about" class="header__menu__item">About</RouterLink>
        </nav>
        <form @submit.prevent="handleSearch" class="header__search">
          <button class="header__search__button noselect">
            <img src="@assets/icons/search.png" alt="search icon" @(click)="handleSearch" />
          </button>
          <input
            placeholder="Search..."
            type="text"
            name="keyword"
            id="search"
            v-model="state.search"
          />
        </form>
        <div class="header__info">
          <div class="header__cart noselect">
            <img src="@assets/icons/cart.svg" alt="cart icon" />
            <span class="header__cart__amount">2</span>
          </div>
          <div class="header__user noselect">
            <div class="header__user__avatar">
              <img
                src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/320530115_6383074731706570_5520078289062098600_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ru2Xvniokm0AX9EA1RR&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfD1IgNwISJ38ZQRucJTnAZxJdj3RCh1U3xLlPi2d4U2NA&oe=6456E0F2"
                alt="Avatar"
              />
              <div class="header__user__dropdown">
                <ul>
                  <li><RouterLink to="/profile">Profile</RouterLink></li>
                  <li><RouterLink to="/cart">Cart</RouterLink></li>
                  <li><RouterLink to="/">Sign out</RouterLink></li>
                </ul>
              </div>
            </div>
          </div>
          <label for="nav-mobile__button">
            <img class="nav-mobile__icon" src="@assets/icons/menu-mobile.svg" alt="menu bar" />
          </label>
        </div>
      </header>
      <input hidden type="checkbox" name="nav" class="nav-mobile__button" id="nav-mobile__button" />
      <nav class="nav-mobile noselect">
        <label for="nav-mobile__button" class="nav-mobile__close">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="92.132px"
            height="92.132px"
            viewBox="0 0 92.132 92.132"
            style="enable-background: new 0 0 92 92"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  fill="#f3455a"
                  d="M2.141,89.13c1.425,1.429,3.299,2.142,5.167,2.142c1.869,0,3.742-0.713,5.167-2.142l33.591-33.592L79.657,89.13
    c1.426,1.429,3.299,2.142,5.167,2.142c1.867,0,3.74-0.713,5.167-2.142c2.854-2.854,2.854-7.48,0-10.334L56.398,45.205
    l31.869-31.869c2.855-2.853,2.855-7.481,0-10.334c-2.853-2.855-7.479-2.855-10.334,0L46.065,34.87L14.198,3.001
    c-2.854-2.855-7.481-2.855-10.333,0c-2.855,2.853-2.855,7.481,0,10.334l31.868,31.869L2.143,78.795
    C-0.714,81.648-0.714,86.274,2.141,89.13z"
                />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </label>

        <form
          asp-controller="Cakes"
          asp-action="Index"
          method="get"
          class="nav-mobile__items__search"
        >
          <button class="nav-mobile__items__search__button noselect">
            <img src="@assets/icons/search.png" alt="search icon" />
          </button>
          <input placeholder="Search..." type="text" name="keyword" id="search-mobile" />
        </form>
        <nav class="nav-mobile__items">
          <ul>
            <li><RouterLink to="/Home">Home</RouterLink></li>
            <li><RouterLink to="/Cakes">Cakes</RouterLink></li>
            <li><RouterLink to="/Account">Sign in</RouterLink></li>
            <li><RouterLink to="/">Profile</RouterLink></li>
            <li><RouterLink to="/Cart">Cart</RouterLink></li>
            <li><RouterLink to="/About">About</RouterLink></li>
            <li><RouterLink to="/Account">Sign out</RouterLink></li>
          </ul>
        </nav>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url('@assets/scss/header.scss');
</style>
