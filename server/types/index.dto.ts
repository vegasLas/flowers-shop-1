export interface AddAdmin {
	adminid: number;
	username: string;
	email: string;
	password: string;
	fullname: string;
	createdat: Date;
	orders: AddOrder[];
	adminactions: AddAdminAction[];
	blogs: AddBlog[];
  }
  
export interface AddCategory {
	categoryid: number;
	categoryname: string;
	products: AddProduct[];
  }
  
export interface AddProduct {
	productid: number;
	productname: string;
	description?: string;
	price: number;
	stock: number;
	createdat: Date;
	categoryid: number;
	category: AddCategory;
	productimages: AddProductImage[];
	orderitems: AddOrderItem[];
	bouquetproducts: AddBouquetProduct[];
	adminactions: AddAdminAction[];
  }
  
export interface AddProductImage {
	imageid: number;
	productid: number;
	imageurl: string;
	product: AddProduct;
  }
  
export interface AddBouquet {
	bouquetid: number;
	bouquetname: string;
	description?: string;
	price: number;
	stock: number;
	createdat: Date;
	bouquetimages: AddBouquetImage[];
	bouquetproducts: AddBouquetProduct[];
	orderitems: AddOrderItem[];
	adminactions: AddAdminAction[];
  }
  
export interface AddBouquetProduct {
	bouquetproductid: number;
	bouquetid: number;
	productid: number;
	quantity: number;
	bouquet: AddBouquet;
	product: AddProduct;
  }
  
export interface AddBouquetImage {
	imageid: number;
	bouquetid: number;
	imageurl: string;
	bouquet: AddBouquet;
  }
  
export interface AddOrder {
	orderid: number;
	adminid: number;
	totalamount: number;
	status: string;
	createdat: Date;
	admin: AddAdmin;
	orderitems: AddOrderItem[];
  }
  
export interface AddOrderItem {
	orderitemid: number;
	orderid: number;
	productid?: number;
	bouquetid?: number;
	quantity: number;
	price: number;
	order: AddOrder;
	product?: AddProduct;
	bouquet?: AddBouquet;
  }
  
export interface AddAdminAction {
	actionid: number;
	adminid: number;
	actiontype: string;
	productid?: number;
	bouquetid?: number;
	actiontimestamp: Date;
	admin: AddAdmin;
	product?: AddProduct;
	bouquet?: AddBouquet;
  }
  
export interface AddBlog {
	blogid: number;
	title: string;
	content: string;
	authorid: number;
	createdat: Date;
	updatedat: Date;
	author: AddAdmin;
  }
  