import { customThemes } from "@/lib/Themes";
import { cn } from "@/lib/utils";
import { EditorState } from "@/redux/Features/CodeEditor/editorSlice";
import React, { ReactNode } from "react";

const EditorBackground = ({
  editorState,
  children,
}: {
  editorState: EditorState;
  children: ReactNode;
}) => {
  return (
    <div
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
        {children}
      </div>
    </div>
  );
};

export default EditorBackground;
