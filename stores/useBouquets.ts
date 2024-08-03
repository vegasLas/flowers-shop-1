import { BouquetResource, FetchBouquetsParams } from '#build/types';
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { bouquetService } from '~/services/bouquetService';
export const useBouquets = defineStore('bouquets', () => {
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
  const bouquets = ref<Omit<BouquetResource, 'orderitems' | 'adminactions'>[]>([]);
  const totalPages = ref(0);
  const isLoading = ref(false);

  const fetchBouquets = async (params: FetchBouquetsParams) => {
    isLoading.value = true;
    try {
      const sortFieldMapping: Record<string, { [key: string]: 'asc' | 'desc' }> = {
        'Лучшие продажи': { orderItemCount: 'desc' },
        'А-Я': { bouquetname: 'asc' },
        'Цена, макс. - мин.': { price: 'desc' },
        'Цена, мин. - макс.': { price: 'asc' },
      };

      const selectedSortField = sortFieldMapping[selectedSort.value] || {};

      const response = await bouquetService.getBouquets({
        page: selectedPage.value,
        sortFields: selectedSortField,
		    ...params
      });
      bouquets.value = response.data;
      totalPages.value = response._embedded.totalPages;
    } catch (error) {
      console.error('Failed to fetch bouquets:', error);
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
    bouquets,
    totalPages,
    isLoading,
    fetchBouquets,
  };
});