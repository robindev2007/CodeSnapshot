"use client";
import { cn } from "@/lib/utils";
import { setTitle } from "@/redux/Features/CodeEditor/editorSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { EditableCodeEditor } from "./EditableCodeEditor";
import HljsCodeEditor from "./HljsCodeEditor";
import { customThemes } from "@/lib/Themes";

const CodeEditor = forwardRef<HTMLDivElement>((props, ref) => {
  const editorState = useAppSelector((state) => state.editor);

  return (
    <div
      ref={ref}
      className={cn(
        "relative transition-all duration-300 ease-linear",
        editorState.darkMode && "dark",
      )}
      style={{
        padding: `${editorState.padding}px`,
        background: editorState.background
          ? `linear-gradient(140deg,${customThemes[editorState.theme].background.from},${customThemes[editorState.theme].background.to}`
          : "transparent",
      }}
    >
      <div className="overflow-hidden rounded-lg bg-editor/75 shadow-mac backdrop-blur-3xl">
        <Header />
        <EditableCodeEditor />
      </div>
    </div>
  );
});

CodeEditor.displayName = "CodeEditor";
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
