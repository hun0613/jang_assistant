import { Meta, StoryObj } from '@storybook/react';
import PageTemplate from './PageTemplate';
import PageAtom from '@/atoms/layouts/PageAtom';

const meta: Meta<typeof PageTemplate> = {
  title: 'Template/Layouts/PageTemplate',
  component: PageTemplate,
  tags: ['autodocs'],
};

export default meta;
type PageTemplateStory = StoryObj<typeof PageTemplate>;

const PageStoryTemplate = (args: any) => {
  return (
    <PageAtom>
      <PageTemplate {...args} title={'페이지 템플릿'} description={'페이지템플릿 입니다.'}></PageTemplate>
    </PageAtom>
  );
};

/**
 * 페이지의 기본 템플릿 입니다.
 */
export const Primary: PageTemplateStory = {
  render: (args) => <PageStoryTemplate {...args} />,
};

/**
 * 페이지 타이틀에 강조를 주고 싶을 때 사용합니다.
 */
export const Underline: PageTemplateStory = {
  render: (args) => <PageStoryTemplate {...args} />,
  args: {
    titleUnderline: true,
  },
};
