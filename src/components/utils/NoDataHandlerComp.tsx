'use client';

import { localStorageUtil } from '@/utils/storageUtil';
import { notFound } from 'next/navigation';
import { useEffect } from 'react';

const NoDataHandler = () => {
  useEffect(() => {
    const data = localStorageUtil.getArray('cartItems').length || undefined;

    if (!data) notFound();
  }, []);

  return <></>;
};

export default NoDataHandler;
