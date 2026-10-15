"use client";

import React, { useEffect, useState, useTransition } from "react";
import { customThemes } from "@/lib/Themes";
import { detectLanguage } from "@/lib/detectLanguage";
import {
  escapeHtml,
  highlightCodeWithShiki,
} from "@/lib/shikiHighlighter";
import { cn } from "@/lib/utils";
import { setdetectedLanguage } from "@/redux/Features/CodeEditor/editorSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";

interface CodeHighlighterProps {
  code: string;
  className?: string;
  theme?: "dark" | "lite";
}

export default function CodeHighlighter({
  code,
  className,
}: CodeHighlighterProps) {
  const [html, setHtml] = useState<string>(() => {
    // Initial fallback while Shiki initializes
    return `<pre class="shiki" style="background-color:transparent"><code>${escapeHtml(code)}</code></pre>`;
  });
  const [, startTransition] = useTransition();

  const editorState = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();

  // 1. Language determination & auto-detection
  useEffect(() => {
    if (!editorState.language) {
      // Auto-detect language
      const detected = detectLanguage(code);
      dispatch(setdetectedLanguage(detected.name));
    }
  }, [code, editorState.language, dispatch]);

  // 2. Syntax Highlighting
  useEffect(() => {
    let isCancelled = false;

    const themeKey = editorState.theme || "candy";
    const themeConfig = customThemes[themeKey] || customThemes.candy;
    const shikiTheme = editorState.darkMode
      ? themeConfig.shikiTheme
      : themeConfig.shikiThemeLight || themeConfig.shikiTheme;

    const rawLang =
      editorState.language || editorState.detectedLanguage || "javascript";

    highlightCodeWithShiki(code, rawLang, shikiTheme)
      .then((highlightedHtml) => {
        if (!isCancelled) {
          startTransition(() => {
            setHtml(highlightedHtml);
          });
        }
      })
      .catch((err) => {
        console.error("Shiki highlight error:", err);
        if (!isCancelled) {
          setHtml(
            `<pre class="shiki" style="background-color:transparent"><code>${escapeHtml(code)}</code></pre>`,
          );
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [
    code,
    editorState.theme,
    editorState.language,
    editorState.detectedLanguage,
    editorState.darkMode,
  ]);

  return (
    <div
      className={cn("shiki-wrapper w-full", className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
