import { Schema, model } from 'mongoose';
import { IOrder, IProductCategory, IProductItem } from '@src/types';
import { AnyType } from 'sn-types-general';

const productItemSchema = new Schema<IProductItem>({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
});

const productCategorySchema = new Schema<IProductCategory>({
    category: { type: String, required: true },
    items: [productItemSchema],
});

const orderSchema = new Schema<IOrder>({
    email: {
        type: String,
        required: true,
        lowercase: true,
        validate: {
            validator: function (email: string): boolean {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            },
            message: (props: AnyType) => `${props.value} is not a valid email address!`,
        },
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    products: [productCategorySchema],
});

const order = model<IOrder>('Order', orderSchema);

export default order;
