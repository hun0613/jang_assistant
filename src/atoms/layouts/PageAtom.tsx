import { mergeClassNames } from '@/utils/domUtil';

type PageAtomProps = {} & JSX.IntrinsicElements['div'];

const PageAtom: React.FC<PageAtomProps> = (props) => {
  const { children } = props;

  return (
    <div
      className={mergeClassNames(
        'relative max-w-[450px] w-full min-h-screen bg-bgColor shadow-layout font-BMJUA flex flex-col justify-between items-center',
      )}
    >
      {children}
    </div>
  );
};

export default PageAtom;
