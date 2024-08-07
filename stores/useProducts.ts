import { FetchProductsParams } from '#build/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { productService } from '~/services/productService';
import { ProductResource } from '../types/index';
// import { productService } from '../services/productService';
export const useProducts = defineStore('products', () => {
  const activeColumn = ref<2 | 3 | 4 | 5>(4);
  const columns = ref([2, 3, 4, 5]);
  const proportions = {
    2: '50%',
    3: '33%',
    4: '25%',
    5: '20%',
  };
  const sorts = ref(['Выбрать', 'Лучшие продажи', 'А-Я', 'Цена, макс. - мин.', 'Цена, мин. - макс.']);
  const selectedSort = ref('Выбрать');
  const selectedPage = ref(1);
  const products = ref<Omit<ProductResource, 'orderitems' | 'bouquetproducts' | 'adminactions'>[]>([]);
  const totalPages = ref(0);
  const isLoading = ref(false);

  const fetchProducts = async (params: FetchProductsParams) => {
    isLoading.value = true;
    try {
      const sortFieldMapping: Record<string, { [key: string]: 'asc' | 'desc' }> = {
        'Лучшие продажи': { orderItemCount: 'desc' },
        'А-Я': { productname: 'asc' },
        'Цена, макс. - мин.': { price: 'desc' },
        'Цена, мин. - макс.': { price: 'asc' },
      };

      const selectedSortField = sortFieldMapping[selectedSort.value] || {};
      const response = await productService.getProducts({
        page: selectedPage.value,
        sortFields: selectedSortField,
		...params
      });
      products.value = response.data;
      totalPages.value = response._embedded.totalPages;
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    activeColumn,
    columns,
    proportions,
    sorts,
    selectedSort,
    selectedPage,
    products,
    totalPages,
    isLoading,
    fetchProducts,
    // goods: computed(() => products.value.reduce<typeof products.value[number][][]>((prev, product, index) => {
    //   if (index % 12 === 0) {
    //     prev.push([product]);
    //   } else {
    //     prev.at(-1)?.push(product);
    //   }
    //   return prev;
    // }, [])),
  };
});