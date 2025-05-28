import { getWindow } from '@/utils/domUtil';
import { useCallback, useState } from 'react';

export type UsePopupParams = {
  id?: string;
  open?: boolean;
};

const usePopup = (options: UsePopupParams = { open: false }): { open: boolean; handleOpen: () => void; handleClose: () => void } => {
  const popupId = options.id || '';
  const [open, setOpen] = useState(options.open);

  const handleOpen = (): void => {
    const window = getWindow();

    if (!open && !!window) {
      const url = new URL(window.location.href || '');

      window.document.body.style.overflow = 'hidden';

      url.hash = `${popupId}`;
      getWindow()?.history.pushState(getWindow()?.history.state, '', url);
      getWindow()?.removeEventListener('hashchange', handleHashChange);
      getWindow()?.addEventListener('hashchange', handleHashChange);
      setOpen(true);
    }
  };

  const handleHashChange = useCallback(
    (e: any) => {
      const url = new URL(e.oldURL || '');
      if (url.hash === `#${popupId}`) {
        getWindow()?.removeEventListener('hashchange', handleHashChange);
        setOpen(false);
      }
    },
    [popupId],
  );

  const handleClose = (): void => {
    const window = getWindow();
    if (window && open) {
      window.document.body.style.overflow = '';
      window.history.back();
    }
  };

  return {
    open: !!open,
    handleOpen,
    handleClose,
  };
};

export default usePopup;
