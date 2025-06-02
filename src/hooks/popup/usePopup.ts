'use client';

import { getWindow } from '@/utils/domUtil';
import { useCallback, useEffect, useState } from 'react';

export type UsePopupParams = {
  id?: string;
  open?: boolean;
};

const usePopup = (options: UsePopupParams = { open: false }): { open: boolean; handleOpen: () => void; handleClose: () => void } => {
  const popupId = options.id || '';
  const [open, setOpen] = useState(options.open);

  const handleOpen = (): void => {
    const window = getWindow();

    if (!open) {
      if (window) {
        const url = new URL(window.location.href || '');
        window.document.body.style.overflow = 'hidden';
        url.hash = `${popupId}`;
        window.history.pushState(window.history.state, '', url);
        // 해시가 바뀔 때마다 동일한 리스너가 중복 등록되는 것을 방지하기 위한 로직
        window.removeEventListener('hashchange', handleHashChange);
        window.addEventListener('hashchange', handleHashChange);
      }
      setOpen(true);
    }
  };

  // 다른 모달이 동시에 켜지는 걸 방지하기 위해
  const handleHashChange = useCallback(
    (e: any) => {
      const url = new URL(e.oldURL || '');
      if (url.hash === `#${popupId}`) {
        // handleClose 이후, 해당 모달에 대한 이벤트 리스너를 제거
        getWindow()?.removeEventListener('hashchange', handleHashChange);
        setOpen(false);
      }
    },
    [popupId],
  );

  const handleClose = (): void => {
    const window = getWindow();

    if (open) {
      if (window) {
        window.document.body.style.overflow = '';
        window.history.back();
      }
      // setOpen(false);
    }
  };

  useEffect(() => {
    // 모달에서 다른 페이지로 이동할 때, usePopup이 unmount되면서 모달을 닫고, overflow hidden값을 제거하기 위한 로직
    return () => {
      setOpen(false);
      getWindow()?.removeEventListener('hashchange', handleHashChange);
      window.document.body.style.overflow = '';
    };
  }, []);

  return {
    open: !!open,
    handleOpen,
    handleClose,
  };
};

export default usePopup;
