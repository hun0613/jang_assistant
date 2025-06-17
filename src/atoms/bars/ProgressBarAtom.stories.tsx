/**
 * ProgressBarAtom.stories.tsx
 * Storybook에서는 transition이 적용되지 않으므로 실제 애니메이션 동작은 컴포넌트에서 확인하세요!
 */
import { Meta, StoryObj } from '@storybook/react';
import ProgressBarAtom from './ProgressBarAtom';

const meta = {
  title: 'Atomic/Bars/Bar',
  component: ProgressBarAtom,
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressBarAtom>;

export default meta;
type ProgressBarAtomStory = StoryObj<typeof ProgressBarAtom>;

const ProgressBarTemplate = (args: any) => {
  return (
    <div className="w-full font-BMJUA">
      <ProgressBarAtom {...args} />
    </div>
  );
};

/**
 * ProgressBar는 rate가 올라갈 때 transition이 적용되어 애니메이션 효과를 줍니다.
 */
export const ProgressBar: ProgressBarAtomStory = {
  render: (args) => <ProgressBarTemplate {...args} />,
  args: {
    rate: 10,
    showIcon: true,
    showRate: true,
  },
};

/**
 * rate: 100, animationDuration: 5000 <br />
 * 위의 예시는 5초 동안 100%로 진행되는 타이머 형태의 프로그레스 바입니다. <br />
 * Storybook에서는 최초 랜더링 시 transition이 적용되지 않으므로 rate를 0으로 설정 후, 다시 100으로 변경하면 애니메이션 확인 가능합니다.
 */
export const Timer: ProgressBarAtomStory = {
  render: (args) => <ProgressBarTemplate {...args} />,
  args: {
    rate: 100,
    animationDuration: 5000, // 5 seconds
  },
};
