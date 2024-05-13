import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  TextareaHTMLAttributes,
  useRef,
  useState,
} from "react";
import CodeHighlighter from "./CodeHilighter";

const EditorBody = ({
  code,
  setCode,
  theme,
}: {
  code: string;
  setCode: (code: string) => void;
  theme?: "dark" | "lite";
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null!);
  const editorRef = useRef<HTMLDivElement>(null!);

  const handleSetCode = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  return (
    <div
      ref={editorRef}
      className="relative grid h-full min-h-20 grid-cols-[1fr] grid-rows-[1fr]"
    >
      <textarea
        ref={textareaRef}
        className="code-textarea z-10 col-start-1 col-end-1 row-start-1 row-end-1 m-0 h-full resize-none bg-transparent bg-scroll p-3 pb-0 align-text-top text-red-400/0 caret-white"
        value={code}
        onChange={handleSetCode}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        autoCapitalize="off"
        data-enable-grammarly="false"
      />

      <div className="col-start-1 col-end-1 row-start-1 row-end-1 m-0 p-3 pb-0">
        <CodeHighlighter
          theme={theme}
          code={
            code +
            `
        `
          }
        />
      </div>
    </div>
  );
};

export default EditorBody;
