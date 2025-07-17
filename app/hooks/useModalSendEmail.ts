
"use client"
import { create } from 'zustand';

interface ModalSendEmailStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useModalSendEmail = create<ModalSendEmailStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))
export default useModalSendEmail;