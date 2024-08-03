<script setup lang="ts">
import { ref } from 'vue';

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
  isBurgerActive: boolean;
  products: Product[];
  productsLoading: boolean;
  bouquets: Bouquet[];
  bouquetsLoading: boolean;
}

const searchQuery = ref('');
defineProps<Props>();
</script>

<template>
  <div :class="['search-container', isBurgerActive && 'search-container-active']">
    <div tabindex="0" class="search-content">
      <div v-if="products.length || bouquets.length">
        <div tabindex="0" class="collapse" :class="[searchQuery ? 'collapse-open' : '']">
          <input type="checkbox" />
          <div class="collapse-title">
            Продукты и Букеты
          </div>
          <div class="collapse-content">
            <div v-if="productsLoading || bouquetsLoading">Загрузка...</div>
            <div v-for="product in products" :key="product.productid" class="item-link">
              <NuxtLink :to="`/products/${product.productid}`">{{ product.productname }} - {{ product.price }}</NuxtLink>
            </div>
            <div v-for="bouquet in bouquets" :key="bouquet.bouquetid" class="item-link">
              <NuxtLink :to="`/bouquets/${bouquet.bouquetid}`">{{ bouquet.bouquetname }} - {{ bouquet.price }}</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-container {
  transition: all 0.3s ease-linear;
  background-color: var(--fallback-b1, oklch(var(--b1) / 1));
  box-shadow: var(--shadow);
  position: absolute;
  height: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 16px;
  visibility: hidden;
  opacity: 0;
}

.search-container-active {
  top: 64px;
  height: 94vh;
  visibility: visible;
  z-index: 50;
  opacity: 1;
}

.search-content {
  display: flex;
  flex-direction: column;
}

.collapse {
  border: 1px solid var(--base-300);
  border-bottom: transparent;
  border-radius: 0;
}

.collapse-open .collapse-content {
  transition: all 0.3s ease;
  overflow: auto;
  padding: 0;
}

.collapse-title {
  font-weight: medium;
}

.item-link {
  padding: 0.25rem 0;
  border: none;
  background-color: transparent;
  border-radius: 0;
  width: 100%;
}
</style>