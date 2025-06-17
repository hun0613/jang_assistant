import { Meta, StoryObj } from '@storybook/react';
import SectionAtom from './SectionAtom';

const meta: Meta<typeof SectionAtom> = {
  title: 'Atomic/Layouts/Section',
  component: SectionAtom,
  tags: ['autodocs'],
};

export default meta;
type SectionAtomStory = StoryObj<typeof SectionAtom>;

const Template: SectionAtomStory = {
  render: (args) => {
    return <SectionAtom {...args}>섹션 영역입니다.</SectionAtom>;
  },
};

/**
 * 페이지의 섹션 요소들을 감싸주는 컴포넌트 입니다.
 */
export const Primary: SectionAtomStory = {
  ...Template,
};
