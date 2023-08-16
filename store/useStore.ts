import { create } from "zustand";

type Props = {
  isOpen: boolean;
  setIsOpen: () => void;
};

export const useIsOpen = create<Props>((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
