import { ref } from "vue";
import { useState } from "#app";

export function useBackDropStore() {
  const isShowed = useState("backDrop", () => ref(false));
  function show() {
    isShowed.value = true;
  }

  function hide() {
    isShowed.value = false;
  }

  return { isShowed, show, hide };
};

export interface ModalState {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: Record<string, any>;
}

export function useModalStore() {
  const { show, hide } = useBackDropStore();
  const state = useState<ModalState>("modal", () => ref<ModalState>({ name: "", data: {} }));

  function open(payload: ModalState) {
    show();
    state.value = payload;
  }

  function close() {
    state.value = { name: "", data: {} };
    hide();
  }

  return { state, open, close };
};
