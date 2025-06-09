'use client';

import ButtonAtom from '@/atoms/buttons/ButtonAtom';
import TitleTextAtom from '@/atoms/texts/TitleTextAtom';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  const handleClickGoHome = () => {
    router.push('/');
  };

  return (
    <div className="min-h-[calc(100vh-97px)] w-full flex flex-col items-center justify-center h-full py-10 gap-3">
      <Image src={'/images/logo.png'} width={50} height={40} alt="logo" />
      <TitleTextAtom underline>유효하지 않은 페이지 입니다!</TitleTextAtom>
      <ButtonAtom className="mt-10" onClick={handleClickGoHome}>
        홈으로 돌아가기
      </ButtonAtom>
    </div>
  );
}
