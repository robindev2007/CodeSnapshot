"use client";

import React, { ChangeEvent, useEffect, useRef } from "react";
import CodeHighlighter from "./CodeHilighter";

interface EditorBodyProps {
  code: string;
  setCode: (code: string) => void;
  theme?: "dark" | "lite";
}

const EditorBody = ({ code, setCode }: EditorBodyProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const highlighterRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);

  const handleSetCode = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const textarea = textareaRef.current;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const updated = code.substring(0, start) + "  " + code.substring(end);
      setCode(updated);

      requestAnimationFrame(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2;
      });
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    if (highlighterRef.current) {
      highlighterRef.current.scrollTop = e.currentTarget.scrollTop;
      highlighterRef.current.scrollLeft = e.currentTarget.scrollLeft;
    }
  };

  // Auto-resize textarea to fit content so it never scrolls independently
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [code]);

  return (
    <div
      ref={editorRef}
      className="relative grid h-full min-h-20 grid-cols-[1fr] grid-rows-[1fr]"
    >
      <textarea
        ref={textareaRef}
        className="code-textarea z-10 col-start-1 col-end-1 row-start-1 row-end-1 m-0 h-full w-full resize-none bg-transparent p-4 align-text-top outline-none"
        value={code}
        onChange={handleSetCode}
        onKeyDown={handleKeyDown}
        onScroll={handleScroll}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        autoCapitalize="off"
        data-enable-grammarly="false"
      />

      <div
        ref={highlighterRef}
        className="pointer-events-none col-start-1 col-end-1 row-start-1 row-end-1 m-0 w-full overflow-hidden p-4 select-none"
      >
        <CodeHighlighter code={code} />
      </div>
    </div>
  );
};

export default EditorBody;
