import ButtonAtom from '@/atoms/buttons/ButtonAtom';
import CounterAtom from '@/atoms/forms/CounterAtom';
import InputAtom from '@/atoms/forms/InputAtom';
import PopupAtom from '@/atoms/popups/PopupAtom';
import FormMolecule from '@/molecules/forms/FormMolecule';
import { useForm } from 'react-hook-form';

type AddCartItemModalCompProps = {} & React.ComponentProps<typeof PopupAtom>;

export type CartItemInput = {
  name: string;
  quantity: number;
};

const AddCartItemModalComp: React.FC<AddCartItemModalCompProps> = (props) => {
  const { open, handleClose, handleOpen, children, ...rest } = props;

  const { register, setValue, watch, handleSubmit } = useForm<CartItemInput>({
    defaultValues: {
      name: '',
      quantity: 1,
    },
  });

  const handleAddCartItem = (data: CartItemInput) => {
    console.log('장바구니 품목 추가:', data);
  };

  return (
    <PopupAtom open={open} handleClose={handleClose} handleOpen={handleOpen} {...rest}>
      <form onSubmit={handleSubmit(handleAddCartItem)} className="w-full flex flex-col gap-2">
        <FormMolecule title="품명" required>
          <InputAtom register={{ ...register('name') }} placeholder="품명을 입력하세요" maxLength={10} value={watch('name')} />
        </FormMolecule>

        <FormMolecule title="수량">
          <CounterAtom value={watch('quantity')} control={{ fieldName: 'quantity', setValue }} />
        </FormMolecule>
        <ButtonAtom type="submit" disabled={!watch('name')} className="mt-5">
          추가
        </ButtonAtom>
      </form>
    </PopupAtom>
  );
};

export default AddCartItemModalComp;
