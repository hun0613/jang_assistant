import CreateCartFormComp from '@/components/createCarts/CreateCartFormComp';
import CreateCartGuideModalComp from '@/components/createCarts/CreateCartGuideModalComp';
import PageTemplate from '@/templates/layouts/PageTemplate';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '장비서:슬기로운 장보기 생활 | 장바구니 생성',
    description: '오프라인 장보기 맞춤 서비스 | 장바구니 생성 페이지',
    icons: {
      icon: [
        {
          url: '/images/logo.png',
          href: '/images/logo.png',
        },
      ],
    },
    openGraph: {
      title: '장비서:슬기로운 장보기 생활 | 장바구니 생성',
      description: '오프라인 장보기 맞춤 서비스 | 장바구니 생성 페이지',
      url: 'https://jang-assistant.vercel.app/',
      siteName: 'Jang-Assistant',
      images: [
        {
          url: 'https://jang-assistant.vercel.app/images/brandImage.jpg',
          width: 1920,
          height: 1080,
        },
      ],
    },
  };
}

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
