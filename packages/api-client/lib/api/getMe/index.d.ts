import { CustomQueryFn } from '../../index';
export interface GetMeParams {
    customer?: boolean;
}
export interface OrdersData {
    me: any;
}
declare const getMe: ({ config, client }: {
    config: any;
    client: any;
}, params?: GetMeParams, customQueryFn?: CustomQueryFn) => Promise<{}>;
export default getMe;
