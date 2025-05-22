import { mergeClassNames } from '@/utils/domUtil';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
type BackButtonAtomProps = {} & JSX.IntrinsicElements['button'];

const BackButtonAtom: React.FC<BackButtonAtomProps> = (props) => {
  const { className, ...rest } = props;
  const router = useRouter();

  const handleGoToBack = () => {
    router.back();
  };

  return (
    <button className={mergeClassNames('w-fit h-fit', className)} onClick={handleGoToBack} {...rest}>
      <Image src={'/images/arrowBack.png'} width={30} height={30} alt="backBtn" />
    </button>
  );
};
export default BackButtonAtom;
