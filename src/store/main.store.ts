import {MainStoreModel, LanguageModel} from 'models';
import {create} from 'zustand';

const useMainStore = create<MainStoreModel>(set => ({
  lang: LanguageModel.persian,
  setLang: (lang: LanguageModel) => set(() => ({lang}))
}));

export default useMainStore;
