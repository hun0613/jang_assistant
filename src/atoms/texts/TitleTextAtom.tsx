import { mergeClassNames } from '@/utils/domUtil';

export type TitleTextAtomProps = {
  underline?: boolean;
} & JSX.IntrinsicElements['h1'];

const TitleTextAtom: React.FC<TitleTextAtomProps> = (props) => {
  const { underline = false, children, className, ...rest } = props;

  return (
    <div className="relative w-fit px-1 flex justify-center items-center font-BMJUA">
      <h1 className={mergeClassNames('text-[26px] z-10 text-fontColor', className)} {...rest}>
        {children}
      </h1>
      {underline && <div className="w-full absolute bottom-1 h-3 bg-pointColor/50"></div>}
    </div>
  );
};
export default TitleTextAtom;
