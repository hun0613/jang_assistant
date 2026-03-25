import { CART_ITEM_STATUS, CART_STATUS } from '@/enums/carts/cartEnums';

export type CartType = {
  id: number;
  session_id: string;
  title: string;
  memo?: string;
  status: CART_STATUS;
  created_at: string;
  updated_at: string;
};

export type CartItemType = {
  id: number;
  cart_id?: number;
  name: string;
  quantity: number;
  price?: number;
  status: CART_ITEM_STATUS;
  created_at?: string;
};
