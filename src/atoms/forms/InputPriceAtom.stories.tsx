import { Meta, StoryObj } from '@storybook/react';
import SectionAtom from '../layouts/SectionAtom';
import InputPriceAtom from './InputPriceAtom';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof InputPriceAtom> = {
  title: 'Atomic/Forms/InputPrice',
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

/**
 * 가격을 입력하는 Atom Component 입니다. <br/>
 * input 창에 focus를 했을 때, 효율적인 입력을 위해 내부 숫자가 모두 선택됩니다.
 */
export const Primary: InputPriceAtomStory = {
  render: (args) => <InputForm {...args} />,
  args: {
    placeholder: '원가를 입력하세요.',
  },
};
