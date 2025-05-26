import { CART_ITEM_STATUS } from '@/enums/carts/cartEnums';
import { CartItemType } from '@/types/carts/cartType';
import { mergeClassNames } from '@/utils/domUtil';

type CartListItemAtomProps = {
  cartItem: CartItemType;
} & JSX.IntrinsicElements['div'];

const CartListItemAtom: React.FC<CartListItemAtomProps> = (props) => {
  const { cartItem, className, ...rest } = props;
  const { id, name, quantity, status } = cartItem;

  return (
    <div
      className={mergeClassNames(
        'relative cursor-pointer overflow-hidden w-full border-[0.5px] border-grayBtnColor/50 rounded-xl p-4 flex justify-between items-center',
        className,
      )}
      {...rest}
    >
      <span className="text-fontColor text-lg">{name}</span>
      <span className="text-fontColor text-lg">{quantity}</span>
      {status === CART_ITEM_STATUS.IN_CART && (
        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center text-white text-lg bg-pointColor/70">
          담기 완료
        </div>
      )}
    </div>
  );
};

export default CartListItemAtom;
