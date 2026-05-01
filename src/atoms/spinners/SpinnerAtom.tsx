import { mergeClassNames } from '@/utils/domUtil';

export enum SPINNER_SIZE {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

type SpinnerAtomProps = {
  size?: SPINNER_SIZE;
  color?: 'point' | 'white';
} & JSX.IntrinsicElements['div'];

const SpinnerAtom: React.FC<SpinnerAtomProps> = (props) => {
  const { size = SPINNER_SIZE.MEDIUM, color = 'point', className, ...rest } = props;

  return (
    <div
      role="status"
      className={mergeClassNames(
        'animate-spin rounded-full border-solid',
        {
          'w-4 h-4 border-2': size === SPINNER_SIZE.SMALL,
          'w-6 h-6 border-[3px]': size === SPINNER_SIZE.MEDIUM,
          'w-10 h-10 border-4': size === SPINNER_SIZE.LARGE,
          'border-disabledBtnColor border-t-pointColor': color === 'point',
          'border-white/30 border-t-white': color === 'white',
        },
        className,
      )}
      {...rest}
    />
  );
};

export default SpinnerAtom;
