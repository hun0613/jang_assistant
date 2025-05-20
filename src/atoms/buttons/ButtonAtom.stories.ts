import { Meta, StoryObj } from '@storybook/react';
import ButtonAtom, { BUTTON_COLOR } from './ButtonAtom';

const meta = {
  title: 'Atomic/Button',
  component: ButtonAtom,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonAtom>;

export default meta;
type ButtonAtomStory = StoryObj<typeof meta>;

export const Primary: ButtonAtomStory = {
  args: {
    children: '버튼',
  },
};

export const GrayButton: ButtonAtomStory = {
  args: {
    children: '버튼',
    color: BUTTON_COLOR.GRAY,
  },
};

export const FullWidthButton: ButtonAtomStory = {
  args: {
    children: '버튼',
    full: true,
  },
};

export const ImageButton: ButtonAtomStory = {
  args: {
    children: '구글 로그인',
    imageSrc: '/images/googleLogo.png',
    full: true,
    className: 'bg-white border text-fontColor',
  },
};
