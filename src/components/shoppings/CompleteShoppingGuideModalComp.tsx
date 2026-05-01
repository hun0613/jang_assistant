import ButtonAtom, { BUTTON_COLOR } from '@/atoms/buttons/ButtonAtom';
import LabelAtom from '@/atoms/forms/LabelAtom';
import PopupAtom, { PopupActionWrapperAtom } from '@/atoms/popups/PopupAtom';
import DescriptionTextAtom from '@/atoms/texts/DescriptionTextAtom';
import TitleTextAtom from '@/atoms/texts/TitleTextAtom';
import { CartItemType } from '@/types/carts/cartType';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { updateCart } from '@/actions/carts/cartActions';
import { CART_STATUS } from '@/enums/carts/cartEnums';
import { localStorageUtil } from '@/utils/storageUtil';

type CompleteShoppingGuideModalProps = {
  cartId: number;
  title: string;
  unPickedShoppintItems: CartItemType[];
} & React.ComponentProps<typeof PopupAtom>;

const CompleteShoppingGuideModalComp: React.FC<CompleteShoppingGuideModalProps> = (props) => {
  const { cartId, title, unPickedShoppintItems, open, handleClose, handleOpen, ...rest } = props;

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClickComplete = async () => {
    setLoading(true);
    try {
      if (cartId && !isNaN(cartId)) {
        await updateCart(cartId, { status: CART_STATUS.COMPLETED });
      }
      localStorageUtil.remove('shoppingCartId');

      window.open('https://forms.gle/et8g1iFNKRQtUZgs5', '_blank');
      router.push('/');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PopupAtom open={open} handleClose={handleClose} handleOpen={handleOpen} {...rest}>
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Image src={'/images/logo.png'} width={50} height={40} alt="logo" />
        <div className="flex flex-col justify-center items-center gap-1">
          <TitleTextAtom underline>{title}</TitleTextAtom>
          <p className="text-fontColor text-lg">장보기를 완료하시겠습니까?</p>
        </div>
        <LabelAtom title="미구매 품목" description="카트에 담지 않은 품목을 확인해주세요!" />
        <div className="w-full flex flex-col justify-start items-center h-40 overflow-auto p-3 gap-1">
          {unPickedShoppintItems.length === 0 && (
            <div className="w-full h-full flex justify-center items-center text-grayBtnColor text-lg">모든 물품을 담으셨습니다:)</div>
          )}

          {unPickedShoppintItems.length > 0 &&
            unPickedShoppintItems.map((item, index) => {
              return <SimpleListItemComp key={`${item.id}_${index}`} name={item.name} quantity={item.quantity} />;
            })}
        </div>
        <div className="h-1 w-full border-b-[0.5px] border-grayBtnColor"></div>
        <DescriptionTextAtom className="w-full text-sm">데모버전에서 제공하는 서비스는 여기까지입니다!</DescriptionTextAtom>
        <PopupActionWrapperAtom>
          <ButtonAtom onClick={() => handleClose()} full color={BUTTON_COLOR.GRAY}>
            취소
          </ButtonAtom>
          <ButtonAtom onClick={handleClickComplete} full loading={loading}>
            종료
          </ButtonAtom>
        </PopupActionWrapperAtom>
      </div>
    </PopupAtom>
  );
};

export default CompleteShoppingGuideModalComp;

type SimpleListItemProps = Pick<CartItemType, 'name' | 'quantity'>;

export const SimpleListItemComp: React.FC<SimpleListItemProps> = (props) => {
  const { name, quantity } = props;

  return (
    <div className="w-full flex justify-between items-center text-fontColor/80 text-lg">
      <span>{name}</span>
      <span>{quantity}</span>
    </div>
  );
};
