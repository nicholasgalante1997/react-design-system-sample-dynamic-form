import { create } from 'zustand';

type FormDataRelayState = {
  fields: Map<string, unknown>;
};

type FormDataRelayActions = {
  updateOrAddFields(key: string, value: unknown): void;
};

export const useFormDataRelayStore = create<FormDataRelayState & FormDataRelayActions>((set) => ({
  fields: new Map<string, unknown>(),
  updateOrAddFields(k, v) {
    set((state) => {
      const { fields } = state;
      fields.set(k, v);
      return {
        fields,
      };
    });
  },
}));
