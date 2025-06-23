import SectionAtom from '@/atoms/layouts/SectionAtom';
import { CART_ITEM_STATUS } from '@/enums/carts/cartEnums';
import { CartItemType } from '@/types/carts/cartType';
import { useMemo } from 'react';

type TotalPriceSectionCompProps = {
  pickedShoppingItems: CartItemType[];
} & React.ComponentProps<typeof SectionAtom>;

const TotalPriceSectionComp: React.FC<TotalPriceSectionCompProps> = (props) => {
  const { pickedShoppingItems } = props;

  const totalPrice = useMemo(() => {
    return (
      pickedShoppingItems.reduce((acc, cur) => {
        const currentItemPrice = (cur.price || 0) * cur.quantity;

        return acc + currentItemPrice;
      }, 0) || 0
    );
  }, [pickedShoppingItems]);

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
