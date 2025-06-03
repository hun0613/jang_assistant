import ShoppingComp from '@/components/shoppings/ShoppingComp';
import PageTemplate from '@/templates/layouts/PageTemplate';

const ShoppingPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <>
      <PageTemplate title={decodeURIComponent(id)} titleUnderline>
        <ShoppingComp />
      </PageTemplate>
    </>
  );
};

export default ShoppingPage;
