import { Meta, StoryObj } from '@storybook/react';
import SectionAtom from './SectionAtom';

const meta: Meta<typeof SectionAtom> = {
  title: 'Atomic/Layout/Section',
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

export const Primary: SectionAtomStory = {
  ...Template,
};
