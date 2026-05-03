'use client';

import ButtonAtom from '@/atoms/buttons/ButtonAtom';
import InputTextAtom from '@/atoms/forms/InputTextAtom';
import TextAreaAtom from '@/atoms/forms/TextAreaAtom';
import FormSectionMolecule from '@/molecules/forms/FormSectionMolecule';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import CreateCartItemListComp from './CreateCartItemListComp';
import { CartItemType } from '@/types/carts/cartType';
import { localStorageUtil } from '@/utils/storageUtil';
import { useEffect, useRef, useState } from 'react';
import usePopup from '@/hooks/popup/usePopup';
import StartShoppingGuideModalComp from './StartShoppingGuideModalComp';
import ResumeShoppingModalComp from './ResumeShoppingModalComp';
import { getOrCreateSessionId } from '@/utils/sessionUtil';
import { createCart, getCartById, updateCart } from '@/actions/carts/cartActions';
import { createCartItem, deleteCartItem, getCartItemsByCartId } from '@/actions/cartItems/cartItemActions';
import { CART_STATUS } from '@/enums/carts/cartEnums';
import SpinnerAtom, { SPINNER_SIZE } from '@/atoms/spinners/SpinnerAtom';

export type CreateCartInput = {
  title: string;
  memo: string;
  items: CartItemType[];
};

const DRAFT_CART_ID_KEY = 'draftCartId';
const SHOPPING_CART_ID_KEY = 'shoppingCartId';

