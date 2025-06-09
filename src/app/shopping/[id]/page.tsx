import ShoppingComp from '@/components/shoppings/ShoppingComp';
import NoDataHandler from '@/components/utils/NoDataHandlerComp';
import PageTemplate from '@/templates/layouts/PageTemplate';

const ShoppingPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <>
      <NoDataHandler />
      <PageTemplate title={decodeURIComponent(id)} titleUnderline>
        <ShoppingComp />
      </PageTemplate>
    </>
  );
};

export default ShoppingPage;
