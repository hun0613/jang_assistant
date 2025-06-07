'use client';

import ProgressBarAtom from '@/atoms/bars/ProgressBarAtom';
import TotalPriceSectionComp from './TotalPriceSectionComp';
import FormSectionMolecule from '@/molecules/forms/FormSectionMolecule';
import { useFieldArray, useForm } from 'react-hook-form';
import { CreateCartInput } from '../createCarts/CreateCartFormComp';
import { useEffect, useMemo, useState } from 'react';
import { localStorageUtil } from '@/utils/storageUtil';
import { CartItemType } from '@/types/carts/cartType';
import ShoppingItemListComp from './ShoppingItemListComp';
import useSticky from '@/hooks/scroll/useSticky';
import { mergeClassNames } from '@/utils/domUtil';
import ButtonAtom from '@/atoms/buttons/ButtonAtom';
import { CART_ITEM_STATUS } from '@/enums/carts/cartEnums';
import FloatingMemoButtonComp from './FloatingMemoButtonComp';

const ShoppingComp = () => {
  const [memo, setMemo] = useState('');

  const { control, reset } = useForm<Pick<CreateCartInput, 'items'>>({
    defaultValues: {
      items: [],
    },
  });

  const { fields: shoppingItems, append, update } = useFieldArray({ control, name: 'items' });

  const { onSticky, stickyTargetRef } = useSticky();

  const pickItems = useMemo(() => shoppingItems.filter((item) => item.status === CART_ITEM_STATUS.IN_CART), [shoppingItems]);

  const shoppingProgress = useMemo(() => Math.floor((pickItems.length / shoppingItems.length) * 100), [pickItems]) || 0;

  useEffect(() => {
    const items = (localStorageUtil.getArray('cartItems') as CartItemType[]) || [];
    const memo = localStorageUtil.get('memo') || '';
    setMemo(memo);
    reset({ items });
  }, [reset]);

  return (
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
        <TotalPriceSectionComp shoppingItems={shoppingItems} />
      </div>
      <FormSectionMolecule title={'사야 할 것'} description={'각 항목을 클릭하여 담기 혹은 뺄 수 있어요!'}>
        <ShoppingItemListComp shoppingItems={shoppingItems} addItem={append} updateItem={update} />
      </FormSectionMolecule>
      <ButtonAtom full className="mt-10">
        완료
      </ButtonAtom>
      <FloatingMemoButtonComp memo={memo} />
    </div>
  );
};

export default ShoppingComp;
