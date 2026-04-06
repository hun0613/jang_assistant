import Image from 'next/image';
import PopupAtom, { PopupActionWrapperAtom } from '@/atoms/popups/PopupAtom';
import TitleTextAtom from '@/atoms/texts/TitleTextAtom';
import ButtonAtom, { BUTTON_COLOR } from '@/atoms/buttons/ButtonAtom';
import { useRouter } from 'next/navigation';
import { updateCart } from '@/actions/carts/cartActions';
import { CART_STATUS } from '@/enums/carts/cartEnums';
import { localStorageUtil } from '@/utils/storageUtil';

type ResumeShoppingModalProps = {
  shoppingCartId: number | null;
} & React.ComponentProps<typeof PopupAtom>;

const ResumeShoppingModalComp: React.FC<ResumeShoppingModalProps> = (props) => {
  const { shoppingCartId, open, handleClose, handleOpen, ...rest } = props;
  const router = useRouter();

  const handleCancelResume = async () => {
    if (shoppingCartId) {
      await updateCart(shoppingCartId, { status: CART_STATUS.COMPLETED });
    }
    localStorageUtil.remove('shoppingCartId');
    handleClose();
  };

  const handleResume = () => {
    if (!shoppingCartId) return;
    router.push(`/shopping/${shoppingCartId}`);
  };

  return (
    <PopupAtom closeOnBackdropClick={false} open={open} handleClose={handleClose} handleOpen={handleOpen} {...rest}>
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Image src={'/images/logo.png'} width={50} height={40} alt="logo" />
        <div className="flex flex-col justify-center items-center gap-1">
          <TitleTextAtom className="text-pointColor">진행중인 장보기가 있어요!</TitleTextAtom>
          <p className="text-fontColor text-lg">이어서 장보시겠어요?</p>
        </div>

        <PopupActionWrapperAtom>
          <ButtonAtom onClick={handleCancelResume} full color={BUTTON_COLOR.GRAY}>
            아니요
          </ButtonAtom>
          <ButtonAtom onClick={handleResume} full>
            예
          </ButtonAtom>
        </PopupActionWrapperAtom>
      </div>
    </PopupAtom>
  );
};

export default ResumeShoppingModalComp;
