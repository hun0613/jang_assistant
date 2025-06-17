import { Meta, StoryObj } from '@storybook/react';
import SectionAtom from '../layouts/SectionAtom';
import InputTextAtom from './InputTextAtom';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof InputTextAtom> = {
  title: 'Atomic/Forms/InputText',
  component: InputTextAtom,
  tags: ['autodocs'],
};

export default meta;
type InputTextAtomStory = StoryObj<typeof InputTextAtom>;

type Inputs = {
  title: string;
};

const InputForm = (args: any) => {
  const { register, watch } = useForm<Inputs>({
    defaultValues: { title: '' },
  });

  return (
    <>
      <SectionAtom>
        <InputTextAtom {...args} register={{ ...register('title') }} value={watch('title')} />
      </SectionAtom>
    </>
  );
};

/**
 * 간단한 텍스트를 입력할 때 사용되는 Atom Component입니다. <br />
 * 입력된 글자 수와 글자수 제한이 하단에 표시됩니다. <br />
 * input의 자체 submit 기능과 관련된 사이드이펙트 때문에 Enter 입력 시 input blur 처리되도록 설정하였습니다.
 */
export const Primary: InputTextAtomStory = {
  render: (args) => <InputForm {...args} />,
  args: {
    placeholder: '제목을 입력하세요.',
    maxLength: 20,
  },
};
