'use server';

import { supabase } from '@/utils/supabaseUtil';
import { CART_STATUS } from '@/enums/carts/cartEnums';

export const createCart = async (sessionId: string, title: string, memo?: string) => {
  const { data, error } = await supabase
    .from('carts')
    .insert({
      session_id: sessionId,
      title,
      memo: memo || null,
      status: CART_STATUS.CREATED,
    })
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
};

export const getCartById = async (cartId: number) => {
  const { data, error } = await supabase.from('carts').select('*').eq('id', cartId).single();

  if (error) throw new Error(error.message);
  return data;
};

export const updateCart = async (cartId: number, updates: { title?: string; memo?: string; status?: CART_STATUS }) => {
  const { data, error } = await supabase
    .from('carts')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', cartId)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
};
