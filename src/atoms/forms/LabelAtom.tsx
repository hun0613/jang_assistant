import { mergeClassNames } from '@/utils/domUtil';

type LabelAtomProps = {
  title: string;
  description?: string;
  required?: boolean;
} & JSX.IntrinsicElements['label'];

const LabelAtom: React.FC<LabelAtomProps> = (props) => {
  const { title, description, required = false, className, ...rest } = props;

  return (
    <label className={mergeClassNames('flex flex-col font-BMJUA w-full items-start', className)} {...rest}>
      <span className="text-fontColor flex gap-2 justify-start items-center">
        <span className="text-xl">{title}</span>
        {required && <span className="text-pointColor text-sm">필수입력</span>}
      </span>
      {description && <span className="text-fontColor/50 text-sm">{description}</span>}
    </label>
  );
};
export default LabelAtom;
