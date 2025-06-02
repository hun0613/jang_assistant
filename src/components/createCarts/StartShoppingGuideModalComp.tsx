import PopupAtom, { PopupActionWrapperAtom } from '@/atoms/popups/PopupAtom';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ButtonAtom, { BUTTON_COLOR } from '@/atoms/buttons/ButtonAtom';
import TitleTextAtom from '@/atoms/texts/TitleTextAtom';
import ProgressBarAtom from '@/atoms/bars/ProgressBarAtom';
import DescriptionTextAtom from '@/atoms/texts/DescriptionTextAtom';
import { useRouter } from 'next/navigation';

type StartShoppingGuideModalProps = {} & React.ComponentProps<typeof PopupAtom>;

const StartShoppingGuideModalComp: React.FC<StartShoppingGuideModalProps> = (props) => {
  const { open, handleClose, handleOpen, children, ...rest } = props;
  const [seconds, setSeconds] = useState(999);

  const router = useRouter();

  const goToShopping = () => {
    router.push('/shopping');
  };

  useEffect(() => {
    if (!open) return;
    setSeconds(5);
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [open]);

  useEffect(() => {
    // 자동 카운트가 종료되었을 때,
    if (seconds === 0) {
      goToShopping();
    }
  }, [seconds]);

  return (
    <PopupAtom open={open} handleClose={handleClose} handleOpen={handleOpen} {...rest}>
      <div className="w-full flex flex-col justify-center items-center gap-7">
        <Image src={'/images/logo.png'} width={50} height={40} alt="logo" />
        <div className="flex flex-col justify-center items-center">
          <TitleTextAtom className="text-pointColor">설 명절 대비 장볼 것</TitleTextAtom>
          <p className="text-fontColor text-lg">장보기를 시작합니다!</p>
        </div>
        <ProgressBarAtom rate={100} animationDuration={5000} />
        <DescriptionTextAtom>{`${seconds}초 후 자동으로 시작됩니다`}</DescriptionTextAtom>

        <PopupActionWrapperAtom>
          <ButtonAtom full color={BUTTON_COLOR.GRAY} onClick={() => handleClose()}>
            취소
          </ButtonAtom>
          <ButtonAtom full onClick={() => goToShopping()}>
            시작
          </ButtonAtom>
        </PopupActionWrapperAtom>
      </div>
    </PopupAtom>
  );
};

export default StartShoppingGuideModalComp;
