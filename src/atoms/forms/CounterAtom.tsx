import { UseFormSetValue } from 'react-hook-form';
import ButtonAtom from '../buttons/ButtonAtom';
import { mergeClassNames } from '@/utils/domUtil';

type CounterAtomProps = {
  control: {
    fieldName: string;
    setValue: UseFormSetValue<any>;
  };
  value: number;
} & JSX.IntrinsicElements['div'];

const CounterAtom: React.FC<CounterAtomProps> = (props) => {
  const { control, value, className, ...rest } = props;
  const { fieldName, setValue } = control;

  const handleDecrease = () => {
    if (value > 1) {
      setValue(fieldName, value - 1);
    }
  };
  const handleIncrease = () => {
    setValue(fieldName, value + 1);
  };

  return (
    <div className={mergeClassNames('w-full flex justify-between items-center', className)} {...rest}>
      <CounterButton onClick={handleDecrease} disabled={value <= 1}>
        -
      </CounterButton>
      <span className="text-xl p-2 rounded-xl text-fontColor w-40 text-center mx-5 bg-bgColor">{value}</span>
      <CounterButton onClick={handleIncrease}>+</CounterButton>
    </div>
  );
};

export default CounterAtom;

type CounterButtonProps = {} & JSX.IntrinsicElements['button'];

const CounterButton: React.FC<CounterButtonProps> = (props) => {
  const { children, disabled, className, ...rest } = props;

  return (
    <button
      {...rest}
      type="button"
      className={mergeClassNames(
        'text-2xl w-9 text-white aspect-square rounded-lg pt-1 leading-none bg-pointColor flex justify-center items-center',
        {
          'bg-disabledBtnColor pointer-events-none': disabled,
        },
      )}
    >
      {children}
    </button>
  );
};
