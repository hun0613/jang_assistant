'use server';

import { supabase } from '@/utils/supabaseUtil';

export const createSession = async () => {
  const { data, error } = await supabase.from('sessions').insert({}).select().single();

  if (error) throw new Error(error.message);
  return data;
};

export const getSession = async (sessionId: string) => {
  const { data, error } = await supabase.from('sessions').select('*').eq('id', sessionId).single();

  if (error) throw new Error(error.message);
  return data;
};
