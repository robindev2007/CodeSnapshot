import { ThemeConfig, ThemesNameT } from "@/types/types";

export const customThemes: Record<ThemesNameT, ThemeConfig> = {
  // ==========================================
  // RAY.SO PARTNER THEMES
  // ==========================================
  vercel: {
    name: "Vercel",
    category: "partner",
    partner: true,
    shikiTheme: "vesper",
    shikiThemeLight: "github-light",
    background: {
      from: "#232323",
      to: "#1F1F1F",
    },
  },
  supabase: {
    name: "Supabase",
    category: "partner",
    partner: true,
    shikiTheme: "catppuccin-mocha",
    shikiThemeLight: "github-light",
    background: {
      from: "#121212",
      to: "#121212",
    },
  },
  tailwind: {
    name: "Tailwind CSS",
    category: "partner",
    partner: true,
    shikiTheme: "tokyo-night",
    shikiThemeLight: "github-light",
    background: {
      from: "#36B6F0",
      to: "#36B6F0",
    },
  },
  openai: {
    name: "OpenAI",
    category: "partner",
    partner: true,
    shikiTheme: "vitesse-black",
    shikiThemeLight: "github-light",
    background: {
      from: "#000000",
      to: "#000000",
    },
  },
  stripe: {
    name: "Stripe",
    category: "partner",
    partner: true,
    shikiTheme: "tokyo-night",
    shikiThemeLight: "github-light",
    background: {
      from: "#0a2540",
      to: "#0a2540",
    },
  },
  gemini: {
    name: "Google Gemini",
    category: "partner",
    partner: true,
    shikiTheme: "one-dark-pro",
    shikiThemeLight: "github-light",
    background: {
      from: "#16181d",
      to: "#16181d",
    },
  },
  cloudflare: {
    name: "Cloudflare",
    category: "partner",
    partner: true,
    shikiTheme: "one-dark-pro",
    shikiThemeLight: "one-light",
    background: {
      from: "#0C0C0C",
      to: "#0C0C0C",
    },
  },
  resend: {
    name: "Resend",
    category: "partner",
    partner: true,
    shikiTheme: "vitesse-dark",
    shikiThemeLight: "github-light",
    background: {
      from: "#B1B1B1",
      to: "#181818",
    },
  },
  mintlify: {
    name: "Mintlify",
    category: "partner",
    partner: true,
    shikiTheme: "everforest-dark",
    shikiThemeLight: "everforest-light",
    background: {
      from: "#000000",
      to: "#000000",
    },
  },
  prisma: {
    name: "Prisma",
    category: "partner",
    partner: true,
    shikiTheme: "poimandres",
    shikiThemeLight: "github-light",
    background: {
      from: "#151515",
      to: "#0f0f0f",
    },
  },
  clerk: {
    name: "Clerk",
    category: "partner",
    partner: true,
    shikiTheme: "dracula",
    shikiThemeLight: "github-light",
    background: {
      from: "#000000",
      to: "#000000",
    },
  },
  nuxt: {
    name: "Nuxt",
    category: "partner",
    partner: true,
    shikiTheme: "material-theme-palenight",
    shikiThemeLight: "github-light",
    background: {
      from: "#292D3E",
      to: "#292D3E",
    },
  },
  browserbase: {
    name: "Browserbase",
    category: "partner",
    partner: true,
    shikiTheme: "rose-pine",
    shikiThemeLight: "rose-pine-dawn",
    background: {
      from: "#FF4500",
      to: "#000000",
    },
  },
  elevenlabs: {
    name: "ElevenLabs",
    category: "partner",
    partner: true,
    shikiTheme: "vitesse-black",
    shikiThemeLight: "github-light",
    background: {
      from: "#000000",
      to: "#000000",
    },
  },
  triggerdev: {
    name: "Trigger.dev",
    category: "partner",
    partner: true,
    shikiTheme: "catppuccin-mocha",
    shikiThemeLight: "catppuccin-latte",
    background: {
      from: "#121317",
      to: "#121317",
    },
  },
  aws: {
    name: "AWS",
    category: "partner",
    partner: true,
    shikiTheme: "vitesse-dark",
    shikiThemeLight: "github-light",
    background: {
      from: "#151D26",
      to: "#151D26",
    },
  },
  auth0: {
    name: "Auth0",
    category: "partner",
    partner: true,
    shikiTheme: "dracula",
    shikiThemeLight: "catppuccin-latte",
    background: {
      from: "#171717",
      to: "#24173A",
    },
  },
  firecrawl: {
    name: "Firecrawl",
    category: "partner",
    partner: true,
    shikiTheme: "rose-pine",
    shikiThemeLight: "github-light",
    background: {
      from: "#000000",
      to: "#000000",
    },
  },

  // ==========================================
  // RAY.SO GRADIENT THEMES
  // ==========================================
  candy: {
    name: "Candy",
    category: "gradient",
    shikiTheme: "catppuccin-mocha",
    shikiThemeLight: "catppuccin-latte",
    background: {
      from: "#A58EFB",
      to: "#E9BFF8",
    },
  },
  breeze: {
    name: "Breeze",
    category: "gradient",
    shikiTheme: "tokyo-night",
    shikiThemeLight: "vitesse-light",
    background: {
      from: "#CF2F98",
      to: "#6A3DEC",
    },
  },
  midnight: {
    name: "Midnight",
    category: "gradient",
    shikiTheme: "dracula",
    shikiThemeLight: "github-light",
    background: {
      from: "#4CC8C8",
      to: "#202033",
    },
  },
  sunset: {
    name: "Sunset",
    category: "gradient",
    shikiTheme: "rose-pine",
    shikiThemeLight: "rose-pine-dawn",
    background: {
      from: "#FFCF73",
      to: "#FF7A2F",
    },
  },
  crimson: {
    name: "Crimson",
    category: "gradient",
    shikiTheme: "dracula",
    shikiThemeLight: "github-light",
    background: {
      from: "#FF6363",
      to: "#733434",
    },
  },
  falcon: {
    name: "Falcon",
    category: "gradient",
    shikiTheme: "vitesse-dark",
    shikiThemeLight: "vitesse-light",
    background: {
      from: "#BDE3EC",
      to: "#363654",
    },
  },
  meadow: {
    name: "Meadow",
    category: "gradient",
    shikiTheme: "everforest-dark",
    shikiThemeLight: "everforest-light",
    background: {
      from: "#59D499",
      to: "#A0872D",
    },
  },
  raindrop: {
    name: "Raindrop",
    category: "gradient",
    shikiTheme: "nord",
    shikiThemeLight: "github-light",
    background: {
      from: "#8EC7FB",
      to: "#1C55AA",
    },
  },
  forest: {
    name: "Forest",
    category: "gradient",
    shikiTheme: "everforest-dark",
    shikiThemeLight: "everforest-light",
    background: {
      from: "#506853",
      to: "#213223",
    },
  },
  sand: {
    name: "Sand",
    category: "gradient",
    shikiTheme: "gruvbox-dark-medium",
    shikiThemeLight: "gruvbox-light-medium",
    background: {
      from: "#EED5B6",
      to: "#AF8856",
    },
  },
  ice: {
    name: "Ice",
    category: "gradient",
    shikiTheme: "nord",
    shikiThemeLight: "github-light",
    background: {
      from: "#FFFFFF",
      to: "#80DEEA",
    },
  },
  noir: {
    name: "Noir",
    category: "gradient",
    shikiTheme: "github-dark",
    shikiThemeLight: "github-light",
    background: {
      from: "#B1B1B1",
      to: "#181818",
    },
  },
  bitmap: {
    name: "Bitmap",
    category: "gradient",
    shikiTheme: "synthwave-84",
    shikiThemeLight: "github-light",
    background: {
      from: "#881616",
      to: "#F1393F",
    },
  },
  mono: {
    name: "Mono",
    category: "gradient",
    shikiTheme: "github-dark",
    shikiThemeLight: "github-light",
    background: {
      from: "#333333",
      to: "#181818",
    },
  },

  // ==========================================
  // DEVELOPER CLASSICS
  // ==========================================
  vesper: {
    name: "Vesper",
    category: "classic",
    shikiTheme: "vesper",
    shikiThemeLight: "github-light",
    background: {
      from: "#101010",
      to: "#1c1c1c",
    },
  },
  poimandres: {
    name: "Poimandres",
    category: "classic",
    shikiTheme: "poimandres",
    shikiThemeLight: "github-light",
    background: {
      from: "#1b1e2e",
      to: "#252b42",
    },
  },
  dracula: {
    name: "Dracula",
    category: "classic",
    shikiTheme: "dracula",
    shikiThemeLight: "github-light",
    background: {
      from: "#7928CA",
      to: "#FF0080",
    },
  },
  tokyoNight: {
    name: "Tokyo Night",
    category: "classic",
    shikiTheme: "tokyo-night",
    shikiThemeLight: "vitesse-light",
    background: {
      from: "#1a1b26",
      to: "#7aa2f7",
    },
  },
  nord: {
    name: "Nord",
    category: "classic",
    shikiTheme: "nord",
    shikiThemeLight: "github-light",
    background: {
      from: "#2E3440",
      to: "#88C0D0",
    },
  },
  oneDark: {
    name: "One Dark Pro",
    category: "classic",
    shikiTheme: "one-dark-pro",
    shikiThemeLight: "one-light",
    background: {
      from: "#282c34",
      to: "#61afef",
    },
  },
  catppuccin: {
    name: "Catppuccin Mocha",
    category: "classic",
    shikiTheme: "catppuccin-mocha",
    shikiThemeLight: "catppuccin-latte",
    background: {
      from: "#cba6f7",
      to: "#89b4fa",
    },
  },
  synthwave: {
    name: "Synthwave '84",
    category: "classic",
    shikiTheme: "synthwave-84",
    shikiThemeLight: "github-light",
    background: {
      from: "#ff71ce",
      to: "#01cdfe",
    },
  },
  githubDark: {
    name: "GitHub Dark",
    category: "classic",
    shikiTheme: "github-dark",
    shikiThemeLight: "github-light",
    background: {
      from: "#24292e",
      to: "#040d21",
    },
  },
};
