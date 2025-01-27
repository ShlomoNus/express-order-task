import { Handler } from 'sn-types-backend';
import { IOrder } from '@src/types';
import { CONFIG } from '@src/config';
import { OrderRepository } from '@repository/order';

const { BASE_URL, DB_NAME } = CONFIG;

export const saveOrder: Handler<IOrder> = async (req, res) => {
    const { saveOrder } = new OrderRepository({
        baseUrl: BASE_URL,
        dbName: DB_NAME,
    });
    const result = await saveOrder({ ...req.body });

    return res.status(result.statusCode).send(result);
};
