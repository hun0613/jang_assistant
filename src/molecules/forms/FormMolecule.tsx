import LabelAtom from '@/atoms/forms/LabelAtom';
import SectionAtom from '@/atoms/layouts/SectionAtom';

type FormMolecule = {} & React.ComponentProps<typeof LabelAtom>;

const FormMolecule: React.FC<FormMolecule> = (props) => {
  const { title, description, required, children } = props;

  return (
    <SectionAtom>
      <LabelAtom title={title} description={description} required={required} />
      {children}
    </SectionAtom>
  );
};
export default FormMolecule;
