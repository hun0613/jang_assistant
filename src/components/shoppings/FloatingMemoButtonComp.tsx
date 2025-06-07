import usePopup from '@/hooks/popup/usePopup';
import Image from 'next/image';
import MemoModalComp from './MemoModalComp';

type FloatingMemoButtonProps = {
  memo: string;
} & JSX.IntrinsicElements['button'];

const FloatingMemoButtonComp: React.FC<FloatingMemoButtonProps> = (props) => {
  const { memo, ...rest } = props;

  const { open, handleClose, handleOpen } = usePopup({ id: 'memoModal' });

  const handleClickButton = () => {
    handleOpen();
  };

  return (
    <>
      <button
        onClick={handleClickButton}
        className="fixed z-30 bottom-10 right-5 p-4 rounded-full w-[70px] aspect-square flex justify-center items-center bg-white/80 backdrop-blur-sm shadow-item"
        {...rest}
      >
        <Image src={'/images/memo.png'} width={50} height={40} alt="memoIcon" />
      </button>
      <MemoModalComp open={open} handleOpen={handleOpen} handleClose={handleClose} memo={memo} />
    </>
  );
};

export default FloatingMemoButtonComp;
