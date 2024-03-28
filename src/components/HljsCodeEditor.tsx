import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setDetactedLanguage } from "@/redux/Features/CodeEditor/editorSlice";
import { customLanguages } from "@/lib/supportedCodeLanguage";
import { getLanguageNameByClassName } from "@/lib/utils";

export default function HilightedCode({ code }: { code: string }) {
  const codeRef = useRef<HTMLDivElement>(null!);

  const editorState = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();

  useEffect(() => {
    hljs.configure({
      languages: Object.keys(customLanguages).map(
        (language) => customLanguages[language].name,
      ),
    });
  }, []);

  useEffect(() => {
    const { language, value } = hljs.highlightAuto(code);
    if (!editorState.language) {
      codeRef.current.innerHTML = value;
    }

    if (code.trim().length === 0) return;

    const languageName = Object.keys(customLanguages).find((value) => {
      if (customLanguages[value].name === language)
        return customLanguages[value].className;
    });

    dispatch(setDetactedLanguage(languageName));
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
    <pre className="text-wrap px-3 py-5">
      <code ref={codeRef}>{code}</code>
    </pre>
  );
}
