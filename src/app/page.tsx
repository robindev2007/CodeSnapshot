"use client";
import { useRef, useState } from "react";
import Resizeable from "@/components/Resizeable";
import ControlPanal from "@/components/home-page/ControlPanal";
import { useAppSelector } from "@/redux/store";
import { customThemes } from "@/lib/Themes";
import { CodeEditor } from "@/components/CodeEditor";
import MainEditor from "@/components/Editor/MainEditor";

export default function Home() {
  const editorRef = useRef<HTMLDivElement>(null!);
  const editorState = useAppSelector((state) => state.editor);

  return (
    <div className="flex min-h-screen flex-col gap-6 bg-background text-foreground">
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
        <MainEditor />
      </div>

      <ControlPanal node={editorRef.current} />
    </div>
  );
}
