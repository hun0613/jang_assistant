import { mergeClassNames } from '@/utils/domUtil';

type CartListHeaderAtomProps = {} & JSX.IntrinsicElements['div'];

const CartListHeaderAtom: React.FC<CartListHeaderAtomProps> = (props) => {
  const { className } = props;

  return (
    <div
      className={mergeClassNames('w-full flex justify-between items-center px-3 py-2 border-b-[0.5px] border-grayBtnColor/50', className)}
    >
      <span className="text-fontColor/50 text-lg">품명</span>
      <span className="text-fontColor/50 text-lg">수량</span>
    </div>
  );
};

export default CartListHeaderAtom;
