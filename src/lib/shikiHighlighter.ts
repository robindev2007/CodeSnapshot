"use client";

import { createHighlighter, type HighlighterGeneric } from "shiki";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

const DEFAULT_THEMES = [
  "catppuccin-mocha",
  "catppuccin-latte",
  "tokyo-night",
  "dracula",
  "rose-pine",
  "rose-pine-dawn",
  "everforest-dark",
  "everforest-light",
  "nord",
  "github-dark",
  "github-light",
  "one-dark-pro",
  "one-light",
  "synthwave-84",
  "vitesse-dark",
  "vitesse-light",
  "vitesse-black",
  "vesper",
  "poimandres",
  "material-theme-palenight",
  "gruvbox-dark-medium",
  "gruvbox-light-medium",
];

const DEFAULT_LANGUAGES = [
  "javascript",
  "typescript",
  "tsx",
  "jsx",
  "python",
  "rust",
  "go",
  "swift",
  "kotlin",
  "html",
  "css",
  "json",
  "bash",
  "sql",
  "cpp",
  "c",
  "csharp",
  "java",
  "markdown",
  "yaml",
  "dockerfile",
  "php",
  "ruby",
];

// Mapping custom/short language keys to Shiki web-bundle names
export const LANGUAGE_MAP: Record<string, string> = {
  shell: "bash",
  sh: "bash",
  bash: "bash",
  zsh: "zsh",
  plaintext: "text",
  unknown: "text",
  text: "text",
  javascript: "javascript",
  js: "javascript",
  typescript: "typescript",
  ts: "typescript",
  tsx: "tsx",
  jsx: "jsx",
  py: "python",
  python: "python",
  html: "html",
  xml: "xml",
  css: "css",
  scss: "scss",
  sass: "sass",
  json: "json",
  sql: "sql",
  cpp: "cpp",
  "c++": "cpp",
  c: "c",
  java: "java",
  markdown: "markdown",
  md: "markdown",
  yaml: "yaml",
  yml: "yaml",
  php: "php",
  ruby: "ruby",
  rb: "ruby",
  swift: "swift",
  kotlin: "kotlin",
  kt: "kotlin",
  graphql: "graphql",
  svelte: "svelte",
  vue: "vue",
};

let highlighterPromise: Promise<HighlighterGeneric<any, any>> | null = null;
let highlighterInstance: HighlighterGeneric<any, any> | null = null;

export async function getHighlighterInstance() {
  if (highlighterInstance) return highlighterInstance;
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: DEFAULT_THEMES,
      langs: DEFAULT_LANGUAGES,
      engine: createJavaScriptRegexEngine(),
    }).then((h) => {
      highlighterInstance = h;
      return h;
    });
  }
  return highlighterPromise;
}

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function getShikiLang(rawLang?: string | null): string {
  if (!rawLang) return "javascript";
  const normalized = rawLang.toLowerCase().trim();
  return LANGUAGE_MAP[normalized] || normalized;
}

export async function highlightCodeWithShiki(
  code: string,
  lang: string,
  theme: string,
): Promise<string> {
  const highlighter = await getHighlighterInstance();
  const targetLang = getShikiLang(lang);

  const safeLang = highlighter.getLoadedLanguages().includes(targetLang)
    ? targetLang
    : "javascript";
  const safeTheme = highlighter.getLoadedThemes().includes(theme)
    ? theme
    : "catppuccin-mocha";

  const raw = highlighter.codeToHtml(code, {
    lang: safeLang,
    theme: safeTheme,
  });

  // Shiki inserts a literal \n between every </span><span class="line"> inside <code>.
  // With white-space: pre-wrap those text nodes render as real line breaks,
  // doubling the visual height of the layer vs the textarea.
  // Strip them so each .line span is the sole source of line spacing.
  return raw.replace(/(<\/span>)\n(<span class="line")/g, "$1$2");
}
