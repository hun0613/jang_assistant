'use client';

import { mergeClassNames } from '@/utils/domUtil';
import { useEffect, useState } from 'react';
import Image from 'next/image';

type ProgressBarAtomProps = {
  rate: number;
  animationDuration?: number; // in milliseconds
  showIcon?: boolean;
  showRate?: boolean;
} & JSX.IntrinsicElements['div'];

const ProgressBarAtom: React.FC<ProgressBarAtomProps> = (props) => {
  const { rate, animationDuration, showIcon = false, showRate = false, className, children, ...rest } = props;

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(rate);
  }, [rate]);

  return (
    <div className={mergeClassNames('w-full relative', { 'mt-7': showRate }, className)} {...rest}>
      <div className="w-full rounded-full bg-grayBtnColor/30 h-4"></div>
      <div
        className={mergeClassNames('absolute top-0 left-0 rounded-full bg-pointColor h-4 w-0')}
        style={{
          width: `${width}%`,
          transitionDuration: `${animationDuration || 800}ms`,
          transitionTimingFunction: !!animationDuration ? 'linear' : 'ease-in-out',
        }}
      >
        <div className="relative w-full h-full flex justify-center items-center">
          <div
            className={mergeClassNames('w-fit h-fit absolute -right-4 -top-9 flex flex-col justify-center items-center', {
              '-top-[8px]': !showRate,
            })}
          >
            {showRate && <div className="w-fit text-pointColor text-lg text-center">{`${rate}%`}</div>}
            {showIcon && (
              <div className="w-8 h-8 p-1  rounded-full aspect-square shadow-icon bg-white flex justify-center items-center">
                <Image src={'/images/logo.png'} width={20} height={40} alt="logo" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarAtom;
