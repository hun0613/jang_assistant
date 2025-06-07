import ButtonAtom from '@/atoms/buttons/ButtonAtom';
import TextAreaAtom from '@/atoms/forms/TextAreaAtom';
import PopupAtom from '@/atoms/popups/PopupAtom';
import TitleTextAtom from '@/atoms/texts/TitleTextAtom';

type MemoModalProps = {
  memo: string;
} & React.ComponentProps<typeof PopupAtom>;

const MemoModalComp: React.FC<MemoModalProps> = (props) => {
  const { memo, open, handleClose, handleOpen, ...rest } = props;

  return (
    <PopupAtom className="flex flex-col gap-3" open={open} handleOpen={handleOpen} handleClose={handleClose} {...rest}>
      <TitleTextAtom>메모</TitleTextAtom>
      <TextAreaAtom value={memo} readOnly />
      <ButtonAtom full onClick={() => handleClose()}>
        확인
      </ButtonAtom>
    </PopupAtom>
  );
};

export default MemoModalComp;
