type InputAtomProps = {
  placeholder: string;
  maxLength?: number;
  register: any;
  value: string;
} & JSX.IntrinsicElements['input'];

const InputAtom: React.FC<InputAtomProps> = (props) => {
  const { placeholder, register, maxLength, value, ...rest } = props;

  return (
    <div className="w-full flex flex-col gap-2">
      <input
        {...rest}
        type="text"
        maxLength={maxLength}
        className="w-full text-lg bg-bgColor p-3 rounded-xl font-BMJUA outline-none"
        placeholder={placeholder}
        {...register}
      />
      <div className="text-fontColor/50 font-BMJUA flex justify-end text-sm">{`${value.length}/${maxLength}자`}</div>
    </div>
  );
};

export default InputAtom;
