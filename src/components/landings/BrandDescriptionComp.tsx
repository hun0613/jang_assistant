'use client';

import { mergeClassNames } from '@/utils/domUtil';
import Image from 'next/image';
import { motion } from 'motion/react';

export type BrandDescriptionCompProps = {
  title: string;
  subTitle: string;
  src: string;
  description: string;
  active?: boolean;
} & JSX.IntrinsicElements['div'];

const BrandDescriptionComp: React.FC<BrandDescriptionCompProps> = (props) => {
  const { title, subTitle, src, description, active = true, className, ...rest } = props;

  return (
    <motion.div className={mergeClassNames('relative flex flex-col justify-center gap-10 items-center py-16', className)}>
      <div className="flex flex-col justify-center items-center gap-2">
        {/* subTitle */}
        <motion.p
          viewport={{ amount: 0.1 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            y: { type: 'spring' },
          }}
          className="text-lg"
        >
          {subTitle}
        </motion.p>
        {/* title */}
        <motion.div
          viewport={{ amount: 0.1 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            y: { type: 'spring' },
          }}
          className="relative px-1 flex justify-center items-center"
        >
          <p className="text-2xl z-10">{title}</p>
          <div className="w-full absolute bottom-0.5 h-3 bg-pointColor/50"></div>
        </motion.div>
      </div>
      {/* Image */}
      <motion.div
        viewport={{ amount: 0.1 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.5,
          y: { type: 'spring' },
        }}
      >
        <Image src={src} width={230} height={700} alt="cartExample" className="shadow-item rounded-xl" />
      </motion.div>
      {/* description */}
      <motion.p
        viewport={{ amount: 0.1 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          y: { type: 'spring' },
        }}
        className="px-14 text-center"
      >
        {description}
      </motion.p>
      {/* inActive mask */}
      {!active && (
        <div className="w-full h-full bg-gradient-to-b from-white/60 to-white/100 z-30 absolute flex flex-col gap-3 justify-center items-center">
          <Image src={'/images/logo.png'} width={70} height={40} alt="logo" className="opacity-80" />
          <p className="text-fontColor/80 text-xl">현재 준비중입니다!</p>
        </div>
      )}
    </motion.div>
  );
};

export default BrandDescriptionComp;
