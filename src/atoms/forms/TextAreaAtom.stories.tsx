import { Meta, StoryObj } from '@storybook/react';
import SectionAtom from '../layouts/SectionAtom';
import TextAreaAtom from './TextAreaAtom';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof TextAreaAtom> = {
  title: 'Atomic/Form/TextArea',
  component: TextAreaAtom,
  tags: ['autodocs'],
};

export default meta;
type TextAreaAtomStory = StoryObj<typeof TextAreaAtom>;

type Inputs = {
  memo: string;
};

const InputForm = (args: any) => {
  const { register, watch } = useForm<Inputs>({
    defaultValues: { memo: '' },
  });

  return (
    <>
      <SectionAtom>
        <TextAreaAtom {...args} register={{ ...register('memo') }} value={watch('memo')} />
      </SectionAtom>
    </>
  );
};

export const Primary: TextAreaAtomStory = {
  render: (args) => <InputForm {...args} />,
  args: {
    placeholder: '제목을 입력하세요.',
    maxLength: 100,
  },
};
