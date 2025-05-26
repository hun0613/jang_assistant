'use client';

import ButtonAtom from '@/atoms/buttons/ButtonAtom';
import InputAtom from '@/atoms/forms/InputAtom';
import TextAreaAtom from '@/atoms/forms/TextAreaAtom';
import FormMolecule from '@/molecules/forms/FormMolecule';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import CreateCartItemListComp from './CreateCartItemListComp';
import { CartItemType } from '@/types/carts/cartType';
import PopupAtom from '@/atoms/popups/PopupAtom';
import usePopup from '@/hooks/popup/usePopup';

export type CreateCartInput = {
  title: string;
  memo: string;
  items: CartItemType[];
};

const CreateCartFormComp = () => {
  const { register, watch, handleSubmit, control } = useForm<CreateCartInput>({
    defaultValues: {
      title: '',
      memo: '',
      items: [],
    },
  });

  //   ListComp에 control을 props로 넘겨 내부에서 처리
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const handleStartShopping: SubmitHandler<CreateCartInput> = (data) => {
    console.log('장바구니 생성:', data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleStartShopping)} className="flex flex-col gap-5">
        <FormMolecule title={'장바구니 이름'} description={'품목이나 방문할 매장을 고려해서 지어주세요!'} required={true}>
          <InputAtom register={{ ...register('title') }} placeholder="장바구니 이름을 입력하세요." maxLength={20} value={watch('title')} />
        </FormMolecule>
        <FormMolecule title={'사야 할 것'} description={'각 품목을 클릭하여 수정 및 제거할 수 있어요!'} required={true}>
          {/* TODO: ListComp */}
          <CreateCartItemListComp />
        </FormMolecule>
        <FormMolecule title={'메모'} description={'장볼 때 참고해야 할 내용을 입력하세요!'}>
          <TextAreaAtom register={{ ...register('memo') }} placeholder="내용을 입력하세요." maxLength={100} value={watch('memo')} />
        </FormMolecule>
        <ButtonAtom type="submit" full>
          장보기 시작하기
        </ButtonAtom>
      </form>
    </>
  );
};
export default CreateCartFormComp;
