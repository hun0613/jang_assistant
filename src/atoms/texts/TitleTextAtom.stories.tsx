import TitleTextAtom from './TitleTextAtom';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atomic/Text/TitleText',
  component: TitleTextAtom,
  tags: ['autodocs'],
} satisfies Meta<typeof TitleTextAtom>;

export default meta;
type TitleTextAtomStory = StoryObj<typeof meta>;

export const Primary: TitleTextAtomStory = {
  args: {
    children: '기본 제목 텍스트',
  },
};

export const Underline: TitleTextAtomStory = {
  args: {
    children: '밑줄있는 제목 텍스트',
    underline: true,
  },
};
