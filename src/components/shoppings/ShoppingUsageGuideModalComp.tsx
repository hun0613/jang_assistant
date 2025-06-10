import ButtonAtom from '@/atoms/buttons/ButtonAtom';
import PopupAtom from '@/atoms/popups/PopupAtom';
import TitleTextAtom from '@/atoms/texts/TitleTextAtom';
import { localStorageUtil } from '@/utils/storageUtil';
import Image from 'next/image';

type ShoppingUsageGuideModalProps = {} & React.ComponentProps<typeof PopupAtom>;

const ShoppingUsageGuideModalComp: React.FC<ShoppingUsageGuideModalProps> = (props) => {
  const { open, handleClose, handleOpen, ...rest } = props;

  const handleConfirm = () => {
    localStorageUtil.set('shoppingUsageGuideShown', Date.now().toString());
    handleClose();
  };

  return (
    <PopupAtom open={open} handleClose={handleConfirm} handleOpen={handleOpen} {...rest}>
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center gap-1">
          <TitleTextAtom underline className="text-[24px]">
            장보기 기능 사용법
          </TitleTextAtom>
        </div>

        <Image className="rounded-xl border" src={'/images/shoppingGuide.gif'} width={300} height={40} alt="logo" />
        <ButtonAtom full onClick={handleConfirm}>
          확인
        </ButtonAtom>
      </div>
    </PopupAtom>
  );
};

export default ShoppingUsageGuideModalComp;
