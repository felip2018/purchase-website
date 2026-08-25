import type {IProduct} from "./IProduct.ts";
import type {ICreditCardInfo} from "./ICreditCardInfo.ts";
import type {IDeliveryAddress} from "./IDeliveryAddress.ts";

export interface IRequestPurchase {
    id: number;
    product: IProduct;
    units: number;
    total: number;
    creditCard: ICreditCardInfo;
    deliveryAddress: IDeliveryAddress;
}
