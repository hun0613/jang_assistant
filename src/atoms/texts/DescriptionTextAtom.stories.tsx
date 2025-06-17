import DescriptionTextAtom from './DescriptionTextAtom';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atomic/Texts/DescriptionText',
  component: DescriptionTextAtom,
  tags: ['autodocs'],
} satisfies Meta<typeof DescriptionTextAtom>;

export default meta;
type DescriptionTextAtomStory = StoryObj<typeof meta>;

/**
 * 주로 부연 설명 텍스트에 적용되는 Text Atom Component입니다.
 */
export const Primary: DescriptionTextAtomStory = {
  args: {
    children: '기본 설명 텍스트',
  },
};
