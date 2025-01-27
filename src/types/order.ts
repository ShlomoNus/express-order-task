export interface IProductItem {
    name: string;
    quantity: number;
}

export interface IProductCategory {
    category: string;
    items: IProductItem[];
}

export interface IOrder {
    email: string;
    firstName: string;
    lastName: string;
    products: IProductCategory[];
}
