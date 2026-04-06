import CartListHeaderAtom from '../../atoms/carts/CartListHeaderAtom';
import CartListItemAtom from '@/atoms/carts/CartListItemAtom';
import EraseButtonAtom from '@/atoms/buttons/EraseButtonAtom';
import ButtonAtom from '@/atoms/buttons/ButtonAtom';
import AddCartItemModalComp from './AddCartItemModalComp';
import usePopup from '@/hooks/popup/usePopup';
import { CartItemType } from '@/types/carts/cartType';
import Image from 'next/image';

type CartItemListCompProps = {
  cartItems: CartItemType[];
  onAddItem: (name: string, quantity: number) => Promise<void>;
  onRemoveItem: (index: number, itemId: number) => Promise<void>;
} & JSX.IntrinsicElements['div'];

const CartItemListComp: React.FC<CartItemListCompProps> = (props) => {
  const { cartItems, onAddItem, onRemoveItem } = props;

  const { open, handleOpen, handleClose } = usePopup({ id: 'addCartItemModal' });

  const handleOpenAddItemPopup = () => {
    handleOpen();
  };

  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <CartListHeaderAtom className="pr-12" />
        {cartItems.length === 0 && (
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={'/images/logo.png'} width={40} height={40} alt="logo" className="opacity-50" />
            <p className="text-fontColor/50 text-lg">품목을 추가해주세요!</p>
          </div>
        )}
        {cartItems.map((item, index) => (
          <div key={item.id} className="flex justify-between items-center gap-2">
            <CartListItemAtom className="pointer-events-none" cartItem={item} />
            <EraseButtonAtom onClick={() => onRemoveItem(index, item.id)} />
          </div>
        ))}
        <ButtonAtom onClick={handleOpenAddItemPopup} full className="bg-pointColor/80">
          + 품목 추가
        </ButtonAtom>
      </div>
      <AddCartItemModalComp onAddItem={onAddItem} open={open} handleOpen={handleOpen} handleClose={handleClose} />
    </>
  );
};
export default CartItemListComp;
