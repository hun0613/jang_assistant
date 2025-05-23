import LabelAtom from '@/atoms/forms/LabelAtom';
import SectionAtom from '@/atoms/layouts/SectionAtom';

type InputMoleculeProps = {} & React.ComponentProps<typeof LabelAtom>;

const InputMolecule: React.FC<InputMoleculeProps> = (props) => {
  const { title, description, required, children } = props;

  return (
    <SectionAtom>
      <LabelAtom title={title} description={description} required={required} />
      {children}
    </SectionAtom>
  );
};
export default InputMolecule;
