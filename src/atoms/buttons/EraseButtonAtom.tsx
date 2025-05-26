import { mergeClassNames } from '@/utils/domUtil';
import Image from 'next/image';

type EraseButtonAtom = {} & JSX.IntrinsicElements['button'];

const EraseButtonAtom: React.FC<EraseButtonAtom> = (props) => {
  const { className, ...rest } = props;

  return (
    <button type="button" className={mergeClassNames('w-fit h-fit p-2', className)} {...rest}>
      <Image src={'/images/erase.png'} width={20} height={30} alt="eraseButton" />
    </button>
  );
};

export default EraseButtonAtom;
