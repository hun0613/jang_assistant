import { Meta, StoryObj } from '@storybook/react';
import LabelAtom from './LabelAtom';
import SectionAtom from '../layouts/SectionAtom';

const meta: Meta<typeof LabelAtom> = {
  title: 'Atomic/Form/Label',
  component: LabelAtom,
  tags: ['autodocs'],
};

export default meta;
type LabelAtomStory = StoryObj<typeof LabelAtom>;

const Template: LabelAtomStory = {
  render: (args) => {
    return (
      <SectionAtom>
        <LabelAtom {...args} />
      </SectionAtom>
    );
  },
};

export const Primary: LabelAtomStory = {
  ...Template,
  args: {
    title: '라벨 제목',
    description: '이것은 라벨 설명입니다.',
    required: true,
  },
};
