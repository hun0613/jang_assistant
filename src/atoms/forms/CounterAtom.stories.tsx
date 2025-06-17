import { Meta, StoryObj } from '@storybook/react';
import SectionAtom from '../layouts/SectionAtom';
import CounterAtom from './CounterAtom';
import { useForm } from 'react-hook-form';
import PageAtom from '../layouts/PageAtom';
import PageTemplate from '@/templates/layouts/PageTemplate';

const meta: Meta<typeof CounterAtom> = {
  title: 'Atomic/Forms/Counter',
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

/**
 * 1부터 1씩 증가, 감소하는 카운터 입니다. <br/>
 * 주로 수량 체크에 쓰이는 Atom 컴포넌트입니다.
 */
export const Primary: CounterAtomStory = {
  render: () => <CounterTemplate />,
};
