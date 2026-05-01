import ButtonAtom from '@/atoms/buttons/ButtonAtom';
import CounterAtom from '@/atoms/forms/CounterAtom';
import InputTextAtom from '@/atoms/forms/InputTextAtom';
import PopupAtom from '@/atoms/popups/PopupAtom';
import FormMolecule from '@/molecules/forms/FormMolecule';
import { CartItemType } from '@/types/carts/cartType';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type AddCartItemModalCompProps = {
  onAddItem: (name: string, quantity: number) => Promise<void>;
} & React.ComponentProps<typeof PopupAtom>;

export type CartItemInput = Pick<CartItemType, 'name' | 'quantity'>;

const AddCartItemModalComp: React.FC<AddCartItemModalCompProps> = (props) => {
  const { onAddItem, open, handleClose, handleOpen, children, ...rest } = props;
  const [submitting, setSubmitting] = useState(false);

  const { register, setValue, watch, reset } = useForm<CartItemInput>({
    defaultValues: {
      name: '',
      quantity: 1,
    },
  });

  const handleAddCartItem = async () => {
    if (submitting) return;
    setSubmitting(true);
    try {
      await onAddItem(watch('name'), watch('quantity'));
      reset({ name: '', quantity: 1 });
      handleClose();
    } finally {
      setSubmitting(false);
    }
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
        <ButtonAtom onClick={handleAddCartItem} disabled={!watch('name')} loading={submitting} className="mt-5">
          추가
        </ButtonAtom>
      </div>
    </PopupAtom>
  );
};

export default AddCartItemModalComp;
