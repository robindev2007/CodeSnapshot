"use client";

import { createSlice } from "@reduxjs/toolkit";

export type EditorState = {
  theme: string;
  background: boolean;
  darkMode: boolean;
  padding: 16 | 32 | 64 | 128;
  language?: string;
  title: string;
};

const initialState: EditorState = {
  theme: "atomOneDark",
  background: true,
  darkMode: true,
  padding: 64,
  language: "javascipt",
  title: "Untitled-1",
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
    setTitle: (state, action) => {
      state.language = action.payload;
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
} = EditorSlice.actions;

export const editorReducer = EditorSlice.reducer;
