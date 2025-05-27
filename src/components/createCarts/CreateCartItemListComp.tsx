import { mergeClassNames } from '@/utils/domUtil';
import CartListHeaderAtom from '../../atoms/carts/CartListHeaderAtom';
import CartListItemAtom from '@/atoms/carts/CartListItemAtom';
import { CART_ITEM_STATUS } from '@/enums/carts/cartEnums';
import EraseButtonAtom from '@/atoms/buttons/EraseButtonAtom';
import ButtonAtom from '@/atoms/buttons/ButtonAtom';
import PopupAtom from '@/atoms/popups/PopupAtom';
import usePopup from '@/hooks/popup/usePopup';
import AddCartItemModalComp from './AddCartItemModalComp';

type CartItemListCompProps = {} & JSX.IntrinsicElements['div'];

const CartItemListComp: React.FC<CartItemListCompProps> = (props) => {
  const { className } = props;
  const { open, handleOpen, handleClose } = usePopup({ id: 'createCartPopup' });

  const handleOpenAddItemPopup = () => {
    handleOpen();
  };

  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <CartListHeaderAtom className="pr-12" />
        <div className="flex justify-between items-center gap-2">
          <CartListItemAtom
            cartItem={{
              id: 1,
              name: '아스파라거스',
              quantity: 2,
              status: CART_ITEM_STATUS.IN_LIST,
            }}
          />
          <EraseButtonAtom />
        </div>
        <ButtonAtom onClick={handleOpenAddItemPopup} full className="bg-pointColor/80">
          + 품목 추가
        </ButtonAtom>
      </div>
      <AddCartItemModalComp open={open} handleOpen={handleOpen} handleClose={handleClose} />
    </>
  );
};
export default CartItemListComp;
