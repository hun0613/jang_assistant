'use client';

import PopupAtom from '@/atoms/popups/PopupAtom';
import usePopup from '@/hooks/popup/usePopup';
import { useCallback, useEffect } from 'react';
import Image from 'next/image';
import ButtonAtom from '@/atoms/buttons/ButtonAtom';
import { addDays, isAfter } from 'date-fns';
import { localStorageUtil } from '@/utils/storageUtil';

const CreateCartGuideModalComp = () => {
  const showGuideTime = localStorageUtil.get('createCartGuideShown');
  const hasShoppingHistory = !!localStorageUtil.getArray('shoppingHistory').length;
  const shouldShowGuide =
    !hasShoppingHistory && (!showGuideTime || (showGuideTime && isAfter(new Date(), addDays(new Date(Number(showGuideTime)), 1))));

  const { open, handleOpen, handleClose } = usePopup({ id: 'createCartGuideModal' });

  const handleOpenGuide = useCallback(() => {
    if (shouldShowGuide) {
      handleOpen();
    }
  }, [shouldShowGuide]);

  useEffect(() => {
    handleOpenGuide();
  }, [handleOpenGuide]);

  const handleConfirm = () => {
    localStorageUtil.set('createCartGuideShown', Date.now().toString());
    handleClose();
  };

  return (
    <PopupAtom open={open} handleClose={handleConfirm} handleOpen={handleOpen} closeOnBackdropClick={false}>
      <div className="w-full flex flex-col justify-center items-center gap-8">
        <Image src={'/images/logo.png'} width={50} height={40} alt="logo" />
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <p className="text-xl text-pointColor/80">장보기 리스트는 자동으로 저장돼요!</p>
          <div>
            <p className="text-fontColor/60 text-center">
              창을 닫았다가 다시 들어와도 <br /> 입력한 내용은 그대로 유지됩니다!
            </p>
            <p className="text-sm text-pointColor/60 text-center">(단, 같은 브라우저로 접속해야 합니다.)</p>
          </div>
          <p className="text-fontColor/60 text-center">
            장보기 시작 전에 리스트를 미리 입력해두고,
            <br />
            필요할 때 &apos;장보기 시작&apos; 버튼을 눌러주세요 ☺️
          </p>
        </div>
        <ButtonAtom full onClick={handleConfirm}>
          확인
        </ButtonAtom>
      </div>
    </PopupAtom>
  );
};

export default CreateCartGuideModalComp;
