import { Meta, StoryObj } from '@storybook/react';
import ButtonAtom, { BUTTON_COLOR, BUTTON_SIZE } from './ButtonAtom';

const meta = {
  title: 'Atomic/Buttons/Button',
  component: ButtonAtom,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonAtom>;

export default meta;
type ButtonAtomStory = StoryObj<typeof meta>;

/**
 * 기본형 버튼입니다.
 *
 */
export const Primary: ButtonAtomStory = {
  args: {
    children: '버튼',
  },
};

/**
 * 작은 사이즈의 버튼입니다.
 */
export const SmallButton: ButtonAtomStory = {
  args: {
    children: '버튼',
    size: BUTTON_SIZE.SMALL,
  },
};

/**
 * 큰 사이즈의 버튼입니다.
 */
export const LargeButton: ButtonAtomStory = {
  args: {
    children: '버튼',
    size: BUTTON_SIZE.LARGE,
  },
};

/**
 * 회색 버튼입니다.<br/>
 * 주로 부정적인 버튼 (확인, 취소 중 취소)에 적용합니다.
 */
export const GrayButton: ButtonAtomStory = {
  args: {
    children: '버튼',
    color: BUTTON_COLOR.GRAY,
  },
};

/**
 * 가로 영역에 꽉찬 버튼형입니다.
 */
export const FullWidthButton: ButtonAtomStory = {
  args: {
    children: '버튼',
    full: true,
  },
};

/**
 * imageSrc에 이미지 경로를 입력합니다. <br/>
 * 주로 소셜로그인 버튼에 사용됩니다.
 */
export const ImageButton: ButtonAtomStory = {
  args: {
    children: '구글 로그인',
    imageSrc: '/images/googleLogo.png',
    full: true,
    className: 'bg-white border text-fontColor',
  },
};
