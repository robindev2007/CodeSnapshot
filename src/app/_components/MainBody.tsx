"use client";
import Editor from "@/components/Editor/Editor";
import React from "react";

const MainBody = ({ initialCode }: { initialCode: string }) => {
  return (
    <div className="row-span-3 flex h-full w-full items-center justify-center">
      <Editor initialCode={initialCode} />
    </div>
  );
};

export default MainBody;
