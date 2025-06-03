import { useEffect, useRef, useState } from 'react';

const useSticky = () => {
  const stickyTargetRef = useRef<HTMLDivElement | null>(null);

  const [onSticky, setOnSticky] = useState(false);

  const handleScroll = () => {
    if (!!stickyTargetRef.current) {
      const appliedTopValueOnTargetRef = Number(getComputedStyle(stickyTargetRef.current).top.replace('px', ''));
      const { top: currentTopValue } = stickyTargetRef.current.getBoundingClientRect();

      if (appliedTopValueOnTargetRef >= currentTopValue) {
        setOnSticky(true);
      } else {
        setOnSticky(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    stickyTargetRef,
    onSticky,
  };
};

export default useSticky;
