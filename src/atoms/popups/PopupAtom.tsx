type PopupAtomProps = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
} & JSX.IntrinsicElements['div'];

const PopupAtom: React.FC<PopupAtomProps> = (props) => {
  const { open, handleOpen, handleClose, children, ...rest } = props;

  const handleClosePopup = () => {
    handleClose();
  };

  return (
    <>
      {open && (
        <div
          onClick={handleClosePopup}
          className="fixed w-full h-full top-0 p-5 left-0 flex justify-center items-center bg-fontColor/70 z-50"
        >
          <div onClick={(e) => e.stopPropagation()} className="max-w-[400px] bg-white w-full rounded-xl px-5 py-7">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default PopupAtom;
