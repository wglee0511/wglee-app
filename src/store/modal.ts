import { create } from "zustand";
import { devtools } from "zustand/middleware";

type ModalValueType = {
  isVisibleContactModal: boolean;
};

type ModalType = ModalValueType & {
  setIsVisibleContactSettingModal: (isVisible: boolean) => void;
};

const initialModalState: ModalValueType = {
  isVisibleContactModal: false,
};

export const useModalStore = create<ModalType>()(
  devtools(
    (set) => ({
      ...initialModalState,
      setIsVisibleContactSettingModal: (isVisible) =>
        set(() => ({ isVisibleContactModal: isVisible })),
    }),
    {
      name: "ModalStore",
    },
  ),
);
