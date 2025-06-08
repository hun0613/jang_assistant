import { CART_ITEM_STATUS } from '@/enums/carts/cartEnums';

export type CartItemType = {
  itemId: number;
  name: string;
  quantity: number;
  price?: number;
  status: CART_ITEM_STATUS;
};
