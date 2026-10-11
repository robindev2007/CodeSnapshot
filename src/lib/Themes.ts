import { ThemeConfig, ThemesNameT } from "@/types/types";

export const customThemes: Record<ThemesNameT, ThemeConfig> = {
  candy: {
    name: "Candy",
    shikiTheme: "catppuccin-mocha",
    shikiThemeLight: "catppuccin-latte",
    background: {
      from: "rgba(165,142,251,1)",
      to: "rgba(233,191,248,1)",
    },
  },
  breeze: {
    name: "Breeze",
    shikiTheme: "tokyo-night",
    shikiThemeLight: "vitesse-light",
    background: {
      from: "rgba(207,47,152,1)",
      to: "rgba(106,61,236,1)",
    },
  },
  midnight: {
    name: "Midnight",
    shikiTheme: "dracula",
    shikiThemeLight: "github-light",
    background: {
      from: "rgba(44,57,75,1)",
      to: "rgba(15,23,42,1)",
    },
  },
  sunset: {
    name: "Sunset",
    shikiTheme: "rose-pine",
    shikiThemeLight: "rose-pine-dawn",
    background: {
      from: "rgba(255,154,139,1)",
      to: "rgba(255,106,0,1)",
    },
  },
  crimson: {
    name: "Crimson",
    shikiTheme: "dracula",
    shikiThemeLight: "github-light",
    background: {
      from: "rgba(255,99,99,1)",
      to: "rgba(115,52,52,1)",
    },
  },
  falcon: {
    name: "Falcon",
    shikiTheme: "vitesse-dark",
    shikiThemeLight: "vitesse-light",
    background: {
      from: "rgba(189,195,199,1)",
      to: "rgba(44,62,80,1)",
    },
  },
  meadow: {
    name: "Meadow",
    shikiTheme: "everforest-dark",
    shikiThemeLight: "everforest-light",
    background: {
      from: "rgba(90,216,166,1)",
      to: "rgba(23,107,135,1)",
    },
  },
  raindrop: {
    name: "Raindrop",
    shikiTheme: "nord",
    shikiThemeLight: "github-light",
    background: {
      from: "rgba(79,172,254,1)",
      to: "rgba(0,242,254,1)",
    },
  },
  mono: {
    name: "Mono",
    shikiTheme: "github-dark",
    shikiThemeLight: "github-light",
    background: {
      from: "#333333",
      to: "#181818",
    },
  },
  dracula: {
    name: "Dracula",
    shikiTheme: "dracula",
    shikiThemeLight: "github-light",
    background: {
      from: "#7928CA",
      to: "#FF0080",
    },
  },
  tokyoNight: {
    name: "Tokyo Night",
    shikiTheme: "tokyo-night",
    shikiThemeLight: "vitesse-light",
    background: {
      from: "#1a1b26",
      to: "#7aa2f7",
    },
  },
  nord: {
    name: "Nord",
    shikiTheme: "nord",
    shikiThemeLight: "github-light",
    background: {
      from: "#2E3440",
      to: "#88C0D0",
    },
  },
  oneDark: {
    name: "One Dark Pro",
    shikiTheme: "one-dark-pro",
    shikiThemeLight: "github-light",
    background: {
      from: "#282c34",
      to: "#61afef",
    },
  },
  catppuccin: {
    name: "Catppuccin",
    shikiTheme: "catppuccin-mocha",
    shikiThemeLight: "catppuccin-latte",
    background: {
      from: "#cba6f7",
      to: "#89b4fa",
    },
  },
  synthwave: {
    name: "Synthwave '84",
    shikiTheme: "synthwave-84",
    shikiThemeLight: "github-light",
    background: {
      from: "#ff71ce",
      to: "#01cdfe",
    },
  },
  githubDark: {
    name: "GitHub Dark",
    shikiTheme: "github-dark",
    shikiThemeLight: "github-light",
    background: {
      from: "#24292e",
      to: "#040d21",
    },
  },
};
