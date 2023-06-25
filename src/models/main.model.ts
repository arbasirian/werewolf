export enum LanguageModel {
  english = "en",
  persian = "fa"
}
export enum DirectionModel {
  RTL = "rtl",
  LTR = "ltr"
}

export interface MainStoreModel {
  lang: LanguageModel;
  direction: DirectionModel;
}
