import ButtonAtom, { BUTTON_COLOR } from '@/atoms/buttons/ButtonAtom';
import CounterAtom from '@/atoms/forms/CounterAtom';
import InputPriceAtom from '@/atoms/forms/InputPriceAtom';
import LabelAtom from '@/atoms/forms/LabelAtom';
import PopupAtom, { PopupActionWrapperAtom } from '@/atoms/popups/PopupAtom';
import DescriptionTextAtom from '@/atoms/texts/DescriptionTextAtom';
import TitleTextAtom from '@/atoms/texts/TitleTextAtom';
import { CART_ITEM_STATUS } from '@/enums/carts/cartEnums';
import FormMolecule from '@/molecules/forms/FormMolecule';
import { CartItemType } from '@/types/carts/cartType';
import Image from 'next/image';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

type PickItemModalCompProps = {
  updateItemOption: {
    updateItem: (index: number, value: CartItemType) => void;
    item?: CartItemType;
    index: number;
  };
} & React.ComponentProps<typeof PopupAtom>;

export type PickItemInput = Pick<CartItemType, 'quantity' | 'price'>;

const PickItemModalComp: React.FC<PickItemModalCompProps> = (props) => {
  const { updateItemOption, open, handleClose, handleOpen, ...rest } = props;
  const { item, updateItem, index } = updateItemOption;

  const { register, setValue, watch, reset } = useForm<PickItemInput>({
    defaultValues: {
      quantity: 0,
      price: 0,
    },
  });

  const calculateTotalPrice = useMemo(() => {
    const price = watch('price') || 0;
    const quantity = watch('quantity') || 0;

    return price * quantity || 0;
  }, [watch('price'), watch('quantity')]);

  const handlePickItem = () => {
    if (!!item) {
      updateItem(index, {
        ...item,
        quantity: watch('quantity'),
        price: watch('price'),
        status: CART_ITEM_STATUS.IN_CART,
      });
    }
    handleClose();
  };

  useEffect(() => {
    if (open && !!item) {
      reset({ quantity: item.quantity, price: item.price || 0 });
    }
  }, [item, open]);

  if (!item) return null;

  return (
    <PopupAtom open={open} handleClose={handleClose} handleOpen={handleClose} {...rest}>
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Image src={'/images/logo.png'} width={50} height={40} alt="logo" />
        <div className="flex flex-col justify-center items-center gap-1">
          <TitleTextAtom className="text-pointColor">{item.name}</TitleTextAtom>
          <p className="text-fontColor text-lg">카트에 담으시겠습니까?</p>
          <DescriptionTextAtom>수량 체크 및 원가 입력 후 담기를 눌러주세요!</DescriptionTextAtom>
        </div>

        <FormMolecule title="수량">
          <CounterAtom value={watch('quantity')} control={{ fieldName: 'quantity', setValue }} />
        </FormMolecule>

        <FormMolecule title="단가">
          <InputPriceAtom
            register={{ ...register('price', { valueAsNumber: true }) }}
            value={watch('price') || 0}
            placeholder="단가를 입력하세요."
          />
        </FormMolecule>

        <div className="h-1 w-full border-b-[0.5px] border-grayBtnColor"></div>

        <div className="w-full flex justify-between items-center">
          <LabelAtom title="합계" />
          <span className="flex justify-center items-center gap-1">
            <p className="text-xl text-pointColor">{calculateTotalPrice.toLocaleString()}</p>
            <p className="text-xl text-fontColor">원</p>
          </span>
        </div>

        <PopupActionWrapperAtom>
          <ButtonAtom onClick={() => handleClose()} full color={BUTTON_COLOR.GRAY}>
            취소
          </ButtonAtom>
          <ButtonAtom onClick={handlePickItem} full disabled={!isNaN(Number(watch('price'))) && !watch('quantity')}>
            담기
          </ButtonAtom>
        </PopupActionWrapperAtom>
      </div>
    </PopupAtom>
  );
};

export default PickItemModalComp;
