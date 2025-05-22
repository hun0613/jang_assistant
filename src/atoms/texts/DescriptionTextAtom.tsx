import { mergeClassNames } from '@/utils/domUtil';

export type DescriptionTextAtomProps = {} & JSX.IntrinsicElements['p'];

const DescriptionTextAtom: React.FC<DescriptionTextAtomProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <p className={mergeClassNames('text-fontColor/50 font-BMJUA', className)} {...rest}>
      {children}
    </p>
  );
};
export default DescriptionTextAtom;
