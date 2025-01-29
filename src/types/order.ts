export interface IProductItem {
    name: string;
    amount: number;
}

export interface IOrder {
    email: string;
    firstName: string;
    lastName: string;
    products: IProductItem[];
}
