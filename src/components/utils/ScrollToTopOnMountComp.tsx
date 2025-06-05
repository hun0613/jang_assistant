'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const ScrollToTopOnMountComp = () => {
  const pathName = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [pathName]);

  return <></>;
};

export default ScrollToTopOnMountComp;
