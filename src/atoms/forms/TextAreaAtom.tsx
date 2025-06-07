import { mergeClassNames } from '@/utils/domUtil';

type TextAreaAtomProps = {
  placeholder?: string;
  maxLength?: number;
  register?: any;
  value: string;
  readonly?: boolean;
} & JSX.IntrinsicElements['textarea'];

const TextAreaAtom: React.FC<TextAreaAtomProps> = (props) => {
  const { placeholder, maxLength, register, value, readOnly = false } = props;

  return (
    <div className="w-full flex flex-col gap-2">
      <textarea
        maxLength={maxLength}
        readOnly={readOnly}
        className={mergeClassNames('w-full resize-none text-lg bg-bgColor overflow-auto h-40 p-3 rounded-xl font-BMJUA outline-none', {
          'cursor-default': readOnly,
        })}
        placeholder={placeholder}
        value={value}
        {...register}
      />
      {!readOnly && <div className="text-fontColor/50 font-BMJUA flex justify-end text-sm">{`${value.length}/${maxLength}자`}</div>}
    </div>
  );
};
export default TextAreaAtom;
