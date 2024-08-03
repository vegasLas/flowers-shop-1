<script setup lang="ts">
import { defineProps } from 'vue';

interface Product {
  productid: string;
  productname: string;
  price: number;
}

interface Bouquet {
  bouquetid: string;
  bouquetname: string;
  price: number;
}

interface Props {
  products: Product[];
  bouquets: Bouquet[];
  productsLoading: boolean;
  bouquetsLoading: boolean;
}

defineProps<Props>()
</script>

<template>
  <ul tabindex="0" class="nav-list">
    <li><NuxtLink to="/" class="nav-link">Домой</NuxtLink></li>
    <li>
      <a class="nav-link">Продукты</a>
      <div class="dropdown">
        <ul class="dropdown-menu">
          <li v-if="productsLoading">Загрузка...</li>
          <li v-for="product in products" :key="product.productid" class="dropdown-item">
            <NuxtLink class="dropdown-link" :to="`/products/${product.productid}`">
              {{ product.productname }} - {{ product.price }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </li>
    <li>
      <a class="nav-link">Букеты</a>
      <div class="dropdown">
        <ul class="dropdown-menu">
          <li v-if="bouquetsLoading">Загрузка...</li>
          <li v-for="bouquet in bouquets" :key="bouquet.bouquetid" class="dropdown-item">
            <NuxtLink class="dropdown-link" :to="`/bouquets/${bouquet.bouquetid}`">
              {{ bouquet.bouquetname }} - {{ bouquet.price }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </li>
    <li><a class="nav-link">Рекомендация</a></li>
  </ul>
</template>

<style scoped>
.nav-list {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  justify-content: center;
}

.nav-link {
  position: relative;
  cursor: pointer;
}

.nav-link::after {
  border-bottom: 1px solid;
  color: #f16e36;
  bottom: 0;
  content: "";
  position: absolute;
  right: 0;
  transition: width .4s linear;
  width: 0;
}

.nav-link:hover::after {
  left: 0;
  width: 100%;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  display: flex;
  z-index: 2;
  gap: 1.25rem;
  padding: 2rem;
  position: absolute;
  top: 2.5rem;
  opacity: 0;
  visibility: hidden;
  transition: top .4s ease, opacity .4s ease, visibility .4s ease;
  width: max-content;
  border-radius: 0.5rem;
  background-color: var(--fallback-b1, oklch(var(--b1) / 1));
  flex-direction: column;
}

.dropdown:hover .dropdown-menu {
  top: 100%;
  opacity: 1;
  visibility: visible;
}

.dropdown-item {
  padding: 0.25rem 0;
}

.dropdown-link {
  transition: color .4s ease;
  cursor: pointer;
}

.dropdown-link:hover {
  color: #fe7250;
}
</style>