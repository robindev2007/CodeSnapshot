"use client";
import Editor from "@/components/Editor/Editor";
import { customLanguages } from "@/lib/supportedCodeLanguage";
import { useAppSelector } from "@/redux/store";
import React from "react";

const MainBody = ({ initialCode }: { initialCode: string }) => {
  const editorState = useAppSelector((state) => state.editor);
  return (
    <div className="row-span-3 flex h-full w-full flex-col items-center justify-center">
      <Editor initialCode={initialCode} />
    </div>
  );
};

export default MainBody;
