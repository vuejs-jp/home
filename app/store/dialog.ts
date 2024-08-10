import { useModalStore } from ".";

export interface DialogState {
  title: string;
}

export function useDialogStore() {
  const { open: openModal, close: closeModal } = useModalStore();

  function open(payload: DialogState) {
    openModal({ name: "dialog", data: payload });
  }

  function close() {
    closeModal();
  }

  return { open, close };
};
