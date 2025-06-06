import { Meta, StoryObj } from '@storybook/react';
import SectionAtom from '../layouts/SectionAtom';
import InputPriceAtom from './InputPriceAtom';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof InputPriceAtom> = {
  title: 'Atomic/Form/InputPrice',
  component: InputPriceAtom,
  tags: ['autodocs'],
};

export default meta;
type InputPriceAtomStory = StoryObj<typeof InputPriceAtom>;

type Inputs = {
  price: number;
};

const InputForm = (args: any) => {
  const { register, watch } = useForm<Inputs>({
    defaultValues: { price: 0 },
  });

  return (
    <>
      <SectionAtom>
        <InputPriceAtom {...args} register={{ ...register('price', { valueAsNumber: true }) }} value={watch('price')} />
      </SectionAtom>
    </>
  );
};

export const Primary: InputPriceAtomStory = {
  render: (args) => <InputForm {...args} />,
  args: {
    placeholder: '원가를 입력하세요.',
  },
};
