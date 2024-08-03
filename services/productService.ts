import axiosClient from "./apiClient";
import { FetchProductsParams } from '#build/types';
import { buildQueryParams } from "~/utils/buildQueryParams";

// services/productService.js
class ProductService {
  async getProducts(params: FetchProductsParams) {
    const queryParams = buildQueryParams(params)
    const response = await axiosClient().get(`/products?${queryParams.toString()}`);
    return response.data;
  }
}

export const productService = new ProductService();