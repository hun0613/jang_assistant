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
      // 뒤로가기, 앞으로 가기
      window.addEventListener('popstate', clearHash);

      // 초기 마운트시 실행
      clearHash();

      return () => {
        window.removeEventListener('popstate', clearHash);
      };
    }
  }, []);

  return <></>;
};

export default RouteHandler;
