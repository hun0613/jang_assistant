import { Meta, StoryObj } from '@storybook/react';
import PageAtom from '@/atoms/layouts/PageAtom';
import FormSectionMolecule from './FormSectionMolecule';
import InputTextAtom from '@/atoms/forms/InputTextAtom';
import { useForm } from 'react-hook-form';
import { CartItemInput } from '@/components/createCarts/AddCartItemModalComp';

const meta: Meta<typeof FormSectionMolecule> = {
  title: 'Molecule/Layouts/FormSectionMolecule',
  component: FormSectionMolecule,
  tags: ['autodocs'],
};

export default meta;
type FormSectionMoleculeStory = StoryObj<typeof FormSectionMolecule>;

const FormSectionMoleculeStory = (args: any) => {
  const { register, watch } = useForm<CartItemInput>({
    defaultValues: {
      name: '',
    },
  });

  return (
    <PageAtom>
      <div className="w-full p-5">
        <FormSectionMolecule {...args}>
          <InputTextAtom register={{ ...register('name') }} placeholder="품명을 입력하세요" maxLength={10} value={watch('name')} />
        </FormSectionMolecule>
      </div>
    </PageAtom>
  );
};

/**
 * Form요소에 대한 기본 Molecule 입니다. <br/>
 * 페이지의 섹션 내부에서 사용됩니다. <br/>
 * labelAtom과 같은 props를 받고, children으로 Input 요소를 받습니다.
 */
export const Primary: FormSectionMoleculeStory = {
  render: (args) => <FormSectionMoleculeStory {...args} />,
  args: {
    title: '품명',
    description: '품명을 입력하면 됩니다.',
    required: true,
  },
};
