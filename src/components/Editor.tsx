import { getRandomCode } from "@/lib/constance";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import HilightedCode from "./HljsCodeEditor";

export const EditorBody = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [code, setCode] = useState("");

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
        className="absolute inset-0 left-0 top-0 h-full resize-none overflow-hidden bg-transparent px-3 py-5 font-jet text-transparent caret-white outline-none"
        ref={textareaRef}
        value={code}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        autoCapitalize="off"
        data-enable-grammarly="false"
        onChange={handleChange}
      />

      <HilightedCode code={code} />
    </div>
  );
};
