// utils/apiHelpers.ts
export interface FetchParams {
	page?: number;
	sortFields?: { [key: string]: 'asc' | 'desc' };
	minPrice?: number;
	maxPrice?: number;
	searchQuery?: string;
	categoryid?: number;
	stock?: number;
  }
  
export function buildQueryParams(params: FetchParams): URLSearchParams {
	const { page, sortFields, minPrice, maxPrice, searchQuery, categoryid, stock } = params;
	const queryParams = new URLSearchParams();
  
	if (page) queryParams.append('page', page.toString());
  
	if (sortFields) {
	  Object.entries(sortFields).forEach(([field, order]) => {
		if (order) {
		  queryParams.append('sortFields', `${field}:${order}`);
		}
	  });
	}
  
	if (minPrice !== undefined) queryParams.append('minPrice', minPrice.toString());
	if (maxPrice !== undefined) queryParams.append('maxPrice', maxPrice.toString());
	if (searchQuery) queryParams.append('searchQuery', searchQuery);
	if (categoryid !== undefined) queryParams.append('categoryid', categoryid.toString());
	if (stock !== undefined) queryParams.append('stock', stock.toString());
  
	return queryParams;
  }