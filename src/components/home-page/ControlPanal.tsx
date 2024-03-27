"use client";
import React from "react";
import LanguageSelector from "./LanguageSelector";
import SwitchWithLable from "./SwitchWithLable";
import ThemSelector from "./ThemSelector";
import PaddingSelector from "./PaddingSelector";
import ExportOptions from "./ExportOptions";
import { useAppDispatch } from "@/redux/store";
import {
  setBackground,
  setDarkMode,
} from "@/redux/Features/CodeEditor/editorSlice";

function ControlPanal({ node }: { node: HTMLDivElement }) {
  const dispatch = useAppDispatch();

  return (
    <div className="fixed bottom-2 left-1/2 flex w-max -translate-x-1/2 gap-3 rounded-md border border-opacity-80 bg-card bg-opacity-60 p-4 shadow-xl backdrop-blur md:gap-5">
      <ThemSelector />
      <PaddingSelector />
      <SwitchWithLable
        defaultChecked
        onChange={(e) => dispatch(setBackground(e))}
        lable="Background"
      />
      <SwitchWithLable
        defaultChecked
        lable="Dark mode"
        onChange={(e) => dispatch(setDarkMode(e))}
      />
      <LanguageSelector />
      <ExportOptions node={node} />
    </div>
  );
}

export default ControlPanal;
