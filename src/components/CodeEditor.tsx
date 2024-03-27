"use client";
import { getRandomCode } from "@/lib/constance";
import { cn } from "@/lib/utils";
import { setTitle } from "@/redux/Features/CodeEditor/editorSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { forwardRef, useEffect, useRef, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as Themes from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeEditor = forwardRef<HTMLDivElement>((props, ref) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [code, setCode] = useState(getRandomCode());

  const editorState = useAppSelector((state) => state.editor);

  return (
    <div
      ref={ref}
      className={cn(
        "dark relative transition-all duration-300 ease-in-out",
        !editorState.darkMode && "lite",
      )}
      style={{
        padding: `${editorState.padding}px`,
        backgroundImage: editorState.background
          ? `linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))`
          : "",
      }}
    >
      <div
        className={cn(
          "shadow-mac bg-editor overflow-hidden rounded-md backdrop-blur-3xl",
        )}
      >
        <div>
          <Header />
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
              onChange={(e) => setCode(e.target.value)}
            />
            <SyntaxHighlighter
              language={editorState.language}
              style={
                (Themes as { [key: string]: typeof Themes.a11yDark })[
                  editorState.theme
                ]
              }
              wrapLongLines
              wrapLines
              customStyle={{
                flex: "1",
                background: "transparent",
                padding: "20px 12px",
              }}
              children={code}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default CodeEditor;

export const Header = () => {
  const editorState = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center justify-between px-3 py-2">
      <div className="flex gap-2">
        <div className="h-3 w-3 rounded-full bg-[#FF5E55]"></div>
        <div className="h-3 w-3 rounded-full bg-[#FFBF05]"></div>
        <div className="h-3 w-3 rounded-full bg-[#19CC3A]"></div>
      </div>
      <input
        type="text"
        className="w-fit border-none bg-transparent text-center text-sm font-medium text-[#9CA3AF] outline-none"
        placeholder="untitled-1"
        // value={editorState.title}
        onChange={(e) => dispatch(setTitle(e.target.value))}
      />
      <div className="flex gap-2 opacity-0">
        <div className="h-3 w-3 rounded-full bg-[#FF5E55]"></div>
        <div className="h-3 w-3 rounded-full bg-[#FFBF05]"></div>
        <div className="h-3 w-3 rounded-full bg-[#19CC3A]"></div>
      </div>
    </div>
  );
};
