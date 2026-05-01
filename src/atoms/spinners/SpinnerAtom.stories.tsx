import { Meta, StoryObj } from '@storybook/react';
import SpinnerAtom, { SPINNER_SIZE } from './SpinnerAtom';

const meta = {
  title: 'Atomic/Spinners/Spinner',
  component: SpinnerAtom,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(SPINNER_SIZE),
    },
    color: {
      control: 'select',
      options: ['point', 'white'],
    },
  },
} satisfies Meta<typeof SpinnerAtom>;

export default meta;
type SpinnerAtomStory = StoryObj<typeof SpinnerAtom>;

/**
 * 기본 스피너 (Point Color)
 */
export const Default: SpinnerAtomStory = {
  args: {
    size: SPINNER_SIZE.MEDIUM,
    color: 'point',
  },
};

/**
 * 사이즈별 스피너 비교
 */
export const Sizes: SpinnerAtomStory = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <SpinnerAtom size={SPINNER_SIZE.SMALL} />
        <span className="text-sm text-grayBtnColor font-BMJUA">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <SpinnerAtom size={SPINNER_SIZE.MEDIUM} />
        <span className="text-sm text-grayBtnColor font-BMJUA">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <SpinnerAtom size={SPINNER_SIZE.LARGE} />
        <span className="text-sm text-grayBtnColor font-BMJUA">Large</span>
      </div>
    </div>
  ),
};

/**
 * 버튼 내부에서 사용하는 White 스피너
 */
export const WhiteOnDark: SpinnerAtomStory = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="bg-pointColor rounded-xl px-6 py-4 flex justify-center items-center">
        <SpinnerAtom size={SPINNER_SIZE.SMALL} color="white" />
      </div>
      <div className="bg-grayBtnColor rounded-xl px-6 py-4 flex justify-center items-center">
        <SpinnerAtom size={SPINNER_SIZE.SMALL} color="white" />
      </div>
    </div>
  ),
};
