import { Meta, StoryObj } from '@storybook/react';
import PageAtom from '@/atoms/layouts/PageAtom';
import FormMolecule from './FormMolecule';
import InputTextAtom from '@/atoms/forms/InputTextAtom';
import { useForm } from 'react-hook-form';
import { CartItemInput } from '@/components/createCarts/AddCartItemModalComp';

const meta: Meta<typeof FormMolecule> = {
  title: 'Molecule/Layouts/FormMolecule',
  component: FormMolecule,
  tags: ['autodocs'],
};

export default meta;
type FormMoleculeStory = StoryObj<typeof FormMolecule>;

const FormMoleculeStory = (args: any) => {
  const { register, watch } = useForm<CartItemInput>({
    defaultValues: {
      name: '',
    },
  });

  return (
    <PageAtom>
      <div className="w-full p-10 bg-white">
        <FormMolecule {...args}>
          <InputTextAtom register={{ ...register('name') }} placeholder="품명을 입력하세요" maxLength={10} value={watch('name')} />
        </FormMolecule>
      </div>
    </PageAtom>
  );
};

/**
 * Form요소에 대한 기본 Molecule 입니다. <br/>
 * 보통 팝업 내부에서 사용할 때 적용됩니다. <br/>
 * labelAtom과 같은 props를 받고, children으로 Input 요소를 받습니다.
 */
export const Primary: FormMoleculeStory = {
  render: (args) => <FormMoleculeStory {...args} />,
  args: {
    title: '품명',
    description: '품명을 입력하면 됩니다.',
    required: true,
  },
};
