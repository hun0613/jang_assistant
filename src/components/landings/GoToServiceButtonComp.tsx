import ButtonAtom from '@/atoms/buttons/ButtonAtom';
import { useRouter } from 'next/navigation';

const GoToServiceButtonComp = () => {
  const router = useRouter();

  const handleClickTrialBtn = () => {
    router.push('/createCart');
  };
  return (
    <ButtonAtom full onClick={handleClickTrialBtn}>
      데모버전 체험하기
    </ButtonAtom>
  );
};

export default GoToServiceButtonComp;
