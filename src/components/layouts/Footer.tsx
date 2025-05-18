import { mergeClassNames } from '@/utils/domUtil';

const Footer = () => {
  return (
    <div className={mergeClassNames('bg-pointColor w-full p-3 text-xs text-white flex absolute bottom-0 justify-center')}>
      Copyright 2025. 장비서. ALL RIGHTS RESERVED
    </div>
  );
};

export default Footer;
