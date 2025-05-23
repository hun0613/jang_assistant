import { mergeClassNames } from '@/utils/domUtil';

type SectionAtomProps = {} & JSX.IntrinsicElements['section'];

const SectionAtom: React.FC<SectionAtomProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <section
      className={mergeClassNames('flex flex-col w-full justify-center bg-white items-center gap-5 p-5 rounded-xl', className)}
      {...rest}
    >
      {children}
    </section>
  );
};

export default SectionAtom;
