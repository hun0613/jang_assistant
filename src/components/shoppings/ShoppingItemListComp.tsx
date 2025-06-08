import ButtonAtom from '@/atoms/buttons/ButtonAtom';
import CartListHeaderAtom from '@/atoms/carts/CartListHeaderAtom';
import CartListItemAtom from '@/atoms/carts/CartListItemAtom';
import usePopup from '@/hooks/popup/usePopup';
import { CartItemType } from '@/types/carts/cartType';
import AddCartItemModalComp from '../createCarts/AddCartItemModalComp';
import { CART_ITEM_STATUS } from '@/enums/carts/cartEnums';
import { useState } from 'react';
import PickItemModalComp from './PickItemModalComp';
import DropItemModalComp from './DropItemModalComp';

type ShoppingItemListCompProps = {
  shoppingItems: CartItemType[];
  addItem: (item: CartItemType) => void;
  updateItem: (index: number, value: CartItemType) => void;
} & JSX.IntrinsicElements['div'];

const ShoppingItemListComp: React.FC<ShoppingItemListCompProps> = (props) => {
  const { shoppingItems, addItem, updateItem } = props;

  const [selectItemIndex, setSelectItemIndex] = useState(999);

  const {
    open: addCartItemModalOpen,
    handleOpen: handleOpenAddCartItemModal,
    handleClose: handleCloseAddCartItemModal,
  } = usePopup({ id: 'addCartItemModal' });

  const {
    open: pickItemModalOpen,
    handleOpen: handleOpenPickItemModal,
    handleClose: handleClosePickItemModal,
  } = usePopup({ id: 'pickItemModal' });

  const {
    open: dropItemModalOpen,
    handleOpen: handleOpenDropItemModal,
    handleClose: handleCloseDropItemModal,
  } = usePopup({ id: 'dropItemModal' });

  const handleOpenAddItemPopup = () => {
    handleOpenAddCartItemModal();
  };

  const handleClickItem = (item: CartItemType, index: number) => {
    setSelectItemIndex(index);

    if (item.status === CART_ITEM_STATUS.IN_CART) {
      // 물품 빼기 확인 모달 open
      handleOpenDropItemModal();
    } else {
      // 물품 담기 모달 open
      handleOpenPickItemModal();
    }
  };

  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <CartListHeaderAtom />
        {shoppingItems.map((item, index) => (
          <CartListItemAtom onClick={() => handleClickItem(item, index)} key={`shoppingItem_${index}`} cartItem={item} />
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
      <PickItemModalComp
        updateItemOption={{
          item: shoppingItems[selectItemIndex],
          updateItem: updateItem,
          index: selectItemIndex,
        }}
        open={pickItemModalOpen}
        handleOpen={handleOpenPickItemModal}
        handleClose={handleClosePickItemModal}
      />
      <DropItemModalComp
        dropItemOption={{
          item: shoppingItems[selectItemIndex],
          dropItem: updateItem,
          index: selectItemIndex,
        }}
        open={dropItemModalOpen}
        handleOpen={handleOpenDropItemModal}
        handleClose={handleCloseDropItemModal}
      />
    </>
  );
};

export default ShoppingItemListComp;
