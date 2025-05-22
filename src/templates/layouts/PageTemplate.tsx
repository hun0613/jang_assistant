import DescriptionTextAtom from '@/atoms/texts/DescriptionTextAtom';
import TitleTextAtom from '@/atoms/texts/TitleTextAtom';

type PageTemplateProps = {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
} & JSX.IntrinsicElements['div'];

const PageTemplate: React.FC<PageTemplateProps> = (props) => {
  const { title, description, children } = props;

  return (
    <div className="min-h-[calc(100vh-97px)] w-full flex flex-col items-center justify-start h-full py-10 gap-2">
      <TitleTextAtom>{title}</TitleTextAtom>
      <DescriptionTextAtom>{description}</DescriptionTextAtom>
      <div className="px-6 py-5 w-full">{children}</div>
    </div>
  );
};
export default PageTemplate;
