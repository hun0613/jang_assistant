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

const ReadOnlyForm = (args: any) => {
  return (
    <SectionAtom>
      <TextAreaAtom {...args} />
    </SectionAtom>
  );
};

export const Primary: TextAreaAtomStory = {
  render: (args) => <InputForm {...args} />,
  args: {
    placeholder: '제목을 입력하세요.',
    maxLength: 100,
  },
};

/**
 * 읽기 전용으로써 textArea의 입력값 그대로(줄바꿈등 형식 유지) 출력해주고 싶을 때 사용합니다.
 */
export const ReadOnly: TextAreaAtomStory = {
  render: (args) => <ReadOnlyForm {...args} />,
  args: {
    placeholder: '제목을 입력하세요.',
    maxLength: 100,
    value: '읽기전용 textArea입니다.\n줄바꿈을 적용할 수 있습니다.',
    readOnly: true,
  },
};
