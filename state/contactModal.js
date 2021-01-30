import { atom, selector, useRecoilValue, useSetRecoilState } from 'recoil';

export const modalShowState = atom({
  key: 'modalShow',
  default: false,
});

export const showContactModal = selector({
  key: 'showContactModal',
  set: ({ set }) => set(modalShowState, true),
});

export const hideContactModal = selector({
  key: 'hideContactModal',
  set: ({ set }) => set(modalShowState, false),
});

export const useModalState = () => ({
  state: useRecoilValue(modalShowState),
  show: useSetRecoilState(showContactModal),
  hide: useSetRecoilState(hideContactModal),
});
