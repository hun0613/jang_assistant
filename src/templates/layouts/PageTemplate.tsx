import DescriptionTextAtom from '@/atoms/texts/DescriptionTextAtom';
import TitleTextAtom from '@/atoms/texts/TitleTextAtom';

type PageTemplateProps = {
  title: string | React.ReactNode;
  titleUnderline?: boolean;
  description?: string | React.ReactNode;
} & JSX.IntrinsicElements['div'];

const PageTemplate: React.FC<PageTemplateProps> = (props) => {
  const { title, titleUnderline, description, children } = props;

  return (
    <div className="min-h-[calc(100vh-97px)] w-full flex flex-col items-center justify-start h-full py-10 gap-1">
      <TitleTextAtom underline={titleUnderline}>{title}</TitleTextAtom>
      <DescriptionTextAtom>{description}</DescriptionTextAtom>
      <div className="px-6 w-full">{children}</div>
    </div>
  );
};
export default PageTemplate;
