import React, { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  setDetactedLanguage,
  setLanguage,
} from "@/redux/Features/CodeEditor/editorSlice";
import { customLanguages } from "@/lib/supportedCodeLanguage";
import { cn, getLanguageNameByClassName } from "@/lib/utils";
import { customThemes } from "@/lib/Themes";

export default function CodeHighlighter({
  code,
  className,
}: {
  code: string;
  className?: string;
  theme?: "dark" | "lite";
}) {
  const codeRef = useRef<HTMLDivElement>(null!);

  const editorState = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();

  // configure hljs
  useEffect(() => {
    try {
      hljs.configure({
        languages: Object.keys(customLanguages).map(
          (language) => customLanguages[language].name,
        ),
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const highlightCode = () => {};

  useEffect(() => {
    try {
      // if (editorState.language) {
      //   const { language, value } = hljs.highlight(code, {
      //     language: editorState.language,
      //   });
      // }

      const { language, value } = hljs.highlightAuto(code);

      dispatch(setDetactedLanguage(language));

      if (!editorState.language) {
        codeRef.current.innerHTML = value;
      }

      if (code.trim().length === 0) return;

      const languageName = Object.keys(customLanguages).find((value) => {
        if (customLanguages[value].name === language)
          return customLanguages[value].className;
      });

      dispatch(setDetactedLanguage(languageName));
    } catch (error) {
      console.log(error);
    }
  }, [code, editorState.language]);

  useEffect(() => {
    if (editorState.language) {
      const { value } = hljs.highlight(code, {
        language:
          getLanguageNameByClassName(customLanguages, editorState.language) ||
          "javascript",
        ignoreIllegals: true,
      });
      codeRef.current.innerHTML = value;
    }
  }, [editorState.language]);

  return (
    <div
      style={
        editorState.darkMode
          ? (customThemes[editorState.theme].syntax.dark as React.CSSProperties)
          : (customThemes[editorState.theme].syntax.dark as React.CSSProperties)
      }
      className="hljs"
    >
      <pre className={cn("hljs-pre hljs", className)}>
        <code className="hljs hljs-codes" ref={codeRef}>
          {code}
        </code>
      </pre>
    </div>
  );
}
