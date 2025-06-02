import { Meta, StoryObj } from '@storybook/react';
import PopupAtom, { PopupActionWrapperAtom } from './PopupAtom';
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

const PopupTemplates = (args: any) => {
  const { open, handleOpen, handleClose } = usePopup({ id: 'popup' });

  const handleClickOpen = () => {
    handleOpen();
  };

  return (
    <div className="w-full flex justify-center items-center">
      <PageAtom>
        <PopupAtom open={open} handleClose={handleClose} handleOpen={handleOpen}>
          <h1 className="text-center">popup</h1>
          <PopupActionWrapperAtom>
            <ButtonAtom full onClick={() => handleClose()}>
              닫기
            </ButtonAtom>
          </PopupActionWrapperAtom>
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
