import ButtonAtom, { BUTTON_COLOR } from '@/atoms/buttons/ButtonAtom';
import PopupAtom, { PopupActionWrapperAtom } from '@/atoms/popups/PopupAtom';
import TitleTextAtom from '@/atoms/texts/TitleTextAtom';
import { CART_ITEM_STATUS } from '@/enums/carts/cartEnums';
import { CartItemType } from '@/types/carts/cartType';
import Image from 'next/image';

type DropItemModalProps = {
  dropItemOption: {
    dropItem: (index: number, value: CartItemType) => void;
    item?: CartItemType;
    index: number;
  };
} & React.ComponentProps<typeof PopupAtom>;

const DropItemModalComp: React.FC<DropItemModalProps> = (props) => {
  const { dropItemOption, open, handleClose, handleOpen, ...rest } = props;
  const { dropItem, item, index } = dropItemOption;

  const handleDropItem = () => {
    if (!!item) {
      dropItem(index, {
        ...item,
        status: CART_ITEM_STATUS.IN_LIST,
      });
    }
    handleClose();
  };

  return (
    <PopupAtom open={open} handleClose={handleClose} handleOpen={handleOpen} {...rest}>
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Image src={'/images/logo.png'} width={50} height={40} alt="logo" />
        <div className="flex flex-col justify-center items-center gap-1">
          <TitleTextAtom className="text-pointColor">{item?.name}</TitleTextAtom>
          <p className="text-fontColor text-lg">카트에서 빼시겠습니까?</p>
        </div>

        <PopupActionWrapperAtom>
          <ButtonAtom onClick={() => handleClose()} full color={BUTTON_COLOR.GRAY}>
            취소
          </ButtonAtom>
          <ButtonAtom onClick={handleDropItem} full>
            빼기
          </ButtonAtom>
        </PopupActionWrapperAtom>
      </div>
    </PopupAtom>
  );
};

export default DropItemModalComp;
