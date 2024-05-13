"use client";
import { setTitle } from "@/redux/Features/CodeEditor/editorSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React from "react";

const EditorHeader = ({ setTitle }: { setTitle: (title: string) => void }) => {
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
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="flex gap-2 opacity-0">
        <div className="h-3 w-3 rounded-full bg-[#FF5E55]"></div>
        <div className="h-3 w-3 rounded-full bg-[#FFBF05]"></div>
        <div className="h-3 w-3 rounded-full bg-[#19CC3A]"></div>
      </div>
    </div>
  );
};

export default EditorHeader;
