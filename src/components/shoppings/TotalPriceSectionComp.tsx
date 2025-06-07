import SectionAtom from '@/atoms/layouts/SectionAtom';
import { CART_ITEM_STATUS } from '@/enums/carts/cartEnums';
import { CartItemType } from '@/types/carts/cartType';
import { useMemo } from 'react';

type TotalPriceSectionCompProps = {
  shoppingItems: CartItemType[];
} & React.ComponentProps<typeof SectionAtom>;

const TotalPriceSectionComp: React.FC<TotalPriceSectionCompProps> = (props) => {
  const { shoppingItems } = props;

  console.log({ shoppingItems });

  const totalPrice = useMemo(() => {
    return (
      shoppingItems
        .filter((item) => item.status === CART_ITEM_STATUS.IN_CART)
        .reduce((acc, cur) => {
          const currentItemPrice = cur.price || 0;

          return acc + currentItemPrice;
        }, 0) || 0
    );
  }, [shoppingItems]);

  return (
    <SectionAtom className="mt-5 flex flex-row justify-between">
      <span className="text-2xl">예상 결제금액</span>
      <div className="flex gap-1">
        <span className="text-2xl text-pointColor">{totalPrice.toLocaleString()}</span>
        <span className="text-2xl">원</span>
      </div>
    </SectionAtom>
  );
};

export default TotalPriceSectionComp;
