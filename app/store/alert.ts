import { useModalStore } from ".";

export interface AlertState {
  type: "success" | "error";
  title: string;
  text: string;
}

export function useAlertStore() {
  const { open: openModal, close: closeModal } = useModalStore();

  function open(payload: AlertState) {
    openModal({ name: "alert", data: payload });
  }

  function close() {
    closeModal();
  }

  return { open, close };
};
