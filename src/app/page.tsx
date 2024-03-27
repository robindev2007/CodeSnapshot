"use client";
import { useRef, useState } from "react";
import Resizeable from "@/components/Resizeable";
import CodeEditor from "@/components/CodeEditor";
import DomToImage from "dom-to-image";
import ControlPanal from "@/components/home-page/ControlPanal";

export default function Home() {
  const editorRef = useRef<HTMLDivElement>(null!);

  return (
    <div className="flex min-h-screen flex-col gap-6">
      <p>This is code to image project</p>
      <div className="flex justify-center">
        <Resizeable>
          <CodeEditor ref={editorRef} />
        </Resizeable>
      </div>

      <ControlPanal node={editorRef.current} />
    </div>
  );
}
