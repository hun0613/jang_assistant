import { Meta, StoryObj } from '@storybook/react';
import SectionAtom from '../layouts/SectionAtom';
import CounterAtom from './CounterAtom';
import { useForm } from 'react-hook-form';
import PageAtom from '../layouts/PageAtom';
import PageTemplate from '@/templates/layouts/PageTemplate';

const meta: Meta<typeof CounterAtom> = {
  title: 'Atomic/Form/Counter',
  component: CounterAtom,
  tags: ['autodocs'],
};

export default meta;
type CounterAtomStory = StoryObj<typeof CounterAtom>;

type Inputs = {
  quantity: number;
};

const CounterTemplate = (args: any) => {
  const { setValue, watch } = useForm<Inputs>({
    defaultValues: { quantity: 1 },
  });

  return (
    <PageAtom>
      <PageTemplate title={'Counter Atom'} description={'Counter Atom 컴포넌트 예시'}>
        <SectionAtom>
          <CounterAtom
            {...args}
            value={watch('quantity')}
            control={{
              fieldName: 'quantity',
              setValue: setValue,
            }}
          />
        </SectionAtom>
      </PageTemplate>
    </PageAtom>
  );
};

export const Primary: CounterAtomStory = {
  render: () => <CounterTemplate />,
};
