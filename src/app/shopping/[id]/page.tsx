import ShoppingComp from '@/components/shoppings/ShoppingComp';
import NoDataHandler from '@/components/utils/NoDataHandlerComp';
import PageTemplate from '@/templates/layouts/PageTemplate';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params;

  return {
    title: `장비서:슬기로운 장보기 생활 | ${decodeURIComponent(id)}`,
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
      title: `장비서:슬기로운 장보기 생활 | ${decodeURIComponent(id)}`,
      description: '오프라인 장보기 맞춤 서비스',
      url: 'https://jang-assistant.vercel.app/',
      siteName: 'Jang-Assistant',
      images: [
        {
          url: '/images/brandImage.jpg',
          width: 1920,
          height: 1080,
        },
      ],
    },
  };
}

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
