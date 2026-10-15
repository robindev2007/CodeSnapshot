"use client";
import Editor from "@/components/Editor/Editor";
import { useAppSelector } from "@/redux/store";
import React from "react";

const MainBody = ({ initialCode }: { initialCode: string }) => {
  const editorState = useAppSelector((state) => state.editor);
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center pb-28 pt-6">
      <Editor initialCode={initialCode} />
    </div>
  );
};

export default MainBody;
