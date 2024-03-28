import React from "react";
import Resizeable from "../Resizeable";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/store";
import { customThemes } from "@/lib/Themes";
import { Header } from "../CodeEditor";
import { EditorBody } from "../Editor";

function MainEditor() {
  const editorState = useAppSelector((state) => state.editor);

  return (
    <Resizeable>
      <div
        //   ref={nodeDivRef}
        className={cn(
          "relative transition-all duration-300 ease-linear",
          editorState.darkMode && "dark",
        )}
      >
        <div
          className="overflow-hidden rounded-lg bg-editor/75 shadow-mac backdrop-blur-3xl"
          style={{
            padding: `${editorState.padding}px`,
            // background: editorState.background
            //   ? `linear-gradient(140deg,${customThemes[editorState.theme].background.from},${customThemes[editorState.theme].background.to}`
            //   : "transparent",
          }}
        >
          <Header />
          <EditorBody />
        </div>
      </div>
    </Resizeable>
  );
}

export default MainEditor;
