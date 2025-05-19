'use client';

import { mergeClassNames } from '@/utils/domUtil';
import Image from 'next/image';
import { motion } from 'motion/react';

const TitleComp = () => {
  return (
    <div className="w-full flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
        }}
        className={mergeClassNames('flex justify-between items-center p-5')}
      >
        <div className="flex flex-col justify-center items-start gap-1 mt-4 text-fontColor">
          <p className="text-xl">오프라인 장보기</p>
          <div className="flex text-3xl gap-1">
            <p>맞춤 서비스,</p>
            <p className="text-pointColor">장비서</p>
          </div>
        </div>
        <Image src={'/images/logo.png'} width={80} height={40} alt="logo" />
      </motion.div>
      <div className="relative px-5 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.2,
            scale: { type: 'spring' },
          }}
        >
          <Image src={'/images/cartItem1.png'} className="shadow-item rounded-xl" width={260} height={40} alt="item1" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.4,
            scale: { type: 'spring' },
          }}
          className="absolute top-12 right-5"
        >
          <Image src={'/images/cartItem2.png'} className="shadow-item rounded-xl" width={260} height={40} alt="item2" />
        </motion.div>
      </div>
    </div>
  );
};

export default TitleComp;
