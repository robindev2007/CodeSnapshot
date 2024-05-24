import React, { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  setdetectedLanguage,
  setLanguage,
} from "@/redux/Features/CodeEditor/editorSlice";
import { customLanguages } from "@/lib/supportedCodeLanguage";
import { cn, getLanguageName, getLanguageNameByClassName } from "@/lib/utils";
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

  const highlightCode = ({
    codeLanguage,
  }: {
    codeLanguage?: string | null;
  }) => {
    if (!codeLanguage || !codeRef.current) {
      const { language, value } = hljs.highlightAuto(code);
      codeRef.current.innerHTML = value;
      return;
    }

    console.log(codeLanguage);
    const { value, language } = hljs.highlight(code, {
      language: getLanguageName(codeLanguage) || "javascript",
      ignoreIllegals: true,
    });

    console.log(value);

    codeRef.current.innerHTML = value;
  };
  // configure hljs
  useEffect(() => {
    try {
      hljs.configure({
        languages: Object.keys(customLanguages).map(
          (language) => customLanguages[language].name,
        ),
      });
      highlightCode({});
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      const language =
        editorState.language || editorState.detectedLanguage || null;
      highlightCode({ codeLanguage: language });

      const detactedCode = hljs.highlightAuto(code);
      dispatch(setdetectedLanguage(detactedCode.language));

      // if (editorState.language) {
      //   const { value } = hljs.highlight(code, {
      //     language:
      //       getLanguageNameByClassName(customLanguages, editorState.language) ||
      //       "javascript",
      //     ignoreIllegals: true,
      //   });
      //   codeRef.current.innerHTML = value;
      // }

      // if (code.trim().length === 0) return;

      // const languageName = Object.keys(customLanguages).find((value) => {
      //   if (customLanguages[value].name === language)
      //     return customLanguages[value].className;
      // });

      // dispatch(setdetectedLanguage(languageName));
    } catch (error) {
      console.log(error);
    }
  }, [code, editorState.language]);

  // useEffect(() => {
  //   if (editorState.language) {
  //     const { value } = hljs.highlight(code, {
  //       language:
  //         getLanguageNameByClassName(customLanguages, editorState.language) ||
  //         "javascript",
  //       ignoreIllegals: true,
  //     });
  //     codeRef.current.innerHTML = value;
  //   }
  // }, [editorState.language]);

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
        <code className="hljs hljs-codes" ref={codeRef} />
      </pre>
    </div>
  );
}
