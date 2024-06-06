import { create } from "zustand";
import { devtools } from "zustand/middleware";

type WindowValueType = {
  isVisibleContactWindow: boolean;
};

type WindowType = WindowValueType & {
  setIsVisibleContactSettingWindow: (isVisible: boolean) => void;
};

const initialWindowState: WindowValueType = {
  isVisibleContactWindow: false,
};

export const useWindowStore = create<WindowType>()(
  devtools(
    (set) => ({
      ...initialWindowState,
      setIsVisibleContactSettingWindow: (isVisible) =>
        set(() => ({ isVisibleContactWindow: isVisible })),
    }),
    {
      name: "WindowStore",
    },
  ),
);
