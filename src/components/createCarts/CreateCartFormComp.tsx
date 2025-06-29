'use client';

import ButtonAtom from '@/atoms/buttons/ButtonAtom';
import InputTextAtom from '@/atoms/forms/InputTextAtom';
import TextAreaAtom from '@/atoms/forms/TextAreaAtom';
import FormSectionMolecule from '@/molecules/forms/FormSectionMolecule';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import CreateCartItemListComp from './CreateCartItemListComp';
import { CartItemType } from '@/types/carts/cartType';
import { localStorageUtil } from '@/utils/storageUtil';
import { useEffect } from 'react';
import usePopup from '@/hooks/popup/usePopup';
import StartShoppingGuideModalComp from './StartShoppingGuideModalComp';
import ResumeShoppingModalComp from './ResumeShoppingModalComp';

export type CreateCartInput = {
  title: string;
  memo: string;
  items: CartItemType[];
};

const CreateCartFormComp = () => {
  const { register, watch, handleSubmit, control, reset } = useForm<CreateCartInput>({
    defaultValues: {
      title: '',
      memo: '',
      items: [],
    },
  });

  const {
    fields: cartItems,
    append,
    remove,
  } = useFieldArray({
    control,
    name: 'items',
  });

  const {
    open: startShoppingGuideModalOpen,
    handleClose: handleCloseStartShoppingGuideModal,
    handleOpen: handleOpenStartShoppingGuideModal,
  } = usePopup({ id: 'startShoppingGuideModal' });

  const {
    open: resumeShoppingGuideModalOpen,
    handleClose: handleCloseResumeShoppingGuideModal,
    handleOpen: handleOpenResumeShoppingGuideModal,
  } = usePopup({ id: 'resumeShoppingGuideModal' });

  const handleStartShopping: SubmitHandler<CreateCartInput> = (data) => {
    handleOpenStartShoppingGuideModal();
  };

  const handleBlurTitleInput = () => {
    localStorageUtil.set('title', watch('title'));
  };

  const handleBlurMemoInput = () => {
    localStorageUtil.set('memo', watch('memo'));
  };

  useEffect(() => {
    const title = localStorageUtil.get('title') || '';
    const memo = localStorageUtil.get('memo') || '';
    const items = (localStorageUtil.getArray('cartItems') as CartItemType[]) || [];

    reset({ title, memo, items });
  }, [reset]);

  useEffect(() => {
    if (!!localStorageUtil.getArray('shoppingHistory').length) {
      handleOpenResumeShoppingGuideModal();
    }
  }, []);

  return (
    <>
      <ResumeShoppingModalComp
        title={watch('title')}
        open={resumeShoppingGuideModalOpen}
        handleClose={handleCloseResumeShoppingGuideModal}
        handleOpen={handleOpenResumeShoppingGuideModal}
      />
      <StartShoppingGuideModalComp
        title={watch('title')}
        open={startShoppingGuideModalOpen}
        handleClose={handleCloseStartShoppingGuideModal}
        handleOpen={handleOpenStartShoppingGuideModal}
      />
      <form onSubmit={handleSubmit(handleStartShopping)} className="w-full mt-5 flex flex-col gap-5">
        <FormSectionMolecule title={'장바구니 이름'} description={'품목이나 방문할 매장을 고려해서 지어주세요!'} required={true}>
          <InputTextAtom
            register={{
              ...register('title', {
                onBlur: handleBlurTitleInput,
              }),
            }}
            placeholder="장바구니 이름을 입력하세요."
            maxLength={20}
            value={watch('title')}
          />
        </FormSectionMolecule>
        <FormSectionMolecule title={'사야 할 것'} description={'품목 추가 버튼을 눌러 품명과 수량을 입력해주세요!'} required={true}>
          <CreateCartItemListComp cartItems={cartItems} addItem={append} removeItem={remove} />
        </FormSectionMolecule>
        <FormSectionMolecule title={'메모'} description={'장볼 때 참고해야 할 내용을 입력하세요!'}>
          <TextAreaAtom
            register={{
              ...register('memo', {
                onBlur: handleBlurMemoInput,
              }),
            }}
            placeholder="내용을 입력하세요."
            maxLength={100}
            value={watch('memo')}
          />
        </FormSectionMolecule>
        <ButtonAtom className="mt-5" type="submit" full disabled={!watch('title') || cartItems.length === 0}>
          장보기 시작하기
        </ButtonAtom>
      </form>
    </>
  );
};
export default CreateCartFormComp;
