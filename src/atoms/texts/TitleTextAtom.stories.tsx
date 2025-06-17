import TitleTextAtom from './TitleTextAtom';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atomic/Texts/TitleText',
  component: TitleTextAtom,
  tags: ['autodocs'],
} satisfies Meta<typeof TitleTextAtom>;

export default meta;
type TitleTextAtomStory = StoryObj<typeof meta>;

/**
 * 페이지의 제목이나 섹션의 제목에 적용되는 TextAtom Component입니다.
 */
export const Primary: TitleTextAtomStory = {
  args: {
    children: '기본 제목 텍스트',
  },
};

/**
 * 페이지나 섹션의 타이틀을 강조하고 싶을 때 사용됩니다.
 */
export const Underline: TitleTextAtomStory = {
  args: {
    children: '밑줄있는 제목 텍스트',
    underline: true,
  },
};
