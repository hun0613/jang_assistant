'use client';

import BackButtonAtom from '@/atoms/buttons/BackButtonAtom';
import { mergeClassNames } from '@/utils/domUtil';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const showBackButton = pathname !== '/';

  return (
    <div className={mergeClassNames('sticky top-0 px-5 z-50 py-3 w-full bg-white')}>
      <div className="relative flex justify-center items-center">
        {showBackButton && <BackButtonAtom className="absolute left-0" />}
        <Image src={'/images/logoWithText.png'} width={100} height={40} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
