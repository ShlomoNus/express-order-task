import { StatusCodes } from 'http-status-codes';
import { Result } from 'sn-types-general';
import { convertType } from '@utils/types';
import { mongodbConnectionWrapper } from '@utils/db';
import { IOrder } from '@src/types';
import order from '@models/order';

class OrderRepository {
    private url: string;

    constructor({ baseUrl, dbName }: { baseUrl: string; dbName: string }) {
        this.url = baseUrl + '/' + dbName;
    }

    private async createOrderCB(newOrder: IOrder): Promise<Result<string>> {
        let result: Result<string>;

        try {
            const createdOrder = new order({ ...newOrder });

            await createdOrder.save();

            result = {
                status: true,
                payload: 'order created',
                statusCode: StatusCodes.CREATED,
            };
        } catch (error: unknown) {
            const typedError = convertType<Error>(error);

            result = {
                status: false,
                message: typedError.message,
                statusCode: StatusCodes.NOT_FOUND,
            };
        }

        return result;
    }

    get saveOrder() {
        return mongodbConnectionWrapper({ url: this.url, cb: this.createOrderCB.bind(this) });
    }
}

export { OrderRepository };
