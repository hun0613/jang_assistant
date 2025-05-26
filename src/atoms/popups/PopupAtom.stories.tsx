import { Meta, StoryObj } from '@storybook/react';
import PopupAtom from './PopupAtom';
import ButtonAtom from '../buttons/ButtonAtom';
import PageAtom from '../layouts/PageAtom';
import usePopup from '@/hooks/popup/usePopup';

const meta: Meta<typeof PopupAtom> = {
  title: 'Atomic/Popup',
  component: PopupAtom,
  tags: ['autodocs'],
};

export default meta;
type PopupAtomStory = StoryObj<typeof PopupAtom>;

type Inputs = {
  title: string;
};

const PopupTemplates = (args: any) => {
  const { open, handleOpen, handleClose } = usePopup({ id: 'popup' });

  const handleClickOpen = () => {
    if (!open) {
      handleOpen();
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <PageAtom>
        <PopupAtom open={open} handleClose={handleClose} handleOpen={handleOpen}>
          popup
        </PopupAtom>
        <ButtonAtom onClick={handleClickOpen}>팝업</ButtonAtom>
      </PageAtom>
    </div>
  );
};

export const Primary: PopupAtomStory = {
  render: (args) => <PopupTemplates {...args} />,
  args: {},
};
