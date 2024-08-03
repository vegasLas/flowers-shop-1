<script lang="tsx" setup>
import { onMounted } from 'vue';
// import { useGlobalSearch } from '#build/stores/useGlobalSearch';
// import { useBurger } from '#build/stores/useBurger';
// import { useCart } from '#build/stores/useCart';
// import { useProducts } from '#build/stores/useProducts';
// import { useBouquets } from '#build/stores/useBouquets';
// import { useScrollFixed } from '#build/stores/useScrollFixed';

// const globalSearch = useGlobalSearch();
const burger = useBurger();
const cart = useCart();
const isFixed = useScrollFixed();

const productStore = useProducts();
const bouquetStore = useBouquets();

const { fetchProducts, products, isLoading: productsLoading } = productStore;
const { fetchBouquets, bouquets, isLoading: bouquetsLoading } = bouquetStore;
onMounted(() => {
  fetchProducts({ sortFields: { orderItemCount: 'desc' } });
  fetchBouquets({ sortFields: { orderItemCount: 'desc' } });
});
</script>

<template>
  <header :class="[isFixed ? 'fixed top-0 w-full z-10 scroll-fix' : '', 'duration-300 top-0 bg-[var(--fallback-b1,oklch(var(--b1)/1))]']">
    <div class="lg:container lg:m-auto z-[4]">
      <nav class="nav navbar">
        <div class="navbar-start">
          <div tabindex="0" @click="burger.isActive = !burger.isActive" role="button" class="cursor-pointer p-1 md:hidden">
            <Icon size="25px" :name="burger.isActive === false ? 'gridicons:align-left' : 'mi:close'" />
          </div>
          <NuxtLink to="/" class="hidden md:block text-xl">LasFlores</NuxtLink>
        </div>
        <div class="navbar-center">
          <NuxtLink to="/" class="block md:hidden text-xl">LasFlores</NuxtLink>
          <AppHeaderNavBodyLg  :products="products" :productsLoading="productsLoading" :bouquets="bouquets" :bouquetsLoading="bouquetsLoading" />
        </div>  
        <div class="navbar-end">
          <!-- <button v-show="!burger.isActive" class="mr-4" @click="globalSearch.isActive = !globalSearch.isActive">
            <Icon class="w-7 h-7" name="formkit:search" />
          </button> -->
          <!-- <button v-show="!burger.isActive" class="mr-4" @click="globalSearch.isActive = !globalSearch.isActive">
            <div class="indicator">
              <span class="indicator-item badge p-[5px] rounded-full bg-[#f16e36] text-white">{{ cart.data.size }}</span> 
              <Icon class="w-7 h-7" name="basil:clipboard-outline" />
            </div>
          </button> -->
          <Theme />
        </div>
      </nav>
    </div>
    <AppHeaderNavBodySm :isBurgerActive="burger.isActive" :products="products" :productsLoading="productsLoading" :bouquets="bouquets" :bouquetsLoading="bouquetsLoading" />
  </header>
</template>

<style>
.nav_link::after {
  border-bottom: 1px solid;
  color: #f16e36;
  bottom: 0;
  content: "";
  position: absolute;
  right: 0;
  transition: width .4s linear 0s;
  width: 0;
}
.nav_link:hover::after {
  left: 0;
  width: 100%;
}
.nav__section::after {
  border-bottom: 1px solid #fe7250;
  bottom: 0;
  content: "";
  position: absolute;
  left: 0;
  transition: width .4s linear 0s;
  width: 50%;
}
.scroll-fix {
  -webkit-animation: mations 1s ease;
  animation: mations 1s ease
} 
@keyframes mations {
  from {
    transform: translateY(-100%)
  }
  to {
    transform: translateY(0)
  }
}
</style>