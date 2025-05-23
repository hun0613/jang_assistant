import { Meta, StoryObj } from '@storybook/react';
import PageAtom from './PageAtom';

const meta: Meta<typeof PageAtom> = {
  title: 'Atomic/Layout/Page',
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

export const Primary: PageAtomStory = {
  ...Template,
};
