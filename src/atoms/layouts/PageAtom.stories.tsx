import { Meta, StoryObj } from '@storybook/react';
import PageAtom from './PageAtom';

const meta: Meta<typeof PageAtom> = {
  title: 'Atomic/Layouts/Page',
  component: PageAtom,
  tags: ['autodocs'],
};

export default meta;
type PageAtomStory = StoryObj<typeof PageAtom>;

const Template: PageAtomStory = {
  render: (args) => {
    return (
      <PageAtom {...args}>
        <div className="w-full min-h-[calc(100vh-97px)] flex flex-col pb-28"></div>
      </PageAtom>
    );
  },
};

/**
 * 모바일 뷰 width 값이 설정되어 있는 Page Layout입니다. <br/>
 * 모든 페이지는 PageAtom이 부모컴포넌트여야 합니다.
 */
export const Primary: PageAtomStory = {
  ...Template,
};
