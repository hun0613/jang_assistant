import DescriptionTextAtom from './DescriptionTextAtom';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atomic/Text/DescriptionText',
  component: DescriptionTextAtom,
  tags: ['autodocs'],
} satisfies Meta<typeof DescriptionTextAtom>;

export default meta;
type DescriptionTextAtomStory = StoryObj<typeof meta>;

export const Primary: DescriptionTextAtomStory = {
  args: {
    children: '기본 설명 텍스트',
  },
};
