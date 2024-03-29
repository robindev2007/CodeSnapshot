import { getRandomCode } from "@/lib/constance";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import HljsCodeEditor from "./HljsCodeEditor";
import hljs from "highlight.js";
import { setDetactedLanguage } from "@/redux/Features/CodeEditor/editorSlice";

export const EditableCodeEditor = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [code, setCode] = useState("");
  const editorState = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  useEffect(() => {
    setCode(getRandomCode());
  }, []);

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={() => textareaRef.current?.focus()}
      onClick={() => textareaRef.current?.focus()}
      className="relative flex grid-cols-1"
    >
      <textarea
        className="absolute inset-0 left-0 top-0 h-full resize-none overflow-hidden whitespace-pre-wrap bg-transparent px-3 py-5 text-transparent caret-white outline-none"
        ref={textareaRef}
        value={code}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        autoCapitalize="off"
        data-enable-grammarly="false"
        onChange={handleChange}
      />

      <HljsCodeEditor code={code} />
    </div>
  );
};

// npm r net tls language-classifier
