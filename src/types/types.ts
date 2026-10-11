export type ThemesNameT =
  | "candy"
  | "breeze"
  | "midnight"
  | "sunset"
  | "crimson"
  | "falcon"
  | "meadow"
  | "raindrop"
  | "mono"
  | "dracula"
  | "tokyoNight"
  | "nord"
  | "oneDark"
  | "catppuccin"
  | "synthwave"
  | "githubDark";

export interface ThemeConfig {
  name: string;
  shikiTheme: string;
  shikiThemeLight?: string;
  background: {
    from: string;
    to: string;
  };
}

export type LanguagesT = {
  [key: string]: {
    name: string;
    className: string;
  };
};
