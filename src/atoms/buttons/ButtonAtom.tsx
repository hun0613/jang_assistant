import { mergeClassNames } from '@/utils/domUtil';
import Image from 'next/image';

export enum BUTTON_COLOR {
  POINT = 'POINT',
  GRAY = 'GRAY',
}

export type ButtonAtomProps = {
  imageSrc?: string;
  color?: BUTTON_COLOR;
  full?: boolean;
} & JSX.IntrinsicElements['button'];

const ButtonAtom: React.FC<ButtonAtomProps> = (props) => {
  const { imageSrc, color = BUTTON_COLOR.POINT, full = false, children, className, disabled, ...rest } = props;

  return (
    <button
      type="button"
      className={mergeClassNames(
        'px-6 py-5 bg-pointColor text-white text-xl leading-none rounded-xl relative flex justify-center items-center',
        {
          'bg-grayBtnColor text-white': color === BUTTON_COLOR.GRAY,
          'w-full': full,
          'bg-disabledBtnColor pointer-events-none': disabled,
        },
        className,
      )}
      {...rest}
    >
      {!!imageSrc && <Image src={imageSrc} className="absolute left-5" width={30} height={40} alt="logo" />}
      {children}
    </button>
  );
};

export default ButtonAtom;
