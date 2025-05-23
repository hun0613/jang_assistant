'use client';

import ButtonAtom from '@/atoms/buttons/ButtonAtom';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';

const GoToServiceButtonComp = () => {
  const router = useRouter();

  const handleClickTrialBtn = () => {
    router.push('/createCart');
  };
  return (
    <motion.div
      viewport={{ amount: 0.1 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.6,
        duration: 0.8,
        y: { type: 'spring', delay: '0.6' },
      }}
      className="w-full sticky bottom-8 z-50 px-10"
    >
      <ButtonAtom full onClick={handleClickTrialBtn}>
        데모버전 체험하기
      </ButtonAtom>
    </motion.div>
  );
};

export default GoToServiceButtonComp;
