"use client";
import {
  setBackground,
  setDarkMode,
  setLanguage,
  setPadding,
  setTheme,
} from "@/redux/Features/CodeEditor/editorSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React from "react";
import ThemeSelector from "./ThemeSelector";
import PaddingSelector from "./PaddingSelector";
import LanguageSelector from "./LanguageSelector";
import ExportOptions from "./ExportOptions";
import SwitchWithLabel from "../ui/switch-with-label";

const Controller = () => {
  const dispatch = useAppDispatch();
  const editorState = useAppSelector((state) => state.editor);

  const paddingList = [16, 32, 64, 128];

  const setEditorTheme = (value: string) => {
    dispatch(setTheme(value));
  };

  const setEditorPadding = (value: number) => {
    dispatch(setPadding(value));
  };

  const handleLanguageChange = (value: string) => {
    console.log(value);
    if (value === "Auto") {
      dispatch(setLanguage(undefined));
      return;
    }

    dispatch(setLanguage(value));
  };

  return (
    <div className="mx-auto flex w-max max-w-full shrink-0 gap-3 overflow-auto rounded border bg-card/90 p-3 backdrop-blur">
      <ThemeSelector
        setEditorTheme={setEditorTheme}
        editorState={editorState}
      />
      <SwitchWithLabel
        defaultChecked
        label="Background"
        onCheckedChange={(e) => dispatch(setBackground(e))}
      />
      <SwitchWithLabel
        defaultChecked
        label="Dark Mode"
        onCheckedChange={(e) => dispatch(setDarkMode(e))}
      />
      <PaddingSelector
        paddingList={paddingList}
        editorPadding={editorState.padding}
        stePadding={setEditorPadding}
      />
      <LanguageSelector
        editorState={editorState}
        changeLanguage={handleLanguageChange}
      />
      <ExportOptions />
    </div>
  );
};

export default Controller;
