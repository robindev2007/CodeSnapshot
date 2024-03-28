import { customThemes } from "@/lib/Themes";

export type ThemesNameT =
  | "mono"
  | "breeze"
  | "candy"
  | "crimson"
  | "falcon"
  | "meadow"
  | "midnight"
  | "raindrop"
  | "sunset";

export type ThemeT = typeof customThemes.candy;

export type LanguagesT = {
  [key: string]: {
    name: string;
    className: string;
  };
};
