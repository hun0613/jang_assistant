import { getCartById } from '@/actions/carts/cartActions';
import ShoppingComp from '@/components/shoppings/ShoppingComp';
import NoDataHandler from '@/components/utils/NoDataHandlerComp';
import PageTemplate from '@/templates/layouts/PageTemplate';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params;
  let title = '';

  try {
    const cart = await getCartById(Number(id));
    title = cart?.title || '';
  } catch {
    title = '';
  }

  return {
    title: `장비서:슬기로운 장보기 생활 | ${title}`,
    description: '오프라인 장보기 맞춤 서비스',
    icons: {
      icon: [
        {
          url: '/images/logo.png',
          href: '/images/logo.png',
        },
      ],
    },
    openGraph: {
      title: `장비서:슬기로운 장보기 생활 | ${title}`,
      description: '오프라인 장보기 맞춤 서비스',
      url: 'https://jang-assistant.vercel.app/',
      siteName: 'Jang-Assistant',
      images: [
        {
          url: 'https://jang-assistant.vercel.app/images/brandImage.jpg',
          width: 1280,
          height: 832,
        },
      ],
    },
  };
}

const ShoppingPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  let title = '';

  try {
    const cart = await getCartById(Number(id));
    title = cart?.title || '';
  } catch {
    title = '';
  }

  return (
    <>
      <NoDataHandler />
      <PageTemplate title={title} titleUnderline>
        <ShoppingComp />
      </PageTemplate>
    </>
  );
};

export default ShoppingPage;
