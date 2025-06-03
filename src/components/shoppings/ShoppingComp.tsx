'use client';

import ProgressBarAtom from '@/atoms/bars/ProgressBarAtom';
import SectionAtom from '@/atoms/layouts/SectionAtom';
import TitleTextAtom from '@/atoms/texts/TitleTextAtom';
import TotalPriceSectionComp from './TotalPriceSectionComp';
import FormSectionMolecule from '@/molecules/forms/FormSectionMolecule';
import { useFieldArray, useForm } from 'react-hook-form';
import { CreateCartInput } from '../createCarts/CreateCartFormComp';
import { useEffect } from 'react';
import { localStorageUtil } from '@/utils/storageUtil';
import { CartItemType } from '@/types/carts/cartType';
import ShoppingItemListComp from './ShoppingItemListComp';
import useSticky from '@/hooks/scroll/useSticky';
import { mergeClassNames } from '@/utils/domUtil';
import ButtonAtom from '@/atoms/buttons/ButtonAtom';

const ShoppingComp = () => {
  const { control, reset } = useForm<Pick<CreateCartInput, 'items'>>({
    defaultValues: {
      items: [],
    },
  });

  const { fields: shoppingItems, append, remove, update } = useFieldArray({ control, name: 'items' });

  const { onSticky, stickyTargetRef } = useSticky();

  useEffect(() => {
    const items = (localStorageUtil.getArray('cartItems') as CartItemType[]) || [];
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
          <ProgressBarAtom rate={35} showIcon showRate />
        </div>
        <TotalPriceSectionComp price={123134} />
      </div>
      <FormSectionMolecule title={'사야 할 것'} description={'각 항목을 클릭하여 담기 혹은 뺄 수 있어요!'}>
        <ShoppingItemListComp shoppingItems={shoppingItems} addItem={append} removeItem={remove} updateItem={update} />
      </FormSectionMolecule>
      <ButtonAtom full className="mt-10">
        완료
      </ButtonAtom>
    </div>
  );
};

export default ShoppingComp;
