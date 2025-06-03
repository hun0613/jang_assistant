import ButtonAtom from '@/atoms/buttons/ButtonAtom';
import CartListHeaderAtom from '@/atoms/carts/CartListHeaderAtom';
import CartListItemAtom from '@/atoms/carts/CartListItemAtom';
import usePopup from '@/hooks/popup/usePopup';
import { CartItemType } from '@/types/carts/cartType';
import AddCartItemModalComp from '../createCarts/AddCartItemModalComp';

type ShoppingItemListCompProps = {
  shoppingItems: CartItemType[];
  addItem: (item: CartItemType) => void;
  removeItem: (index: number) => void;
  updateItem: (index: number, value: CartItemType) => void;
} & JSX.IntrinsicElements['div'];

const ShoppingItemListComp: React.FC<ShoppingItemListCompProps> = (props) => {
  const { shoppingItems, addItem, removeItem, updateItem } = props;

  const {
    open: addCartItemModalOpen,
    handleOpen: handleOpenAddCartItemModal,
    handleClose: handleCloseAddCartItemModal,
  } = usePopup({ id: 'addCartItemModal' });

  const handleOpenAddItemPopup = () => {
    handleOpenAddCartItemModal();
  };

  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <CartListHeaderAtom />
        {shoppingItems.map((item, index) => (
          <CartListItemAtom key={`shoppingItem_${index}`} cartItem={item} />
        ))}
        <ButtonAtom onClick={handleOpenAddItemPopup} full className="bg-pointColor/80">
          + 품목 추가
        </ButtonAtom>
      </div>
      <AddCartItemModalComp
        addItem={addItem}
        open={addCartItemModalOpen}
        handleOpen={handleOpenAddCartItemModal}
        handleClose={handleCloseAddCartItemModal}
      />
    </>
  );
};

export default ShoppingItemListComp;
