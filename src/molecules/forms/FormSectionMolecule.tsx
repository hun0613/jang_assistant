import LabelAtom from '@/atoms/forms/LabelAtom';
import SectionAtom from '@/atoms/layouts/SectionAtom';

type FormSectionMoleculeProps = {} & React.ComponentProps<typeof LabelAtom>;

const FormSectionMolecule: React.FC<FormSectionMoleculeProps> = (props) => {
  const { title, description, required, children } = props;

  return (
    <SectionAtom>
      <LabelAtom title={title} description={description} required={required} />
      {children}
    </SectionAtom>
  );
};
export default FormSectionMolecule;