const CreateCartFormComp = () => {
  const cartIdRef = useRef<number | null>(null);
  const [cartId, setCartId] = useState<number | null>(null);
  const [shoppingCartId, setShoppingCartId] = useState<number | null>(null);
  const [restoring, setRestoring] = useState(false);
  const ensurePromiseRef = useRef<Promise<number> | null>(null);

  const { register, watch, handleSubmit, control, reset } = useForm<CreateCartInput>({
    defaultValues: {
      title: '',
      memo: '',
      items: [],
    },
  });

  const {
    fields: cartItems,
    append,
    remove,
  } = useFieldArray({
    control,
    name: 'items',
    keyName: 'key',
  });

  const {
    open: startShoppingGuideModalOpen,
    handleClose: handleCloseStartShoppingGuideModal,
    handleOpen: handleOpenStartShoppingGuideModal,
  } = usePopup({ id: 'startShoppingGuideModal' });

  const {
    open: resumeShoppingGuideModalOpen,
    handleClose: handleCloseResumeShoppingGuideModal,
    handleOpen: handleOpenResumeShoppingGuideModal,
  } = usePopup({ id: 'resumeShoppingGuideModal' });

  const handleStartShopping: SubmitHandler<CreateCartInput> = () => {
    handleOpenStartShoppingGuideModal();
  };

  /**
   * cart가 없으면 session + cart를 생성하고, 있으면 기존 cartId를 반환한다.
   * 동시 호출 시 중복 생성을 방지하기 위해 promise를 공유한다.
   */
  const ensureCart = async (initialTitle = '', initialMemo?: string): Promise<number> => {
    if (cartIdRef.current) return cartIdRef.current;
    if (ensurePromiseRef.current) return ensurePromiseRef.current;

    ensurePromiseRef.current = (async () => {
      const sessionId = await getOrCreateSessionId();
      const newCart = await createCart(sessionId, initialTitle, initialMemo);
      cartIdRef.current = newCart.id;
      setCartId(newCart.id);
      localStorageUtil.set(DRAFT_CART_ID_KEY, String(newCart.id));
      return newCart.id;
    })();

    return ensurePromiseRef.current;
  };

  const handleBlurTitleInput = async () => {
    const title = watch('title');
    if (!title && !cartIdRef.current) return;

    if (cartIdRef.current) {
      await updateCart(cartIdRef.current, { title });
    } else {
      await ensureCart(title);
    }
  };

  const handleBlurMemoInput = async () => {
    const memo = watch('memo');
    if (!memo && !cartIdRef.current) return;

    if (cartIdRef.current) {
      await updateCart(cartIdRef.current, { memo });
    } else {
      await ensureCart(watch('title'), memo);
    }
  };

  const handleAddItem = async (name: string, quantity: number) => {
    const id = await ensureCart(watch('title'), watch('memo') || undefined);
    const created = (await createCartItem(id, name, quantity)) as CartItemType;
    append(created);
  };

  const handleRemoveItem = async (index: number, itemId: number) => {
    await deleteCartItem(itemId);
    remove(index);
  };

  // 기존 draft cart 복원 (생성은 하지 않음)
  useEffect(() => {
    const loadDraftCart = async () => {
      const storedDraftId = localStorageUtil.get(DRAFT_CART_ID_KEY);
      if (!storedDraftId) return;

      setRestoring(true);
      try {
        const draftId = Number(storedDraftId);
        const [cart, items] = await Promise.all([
          getCartById(draftId),
          getCartItemsByCartId(draftId) as Promise<CartItemType[]>,
        ]);
        if (cart && cart.status === CART_STATUS.CREATED) {
          cartIdRef.current = cart.id;
          setCartId(cart.id);
          reset({ title: cart.title || '', memo: cart.memo || '', items });
        } else {
          localStorageUtil.remove(DRAFT_CART_ID_KEY);
        }
      } catch {
        localStorageUtil.remove(DRAFT_CART_ID_KEY);
      } finally {
        setRestoring(false);
      }
    };

    loadDraftCart();
  }, [reset]);

  // 진행중인 쇼핑(SHOPPING 상태) 장바구니 확인
  useEffect(() => {
    const checkShoppingCart = async () => {
      const storedShoppingId = localStorageUtil.get(SHOPPING_CART_ID_KEY);
      if (!storedShoppingId) return;

      try {
        const cart = await getCartById(Number(storedShoppingId));
        if (cart && cart.status === CART_STATUS.SHOPPING) {
          setShoppingCartId(cart.id);
          handleOpenResumeShoppingGuideModal();
        } else {
          localStorageUtil.remove(SHOPPING_CART_ID_KEY);
        }
      } catch {
        localStorageUtil.remove(SHOPPING_CART_ID_KEY);
      }
    };

    checkShoppingCart();
  }, []);

  return (
    <>
      {restoring && (
        <div className="fixed inset-0 z-[9999] flex justify-center items-center bg-black/40">
          <SpinnerAtom size={SPINNER_SIZE.LARGE} color="white" />
        </div>
      )}
      <ResumeShoppingModalComp
        shoppingCartId={shoppingCartId}
        open={resumeShoppingGuideModalOpen}
        handleClose={handleCloseResumeShoppingGuideModal}
        handleOpen={handleOpenResumeShoppingGuideModal}
      />
      <StartShoppingGuideModalComp
        cartId={cartId}
        title={watch('title')}
        open={startShoppingGuideModalOpen}
        handleClose={handleCloseStartShoppingGuideModal}
        handleOpen={handleOpenStartShoppingGuideModal}
      />
      <form onSubmit={handleSubmit(handleStartShopping)} className="w-full mt-5 flex flex-col gap-5">
        <FormSectionMolecule title={'장바구니 이름'} description={'품목이나 방문할 매장을 고려해서 지어주세요!'} required={true}>
          <InputTextAtom
            register={{
              ...register('title', {
                onBlur: handleBlurTitleInput,
              }),
            }}
            placeholder="장바구니 이름을 입력하세요."
            maxLength={20}
            value={watch('title')}
          />
        </FormSectionMolecule>
        <FormSectionMolecule title={'사야 할 것'} description={'품목 추가 버튼을 눌러 품명과 수량을 입력해주세요!'} required={true}>
          <CreateCartItemListComp cartItems={cartItems} onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} />
        </FormSectionMolecule>
        <FormSectionMolecule title={'메모'} description={'장볼 때 참고해야 할 내용을 입력하세요!'}>
          <TextAreaAtom
            register={{
              ...register('memo', {
                onBlur: handleBlurMemoInput,
              }),
            }}
            placeholder="내용을 입력하세요."
            maxLength={100}
            value={watch('memo')}
          />
        </FormSectionMolecule>
        <ButtonAtom className="mt-5" type="submit" full disabled={!watch('title') || cartItems.length === 0}>
          장보기 시작하기
        </ButtonAtom>
      </form>
    </>
  );
};
export default CreateCartFormComp;
