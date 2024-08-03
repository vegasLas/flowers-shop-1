import { FetchBouquetsParams } from '#build/types';
import axiosClient from './apiClient';
import { buildQueryParams } from '~/utils/buildQueryParams';

class BouquetService {
  async getBouquets(params: FetchBouquetsParams) {
    const queryParams = buildQueryParams(params)
    const response = await axiosClient().get(`/bouquets?${queryParams.toString()}`);
    return response.data;
  }
}

export const bouquetService = new BouquetService();