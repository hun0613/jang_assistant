'use server';

import { supabase } from '@/utils/supabaseUtil';
import { CART_ITEM_STATUS } from '@/enums/carts/cartEnums';

export const createCartItem = async (cartId: number, name: string, quantity: number) => {
  const { data, error } = await supabase
    .from('cart_items')
    .insert({
      cart_id: cartId,
      name,
      quantity,
      status: CART_ITEM_STATUS.IN_LIST,
    })
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
};

export const getCartItemsByCartId = async (cartId: number) => {
  const { data, error } = await supabase.from('cart_items').select('*').eq('cart_id', cartId).order('created_at', { ascending: true });

  if (error) throw new Error(error.message);
  return data;
};

export const updateCartItem = async (
  cartItemId: number,
  updates: { quantity?: number; price?: number; status?: CART_ITEM_STATUS }
) => {
  const { data, error } = await supabase.from('cart_items').update(updates).eq('id', cartItemId).select().single();

  if (error) throw new Error(error.message);
  return data;
};

export const deleteCartItem = async (cartItemId: number) => {
  const { error } = await supabase.from('cart_items').delete().eq('id', cartItemId);

  if (error) throw new Error(error.message);
};
