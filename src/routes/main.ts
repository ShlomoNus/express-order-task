import { orderRouter } from './order';
import { Route } from 'sn-types-backend';

export const routes: Route[] = [
    {
        method: 'use',
        path: '/orders',
        middleware: [],
        handler: orderRouter,
    },
];
