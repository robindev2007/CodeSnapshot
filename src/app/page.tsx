"use client";
import { useRef, useState } from "react";
import Resizeable from "@/components/Resizeable";
import CodeEditor from "@/components/CodeEditor";
import DomToImage from "dom-to-image";
import ControlPanal from "@/components/home-page/ControlPanal";
import HljsCodeEditor from "@/components/HljsCodeEditor";
import { useAppSelector } from "@/redux/store";
import { customThemes } from "@/lib/Themes";

export default function Home() {
  const editorRef = useRef<HTMLDivElement>(null!);
  const editorState = useAppSelector((state) => state.editor);

  return (
    <div className="flex min-h-screen scroll-m-48 flex-col justify-center gap-6 bg-background text-foreground">
      <div
        className="flex justify-center"
        style={
          editorState.darkMode
            ? (customThemes[editorState.theme].syntax
                .dark as React.CSSProperties)
            : (customThemes[editorState.theme].syntax
                .light as React.CSSProperties)
        }
      >
        <Resizeable>
          <CodeEditor ref={editorRef} />
          {/* <HljsCodeEditor /> */}
        </Resizeable>
      </div>

      <ControlPanal node={editorRef.current} />
    </div>
  );
}
