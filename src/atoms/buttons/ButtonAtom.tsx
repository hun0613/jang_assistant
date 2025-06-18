import { mergeClassNames } from '@/utils/domUtil';
import Image from 'next/image';

export enum BUTTON_COLOR {
  POINT = 'POINT',
  GRAY = 'GRAY',
}

export enum BUTTON_SIZE {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export type ButtonAtomProps = {
  imageSrc?: string;
  color?: BUTTON_COLOR;
  full?: boolean;
  type?: 'button' | 'submit';
  size?: BUTTON_SIZE;
} & JSX.IntrinsicElements['button'];

const ButtonAtom: React.FC<ButtonAtomProps> = (props) => {
  const {
    imageSrc,
    color = BUTTON_COLOR.POINT,
    full = false,
    size = BUTTON_SIZE.MEDIUM,
    children,
    className,
    disabled,
    type = 'button',
    ...rest
  } = props;

  return (
    <button
      type={type}
      className={mergeClassNames(
        'px-6 font-BMJUA bg-pointColor text-white text-xl leading-none rounded-xl relative flex justify-center items-center',
        {
          'bg-grayBtnColor text-white': color === BUTTON_COLOR.GRAY,
          'py-3': size === BUTTON_SIZE.SMALL,
          'py-4': size === BUTTON_SIZE.MEDIUM,
          'py-5': size === BUTTON_SIZE.LARGE,
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
