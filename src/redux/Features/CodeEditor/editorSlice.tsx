"use client";

import { ThemesNameT } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

export type EditorState = {
  theme: ThemesNameT;
  background: boolean;
  darkMode: boolean;
  padding: 16 | 32 | 64 | 128;
  language: string | undefined;
  title: string;
  detactedLanguage: string | undefined;
  node: HTMLDivElement | undefined;
  exporting: boolean;
  codeEditorWidth?: number;
};

const initialState: EditorState = {
  theme: "candy",
  background: true,
  darkMode: true,
  padding: 64,
  language: undefined,
  title: "untitled-1",
  detactedLanguage: undefined,
  node: undefined,
  exporting: false,
};

export const EditorSlice = createSlice({
  name: "editorState",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setBackground: (state, action) => {
      state.background = action.payload;
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
    setPadding: (state, action) => {
      state.padding = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setDetactedLanguage: (state, action) => {
      state.detactedLanguage = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setNode: (state, action) => {
      state.node = action.payload;
    },
    setExporting: (state, action) => {
      state.exporting = action.payload;
    },
    setCodeEditorWidth: (state, acton) => {
      state.codeEditorWidth = acton.payload;
    },
  },
});

export const {
  setTheme,
  setBackground,
  setDarkMode,
  setLanguage,
  setPadding,
  setTitle,
  setDetactedLanguage,
  setNode,
  setExporting,
  setCodeEditorWidth,
} = EditorSlice.actions;

export const editorReducer = EditorSlice.reducer;
