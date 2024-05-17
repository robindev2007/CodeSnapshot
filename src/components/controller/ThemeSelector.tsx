import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { customThemes } from "@/lib/Themes";
import { ThemesNameT } from "@/types/types";
import { EditorState } from "@/redux/Features/CodeEditor/editorSlice";

const ThemeSelector = ({
  setEditorTheme,
  editorState,
}: {
  setEditorTheme: (value: string) => void;
  editorState: EditorState;
}) => {
  return (
    <div className="grid gap-1 text-sm">
      <span className="text-sm text-muted-foreground">Themes</span>

      <Select
        defaultValue="candy"
        // value={editorState.theme}
        onValueChange={(value) => setEditorTheme(value)}
      >
        <SelectTrigger className="w-16">
          <SelectValue>
            <div
              className="h-5 w-5 shrink-0 rounded-full bg-red-400"
              style={{
                background: `linear-gradient(140deg,${customThemes[editorState.theme].background.from},${customThemes[editorState.theme].background.to}`,
              }}
            />
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {Object.keys(customThemes).map((theme) => (
            <SelectItem key={theme} className="text-xs" value={theme}>
              <div className="flex items-center gap-2">
                <div
                  className="h-5 w-5 shrink-0 rounded-full bg-red-400"
                  style={{
                    background: `linear-gradient(140deg,${customThemes[theme as ThemesNameT].background.from},${customThemes[theme as ThemesNameT].background.to}`,
                  }}
                />
                {customThemes[theme as ThemesNameT].name}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ThemeSelector;
