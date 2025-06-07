import { ChangeEvent, useRef } from 'react';

type InputPriceAtomProps = {
  placeholder: string;
  register: any;
  value: number;
} & JSX.IntrinsicElements['input'];

const InputPriceAtom: React.FC<InputPriceAtomProps> = (props) => {
  const { placeholder, register, value } = props;
  const { onChange, ...rest } = register;

  const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    if (!/^\d*$/.test(e.target.value)) return;
    onChange(e);
  };

  const moveToCursorAtTheEnd = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputEl = e.target;
    const lenOfValue = inputEl.value.length;
    inputEl.setSelectionRange(0, lenOfValue);
  };

  return (
    <div className="w-full flex flex-row justify-center items-center gap-4 font-BMJUA">
      <input
        type="text"
        inputMode="numeric"
        className="w-full text-lg bg-bgColor p-3 rounded-xl outline-none text-right"
        placeholder={placeholder}
        value={value}
        onChange={handleChangePrice}
        onFocus={moveToCursorAtTheEnd}
        {...rest}
      />
      <p className="text-xl text-fontColor">원</p>
    </div>
  );
};

export default InputPriceAtom;
