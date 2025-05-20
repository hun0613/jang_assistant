'use client';
import ButtonAtom from '@/atoms/buttons/ButtonAtom';
import { motion } from 'motion/react';

const EndingComp = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-bgColor text-fontColor gap-3">
      <motion.p
        viewport={{ amount: 0.1 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          y: { type: 'spring' },
        }}
        className="text-xl"
      >
        장비서와 함께하는
      </motion.p>
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
        <p className="text-3xl z-10">슬기로운 장보기 생활</p>
        <div className="w-full absolute bottom-0.5 h-3 bg-pointColor/50"></div>
      </motion.div>
      <motion.p
        viewport={{ amount: 0.1 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.5,
          y: { type: 'spring' },
        }}
        className="text-2xl"
      >
        준비되셨나요?
      </motion.p>
    </div>
  );
};

export default EndingComp;
