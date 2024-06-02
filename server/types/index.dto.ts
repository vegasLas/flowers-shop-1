export interface AdminResource {
	adminid: number;
	username: string;
	email: string;
	passwordhash: string;
	fullname: string;
	createdat: Date;
	orders: OrderResource[];
	adminactions: AdminActionResource[];
	blogs: BlogResource[];
  }
export interface CreateAdminDto {
	username: string,
	password: string,
	email: string,
	fullname: string
}
export interface CategoryResource {
	categoryid: number;
	categoryname: string;
	products: ProductResource[];
  }
export interface CreateCategoryDto {
	categoryname: string;
}
  
export interface ProductResource {
	productid: number;
	productname: string;
	description?: string;
	price: number;
	stock: number;
	createdat: Date;
	categoryid: number;
	category: CategoryResource;
	productimages: ProductImage[];
	orderitems: OrderItemResource[];
	bouquetproducts: BouquetProductResource[];
	adminactions: AdminActionResource[];
  }
export interface CreateProductDto {
	productname: string;
	description?: string;
	price: number;
	stock: number;
	categoryid: number;
	productimages: {imageurl: string}[];
  }
  
export interface ProductImage {
	imageid: number;
	productid: number;
	imageurl: string;
	product: ProductResource;
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
  export interface CreateBouquetDto {
	bouquetproducts: { quantity: number, productid: number}[]
	bouquetimages: {imageurl: string}[]
	bouquetname: string
	description: string
	price: number
	stock: number
  }
  
export interface BouquetProductResource {
	bouquetproductid: number;
	bouquetid: number;
	productid: number;
	quantity: number;
	bouquet: BouquetResource;
	product: ProductResource;
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
	totalamount: number;
	status: string;
	createdat: Date;
	admin: AdminResource;
	orderitems: OrderItemResource[];
  }
  
export interface CreateOrderDto {
	adminid: number;
	totalamount: number;
	status: string;
	createdat: Date;
	orderitems: {productid?: number, bouquetid?: number, quantity: number, price: number}[];
  }
export interface OrderItemResource {
	orderitemid: number;
	orderid: number;
	productid?: number;
	bouquetid?: number;
	quantity: number;
	price: number;
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
	actiontimestamp: Date;
	admin: AdminResource;
	product?: ProductResource;
	bouquet?: BouquetImageResource;
  }
export interface CreateAdminActionDto {
	adminid: number;
	actiontype: string;
	productid?: number;
	bouquetid?: number;
  }
export interface BlogResource {
	blogid: number;
	title: string;
	content: string;
	authorid: number;
	createdat: Date;
	updatedat: Date;
	author: AdminResource;
  }

export interface CreateBlogDto {
	title: string;
	content: string;
	authorid: number;
	updatedat: Date;
  }
  