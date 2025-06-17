import { Meta, StoryObj } from '@storybook/react';
import SectionAtom from '../layouts/SectionAtom';
import PageAtom from '../layouts/PageAtom';
import PageTemplate from '@/templates/layouts/PageTemplate';
import CartListItemAtom from './CartListItemAtom';
import { CART_ITEM_STATUS } from '@/enums/carts/cartEnums';
import { CartItemType } from '@/types/carts/cartType';

const meta: Meta<typeof CartListItemAtom> = {
  title: 'Atomic/Carts/CartListItems',
  component: CartListItemAtom,
  tags: ['autodocs'],
};

export default meta;
type CartListItemAtomStory = StoryObj<typeof CartListItemAtom>;

const CartListItemTemplate = (args: any) => {
  return (
    <PageAtom>
      <PageTemplate title={'장바구니 품목 리스트 아이템'} description={'장바구니 품폭 리스트의 아이템 부분입니다.'}>
        <SectionAtom className="mt-5">
          <CartListItemAtom {...args} />
        </SectionAtom>
      </PageTemplate>
    </PageAtom>
  );
};

/**
 * 품목 리스트의 아이템에 적용되는 컴포넌트입니다. <br/>
 * 카트에 담기 전 상태의 아이템입니다.
 */
export const Primary: CartListItemAtomStory = {
  render: (args) => <CartListItemTemplate {...args} />,
  args: {
    cartItem: {
      id: 1,
      name: '우유',
      quantity: 3,
      status: CART_ITEM_STATUS.IN_LIST,
    },
  },
};

/**
 * 카트에 담긴 아이템 컴포넌트입니다.
 */
export const InCartItem: CartListItemAtomStory = {
  render: (args) => <CartListItemTemplate {...args} />,
  args: {
    cartItem: {
      id: 1,
      name: '우유',
      quantity: 3,
      status: CART_ITEM_STATUS.IN_CART,
      price: 30000,
    },
  },
};
