import { defineStore } from "pinia";

export type RootState = {};

export const useMainStore = defineStore({
  id: "mainStore",
  state: () =>
    ({
      items: [],
    } as RootState),

  actions: {},
});
