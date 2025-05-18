import { mergeClassNames } from '@/utils/domUtil';
import Image from 'next/image';

const Header = () => {
  return (
    <div className={mergeClassNames('flex justify-between px-5 py-3 items-center w-full bg-white')}>
      <Image src={'/images/logoWithText.png'} width={90} height={40} alt="logo" />
    </div>
  );
};

export default Header;
