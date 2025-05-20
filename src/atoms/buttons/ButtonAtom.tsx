import { mergeClassNames } from '@/utils/domUtil';

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
        'px-6 py-4 bg-pointColor text-white text-xl rounded-xl',
        {
          'bg-grayBtnColor text-white': color === BUTTON_COLOR.GRAY,
          'w-full': full,
          'bg-disabledBtnColor pointer-events-none': disabled,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonAtom;
