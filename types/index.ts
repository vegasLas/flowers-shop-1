export interface AdminResource {
	adminid: number;
	username: string;
	email: string;
	fullname: string;
	createdat: Date;
	orders: OrderResource[];
	adminactions: AdminActionResource[];
	blogs: BlogResource[];
  }


export interface CategoryResource {
	categoryid: number;
	categoryname: string;
	products: ProductResource[];
  }

  
export interface ProductResource {
	productid: number;
	productname: string;
	description?: string;
	price: number;
	stock: number;
	createdat: Date;
	categoryid?: number;
	category?: CategoryResource;
	productimages: ProductImage[];
	orderitems: OrderItemResource[];
	bouquetproducts: BouquetProductResource[];
	adminactions: AdminActionResource[];
  }


export interface ProductImage {
	imageid: number;
	productid: number;
	imageurl: string;
	product: ProductResource;
  }
export interface BlogImage {
	imageid: number;
	blogid:    number;
	imageurl:  string;
	blog:  BlogResource;
}
export interface BouquetResource {
	bouquetid: number;
	bouquetname: string;
	description?: string;
	price: number;
	stock: number;
	createdat: Date;
	bouquetimages: BouquetImageResource[];
	bouquetproducts: BouquetProductResource[];
	orderitems: OrderItemResource[];
	adminactions: AdminActionResource[];
  }

  
export interface BouquetProductResource {
	bouquetproductid: number;
	bouquetid: number;
	productid?: number;
	productname: string;
	quantity: number;
	bouquet: BouquetResource;
	product?: ProductResource;
  }
  
export interface BouquetImageResource {
	imageid: number;
	bouquetid: number;
	imageurl: string;
	bouquet: BouquetImageResource;
  }
  
export interface OrderResource {
	orderid: number;
	adminid: number;
	adminname: string;
	totalamount: number;
	status: string;
	createdat: Date;
	updatedat: Date;
	admin?: AdminResource;
	orderitems: OrderItemResource[];
  }
  
export interface OrderItemResource {
	orderitemid: number;
	orderid: number;
	productid?: number;
	bouquetid?: number;
	productname?: string;
	bouquetname?: string;
	quantity: number;
	price: number;
	updatedat: Date;
	order: OrderResource;
	product?: ProductResource;
	bouquet?: BouquetImageResource;
  }
  
  export interface AdminActionResource {
	actionid: number;
	adminid: number;
	actiontype: string;
	productid?: number;
	bouquetid?: number;
	productname?: string;
	bouquetname?: string;
	actiontimestamp: Date;
	admin: AdminResource;
	product?: ProductResource;
	bouquet?: BouquetResource;
  }
  

export interface BlogResource {
	blogid: number;
	title: string;
	content: string;
	createdat: Date;
	updatedat: Date | null;
	authorname: string;
	images: BlogImage[]
  }


export interface EventImage {
	id: number;
	imageurl: string;
	eventid: number;
	createdat: string;
	updatedat?: string;
  }
  
  export interface EventProduct {
	id: number;
	eventid: number;
	productid: number;
	createdat: string;
	updatedat?: string;
  }
  
  export interface EventResource {
	id: number;
	name: string;
	description?: string;
	date: string;
	adminname: string;
	createdat: Date;
	updatedat?: Date;
	images: EventImage[];
	products: EventProduct[];
  }


  export interface FetchProductsParams {
	page?: number;
	sortFields?: {
	price?: 'asc' | 'desc';
	productname?: 'asc' | 'desc';
	createdat?: 'asc' | 'desc';
	updatedat?: 'asc' | 'desc';
	orderItemCount?: 'asc' | 'desc';
	};
	minPrice?: number;
	maxPrice?: number;
	searchQuery?: string;
	categoryid?: number;
	stock?: number;
}

export interface FetchBouquetsParams {
	page?: number;
	sortFields?: {
	  price?: 'asc' | 'desc';
	  bouquetname?: 'asc' | 'desc';
	  createdat?: 'asc' | 'desc';
	  updatedat?: 'asc' | 'desc';
	  orderItemCount?: 'asc' | 'desc';
	};
	minPrice?: number;
	maxPrice?: number;
	searchQuery?: string;
	categoryid?: number;
	stock?: number;
  }