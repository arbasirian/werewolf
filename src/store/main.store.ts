import { MainStoreModel, LanguageModel, DirectionModel } from "models";
import { create } from "zustand";

const useMainStore = create<MainStoreModel>(set => ({
  lang: LanguageModel.persian,
  direction: DirectionModel.RTL,
  setLang: (lang: LanguageModel) => set(() => ({ lang })),
  setDirection: (direction: DirectionModel) => set(() => ({ direction }))
}));

export default useMainStore;
