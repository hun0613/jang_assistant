import ButtonAtom from '@/atoms/buttons/ButtonAtom';
import CounterAtom from '@/atoms/forms/CounterAtom';
import InputTextAtom from '@/atoms/forms/InputTextAtom';
import PopupAtom from '@/atoms/popups/PopupAtom';
import { CART_ITEM_STATUS } from '@/enums/carts/cartEnums';
import FormMolecule from '@/molecules/forms/FormMolecule';
import { CartItemType } from '@/types/carts/cartType';
import { localStorageUtil } from '@/utils/storageUtil';
import { useForm } from 'react-hook-form';

type AddCartItemModalCompProps = {
  addItem: (item: CartItemType) => void;
} & React.ComponentProps<typeof PopupAtom>;

export type CartItemInput = Pick<CartItemType, 'name' | 'quantity'>;

const AddCartItemModalComp: React.FC<AddCartItemModalCompProps> = (props) => {
  const { addItem, open, handleClose, handleOpen, children, ...rest } = props;

  const { register, setValue, watch, reset } = useForm<CartItemInput>({
    defaultValues: {
      name: '',
      quantity: 1,
    },
  });

  const handleAddCartItem = () => {
    const item: CartItemType = {
      id: Date.now(), // 임시 ID 생성
      name: watch('name'),
      quantity: watch('quantity'),
      status: CART_ITEM_STATUS.IN_LIST, // 기본 상태 설정
    };

    addItem(item);

    // localStorage
    const cartItems = localStorageUtil.getArray('cartItems');
    cartItems.push(item);
    localStorageUtil.setObject('cartItems', cartItems);

    reset({ name: '', quantity: 1 });
    handleClose();
  };

  return (
    <PopupAtom open={open} handleClose={handleClose} handleOpen={handleOpen} {...rest}>
      <div className="w-full flex flex-col gap-2">
        <FormMolecule title="품명" required>
          <InputTextAtom register={{ ...register('name') }} placeholder="품명을 입력하세요" maxLength={10} value={watch('name')} />
        </FormMolecule>

        <FormMolecule title="수량">
          <CounterAtom value={watch('quantity')} control={{ fieldName: 'quantity', setValue }} />
        </FormMolecule>
        <ButtonAtom onClick={handleAddCartItem} disabled={!watch('name')} className="mt-5">
          추가
        </ButtonAtom>
      </div>
    </PopupAtom>
  );
};

export default AddCartItemModalComp;
