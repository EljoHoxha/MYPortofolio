import { en, sq } from "../src/assets/localization";
declare module "i18next" {
  interface Resourcs {
    defaultNS: "en";
    resources: {
      en: typeof en;
      sq: typeof sq;
    };
  }
}
