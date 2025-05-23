'use client';

import InputAtom from '@/atoms/forms/InputAtom';
import InputMolecule from '@/molecules/forms/InputMolecule';
import { useForm } from 'react-hook-form';

export type CreateCartInput = {
  title: string;
};

const CreateCartFormComp = () => {
  const { register, watch } = useForm<CreateCartInput>({
    defaultValues: {
      title: '',
    },
  });

  return (
    <div className="flex flex-col gap-5">
      <InputMolecule title={'장바구니 이름'} description={'품목이나 방문할 매장을 고려해서 지어주세요!'} required={true}>
        <InputAtom register={{ ...register('title') }} placeholder="장바구니 이름을 입력하세요." maxLength={20} value={watch('title')} />
      </InputMolecule>
      <InputMolecule title={'사야 할 것'} description={'각 품목을 클릭하여 수정 및 제거할 수 있어요!'} required={true}></InputMolecule>
      <InputMolecule title={'메모'} description={'장볼 때 참고해야 할 내용을 입력하세요!'}></InputMolecule>
    </div>
  );
};
export default CreateCartFormComp;
