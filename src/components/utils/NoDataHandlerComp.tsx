'use client';

import { getCartById } from '@/actions/carts/cartActions';
import { notFound, useParams } from 'next/navigation';
import { useEffect } from 'react';

const NoDataHandler = () => {
  const params = useParams();
  const cartId = Number(params?.id);

  useEffect(() => {
    if (!cartId || isNaN(cartId)) {
      notFound();
    }

    const verify = async () => {
      try {
        const cart = await getCartById(cartId);
        if (!cart) notFound();
      } catch {
        notFound();
      }
    };

    verify();
  }, [cartId]);

  return <></>;
};

export default NoDataHandler;
