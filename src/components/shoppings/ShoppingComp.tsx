'use client';

import ProgressBarAtom from '@/atoms/bars/ProgressBarAtom';
import TotalPriceSectionComp from './TotalPriceSectionComp';
import FormSectionMolecule from '@/molecules/forms/FormSectionMolecule';
import { useFieldArray, useForm } from 'react-hook-form';
import { CreateCartInput } from '../createCarts/CreateCartFormComp';
import { useEffect, useMemo } from 'react';
import { localStorageUtil } from '@/utils/storageUtil';
import { CartItemType, CartType } from '@/types/carts/cartType';
import ShoppingItemListComp from './ShoppingItemListComp';
import useSticky from '@/hooks/scroll/useSticky';
import { mergeClassNames } from '@/utils/domUtil';
import ButtonAtom from '@/atoms/buttons/ButtonAtom';
import { CART_ITEM_STATUS } from '@/enums/carts/cartEnums';
import FloatingMemoButtonComp from './FloatingMemoButtonComp';
import usePopup from '@/hooks/popup/usePopup';
import CompleteShoppingGuideModalComp from './CompleteShoppingGuideModalComp';
import ShoppingUsageGuideModalComp from './ShoppingUsageGuideModalComp';
import { createCartItem } from '@/actions/cartItems/cartItemActions';

type ShoppingCompProps = {
  cartId: number;
  initialCart: CartType;
  initialItems: CartItemType[];
};

const ShoppingComp: React.FC<ShoppingCompProps> = ({ cartId, initialCart, initialItems }) => {
  const { control, watch } = useForm<CreateCartInput>({
    defaultValues: {
      title: initialCart.title || '',
      items: initialItems,
      memo: initialCart.memo || '',
    },
  });

  const {
    open: completeShoppingGuideModalOpen,
    handleClose: handleCloseCompleteShoppingGuideModal,
    handleOpen: handleOpenCompleteShoppingGuideModal,
  } = usePopup({ id: 'completeShoppingGuideModal' });

  const {
    open: shoppingUsageGuideModalOpen,
    handleClose: handleCloseShoppingUsageGuideModal,
    handleOpen: handleOpenShoppingUsageGuideModal,
  } = usePopup({ id: 'shoppingUsageGuideModal' });

  const { fields: shoppingItems, append, update, replace } = useFieldArray({ control, name: 'items', keyName: 'key' });

  const { onSticky, stickyTargetRef } = useSticky();

  const pickedItems = useMemo(() => shoppingItems.filter((item) => item.status === CART_ITEM_STATUS.IN_CART), [shoppingItems]);
  const unPickedItems = useMemo(() => shoppingItems.filter((item) => item.status === CART_ITEM_STATUS.IN_LIST), [shoppingItems]);

  const shoppingProgress = useMemo(() => Math.floor((pickedItems.length / shoppingItems.length) * 100), [pickedItems]) || 0;

  const shouldShowShoppingUsageGuide = !localStorageUtil.get('shoppingUsageGuideShown');

  const handleClickComplete = () => {
    handleOpenCompleteShoppingGuideModal();
  };

  const handleAddItem = async (name: string, quantity: number) => {
    const created = (await createCartItem(cartId, name, quantity)) as CartItemType;
    append(created);
  };

  useEffect(() => {
    if (shouldShowShoppingUsageGuide) {
      handleOpenShoppingUsageGuideModal();
    }
  }, []);

  useEffect(() => {
    const sortedItems = [...unPickedItems, ...pickedItems];

    if (JSON.stringify(shoppingItems) !== JSON.stringify(sortedItems)) {
      replace(sortedItems);
    }
  }, [shoppingItems]);

  return (
    <>
      <div className="flex flex-col justify-start items-center">
        <div
          ref={stickyTargetRef}
          className={mergeClassNames('w-full sticky top-[60px] pb-5 bg-bgColor z-50', {
            'backdrop-blur-sm bg-bgColor/90 rounded-b-xl': onSticky,
          })}
        >
          <div className="w-full px-5 py-5">
            <ProgressBarAtom rate={shoppingProgress} showIcon showRate />
          </div>
          <TotalPriceSectionComp pickedShoppingItems={pickedItems} />
        </div>
        <FormSectionMolecule title={'사야 할 것'} description={'각 항목을 클릭하여 담기 혹은 뺄 수 있어요!'}>
          <ShoppingItemListComp shoppingItems={shoppingItems} onAddItem={handleAddItem} updateItem={update} />
        </FormSectionMolecule>
        <ButtonAtom onClick={handleClickComplete} disabled={pickedItems.length < 1} full className="mt-10">
          완료
        </ButtonAtom>
        <FloatingMemoButtonComp memo={watch('memo')} />
      </div>
      <CompleteShoppingGuideModalComp
        cartId={cartId}
        title={watch('title')}
        unPickedShoppintItems={unPickedItems}
        open={completeShoppingGuideModalOpen}
        handleClose={handleCloseCompleteShoppingGuideModal}
        handleOpen={handleOpenCompleteShoppingGuideModal}
      />
      <ShoppingUsageGuideModalComp
        open={shoppingUsageGuideModalOpen}
        handleClose={handleCloseShoppingUsageGuideModal}
        handleOpen={handleOpenShoppingUsageGuideModal}
      />
    </>
  );
};

export default ShoppingComp;
