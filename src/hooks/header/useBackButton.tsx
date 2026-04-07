'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

type BackButtonContextType = {
  hidden: boolean;
  hideBackButton: () => void;
  showBackButton: () => void;
};

const BackButtonContext = createContext<BackButtonContextType>({
  hidden: false,
  hideBackButton: () => {},
  showBackButton: () => {},
});

export const BackButtonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hidden, setHidden] = useState(false);

  const hideBackButton = useCallback(() => setHidden(true), []);
  const showBackButton = useCallback(() => setHidden(false), []);

  const value = useMemo(() => ({ hidden, hideBackButton, showBackButton }), [hidden, hideBackButton, showBackButton]);

  return <BackButtonContext.Provider value={value}>{children}</BackButtonContext.Provider>;
};

const useBackButton = () => useContext(BackButtonContext);

export default useBackButton;
