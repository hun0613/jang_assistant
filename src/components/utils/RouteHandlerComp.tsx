'use client';

import { getWindow } from '@/utils/domUtil';
import { useEffect } from 'react';

const RouteHandler = (): JSX.Element => {
  useEffect(() => {
    const window = getWindow();
    if (window) {
      const clearHash = (): void => {
        const url = new URL(getWindow()?.location.href || '');
        if (url.hash) {
          window.history.back();
        }
      };
      // 해시변경
      window.addEventListener('hashchange', clearHash);

      // 초기 마운트시 실행
      clearHash();

      return () => {
        window.removeEventListener('hashchange', clearHash);
      };
    }
  }, []);

  return <></>;
};

export default RouteHandler;
