export type ThemeCategory = "partner" | "gradient" | "classic";

export type ThemesNameT =
  // Ray.so Partner Themes
  | "vercel"
  | "supabase"
  | "tailwind"
  | "openai"
  | "stripe"
  | "gemini"
  | "cloudflare"
  | "resend"
  | "mintlify"
  | "prisma"
  | "clerk"
  | "nuxt"
  | "browserbase"
  | "elevenlabs"
  | "triggerdev"
  | "aws"
  | "auth0"
  | "firecrawl"
  // Ray.so Classic Gradients
  | "candy"
  | "breeze"
  | "midnight"
  | "sunset"
  | "crimson"
  | "falcon"
  | "meadow"
  | "raindrop"
  | "forest"
  | "sand"
  | "ice"
  | "noir"
  | "bitmap"
  | "mono"
  // Developer Classics
  | "vesper"
  | "poimandres"
  | "dracula"
  | "tokyoNight"
  | "nord"
  | "oneDark"
  | "catppuccin"
  | "synthwave"
  | "githubDark";

export interface ThemeConfig {
  name: string;
  category?: ThemeCategory;
  partner?: boolean;
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
