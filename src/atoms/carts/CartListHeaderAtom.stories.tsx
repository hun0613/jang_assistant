import { Meta, StoryObj } from '@storybook/react';
import SectionAtom from '../layouts/SectionAtom';
import PageAtom from '../layouts/PageAtom';
import PageTemplate from '@/templates/layouts/PageTemplate';
import CartListHeaderAtom from './CartListHeaderAtom';

const meta: Meta<typeof CartListHeaderAtom> = {
  title: 'Atomic/Carts/CartListHeader',
  component: CartListHeaderAtom,
  tags: ['autodocs'],
};

export default meta;
type CartListHeaderAtomStory = StoryObj<typeof CartListHeaderAtom>;

const CartListHeaderTemplate = (args: any) => {
  return (
    <PageAtom>
      <PageTemplate title={'장바구니 품목 리스트 헤더'} description={'장바구니 품폭 리스트의 컬럼 부분입니다.'}>
        <SectionAtom className="mt-5">
          <CartListHeaderAtom {...args} />
        </SectionAtom>
      </PageTemplate>
    </PageAtom>
  );
};

/**
 * 장바구니나 쇼핑페이지의 품목 리스트 부분의 상단 헤더 부분에 적용되는 컴포넌트 입니다.
 */
export const Primary: CartListHeaderAtomStory = {
  render: () => <CartListHeaderTemplate />,
};
