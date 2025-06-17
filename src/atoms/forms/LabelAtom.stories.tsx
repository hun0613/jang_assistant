import { Meta, StoryObj } from '@storybook/react';
import LabelAtom from './LabelAtom';
import SectionAtom from '../layouts/SectionAtom';

const meta: Meta<typeof LabelAtom> = {
  title: 'Atomic/Forms/Label',
  component: LabelAtom,
  tags: ['autodocs'],
};

export default meta;
type LabelAtomStory = StoryObj<typeof LabelAtom>;

const Template: LabelAtomStory = {
  render: (args) => {
    return (
      <SectionAtom>
        <LabelAtom {...args} />
      </SectionAtom>
    );
  },
};

/**
 * Form 요소 상단에 들어가는 Label Atom Component입니다. <br />
 * 필수 설정 (required)을 하면 라벨 좌측에 '필수입력'이 표시됩니다.
 */
export const Primary: LabelAtomStory = {
  ...Template,
  args: {
    title: '라벨 제목',
    description: '이것은 라벨 설명입니다.',
    required: true,
  },
};
