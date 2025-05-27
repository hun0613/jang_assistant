import LabelAtom from '@/atoms/forms/LabelAtom';

type FormMoleculeProps = {} & React.ComponentProps<typeof LabelAtom>;

const FormMolecule: React.FC<FormMoleculeProps> = (props) => {
  const { title, description, required, children } = props;

  return (
    <div className="w-full flex flex-col gap-2">
      <LabelAtom title={title} description={description} required={required} />
      {children}
    </div>
  );
};
export default FormMolecule;
