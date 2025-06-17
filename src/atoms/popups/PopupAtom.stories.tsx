import { Meta, StoryObj } from '@storybook/react';
import PopupAtom, { PopupActionWrapperAtom } from './PopupAtom';
import ButtonAtom from '../buttons/ButtonAtom';
import PageAtom from '../layouts/PageAtom';
import usePopup from '@/hooks/popup/usePopup';

const meta: Meta<typeof PopupAtom> = {
  title: 'Atomic/Popups/Popup',
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
        <ButtonAtom className="mt-10" onClick={handleClickOpen}>
          팝업
        </ButtonAtom>
      </PageAtom>
    </div>
  );
};

/**
 * 팝업에 사용되는 컴포넌트 입니다. <br/>
 * usePopup 훅을 사용해서 컨트롤해야하고, 팝업 내 닫힘, 열림 버튼은 PopupActionWrapperAtom으로 감싸줘야합니다.
 */
export const Primary: PopupAtomStory = {
  render: (args) => <PopupTemplates {...args} />,
  args: {},
};
