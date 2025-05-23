import BrandDescriptionComp from '@/components/landings/BrandDescriptionComp';
import EndingComp from '@/components/landings/EndingComp';
import GoToServiceButtonComp from '@/components/landings/GoToServiceButtonComp';
import TitleComp from '@/components/landings/TitleComp';
import { mergeClassNames } from '@/utils/domUtil';

export default function Home() {
  return (
    <div className={mergeClassNames('w-full min-h-[calc(100vh-97px)] flex flex-col pb-28')}>
      <TitleComp />
      <BrandDescriptionComp
        className="bg-gradient-to-b from-pointColor/80 to-pointColor/60 text-white"
        subTitle="한 손으로 물품 담기와 가격합산까지 한번에!"
        title="이젠 장보기도 스마트하게"
        src="/images/shoppingExample.png"
        description="구입 품목을 체크하면 결제 금액이 자동 합산되어 장보기 생활의 질을 높여줍니다."
      />
      <BrandDescriptionComp
        className="bg-bgColor text-fontColor"
        subTitle="테마별 장바구니 관리로"
        title="효율적인 장보기 생활!"
        src="/images/cartListExample.png"
        description="요리 주제나 상황에 맞춰 장바구니를 나눠 관리할 수 있어 필요한 재료를 빠짐없이 효율적으로 준비할 수 있어요!"
        // active={false}
      />
      <BrandDescriptionComp
        className="bg-gradient-to-b from-pointColor/80 to-pointColor/60 text-white"
        subTitle="지출 내역 확인으로"
        title="가계부 관리도 한번에!"
        src="/images/expenseExample.png"
        description="이번 달 지출 현황부터 최근 6개월 소비 패턴까지 한눈에! 지출 데이터 시각화로 계획적인 소비 습관을 도와드려요."
        // active={false}
      />
      <div className="flex flex-col justify-center items-center gap-10 pt-28 pb-10 px-10">
        <EndingComp />
      </div>
      <GoToServiceButtonComp />
    </div>
  );
}
