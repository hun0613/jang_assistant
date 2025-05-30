import CreateCartFormComp from '@/components/createCarts/CreateCartFormComp';
import CreateCartGuideModalComp from '@/components/createCarts/CreateCartGuideModalComp';
import PageTemplate from '@/templates/layouts/PageTemplate';

const CreateCartPage = () => {
  return (
    <>
      <PageTemplate title={'장바구니 생성'} description={'이걸 보면서 장 볼 예정이에요!'}>
        <CreateCartFormComp />
      </PageTemplate>
      <CreateCartGuideModalComp />
    </>
  );
};

export default CreateCartPage;
