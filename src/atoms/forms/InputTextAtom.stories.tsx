import { Meta, StoryObj } from '@storybook/react';
import SectionAtom from '../layouts/SectionAtom';
import InputTextAtom from './InputTextAtom';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof InputTextAtom> = {
  title: 'Atomic/Form/InputText',
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

export const Primary: InputTextAtomStory = {
  render: (args) => <InputForm {...args} />,
  args: {
    placeholder: '제목을 입력하세요.',
    maxLength: 20,
  },
};
