import { saveOrder } from '@handlers/order';
import { applyRoutes } from '@utils/backend';
import { Router } from 'express';
import { Route } from 'sn-types-backend';

const orderRouter = Router();

export const routes: Route[] = [{ path: '/login', method: 'post', handler: saveOrder }];

applyRoutes({ app: orderRouter, routes });

export { orderRouter };
