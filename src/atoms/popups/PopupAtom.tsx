'use client';

import { mergeClassNames } from '@/utils/domUtil';

type PopupAtomProps = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  closeOnBackdropClick?: boolean;
} & JSX.IntrinsicElements['div'];

const PopupAtom: React.FC<PopupAtomProps> = (props) => {
  const { open, handleOpen, handleClose, closeOnBackdropClick = true, children, className, ...rest } = props;

  const handleClosePopup = () => {
    handleClose();
  };

  return (
    <>
      {open && (
        <div
          onClick={closeOnBackdropClick ? handleClosePopup : undefined}
          className="fixed w-full h-full top-0 p-5 left-0 flex justify-center items-center bg-fontColor/70 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={mergeClassNames('max-w-[400px] bg-white w-full rounded-xl px-5 py-7', className)}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default PopupAtom;

type PopupActionWrapperAtomProps = {} & JSX.IntrinsicElements['div'];

export const PopupActionWrapperAtom: React.FC<PopupActionWrapperAtomProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div className={mergeClassNames('w-full flex gap-4', className)} {...rest}>
      {children}
    </div>
  );
};
