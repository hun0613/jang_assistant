import { Meta, StoryObj } from '@storybook/react';
import SectionAtom from '../layouts/SectionAtom';
import InputAtom from './InputAtom';
import { useForm } from 'react-hook-form';
import ButtonAtom from '../buttons/ButtonAtom';

const meta: Meta<typeof InputAtom> = {
  title: 'Atomic/Form/Input',
  component: InputAtom,
  tags: ['autodocs'],
};

export default meta;
type InputAtomStory = StoryObj<typeof InputAtom>;

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
        <InputAtom {...args} register={{ ...register('title') }} value={watch('title')} />
      </SectionAtom>
    </>
  );
};

export const Primary: InputAtomStory = {
  render: (args) => <InputForm {...args} />,
  args: {
    placeholder: '제목을 입력하세요.',
    maxLength: 20,
  },
};
