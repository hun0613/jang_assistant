import SectionAtom from '@/atoms/layouts/SectionAtom';

type TotalPriceSectionCompProps = {
  price: number;
} & React.ComponentProps<typeof SectionAtom>;

const TotalPriceSectionComp: React.FC<TotalPriceSectionCompProps> = (props) => {
  const { price } = props;

  return (
    <SectionAtom className="mt-5 flex flex-row justify-between">
      <span className="text-2xl">예상 결제금액</span>
      <div className="flex gap-1">
        <span className="text-2xl text-pointColor">{price.toLocaleString()}</span>
        <span className="text-2xl">원</span>
      </div>
    </SectionAtom>
  );
};

export default TotalPriceSectionComp;
