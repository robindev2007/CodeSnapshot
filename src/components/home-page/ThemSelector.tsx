// import * as Themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as Themes from "react-syntax-highlighter/dist/cjs/styles/hljs";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch } from "@/redux/store";
import { setTheme } from "@/redux/Features/CodeEditor/editorSlice";

function ThemSelector() {
  const dispatch = useAppDispatch();

  return (
    <div className="grid gap-1 text-sm">
      <span className="text-sm text-muted-foreground">Themes</span>

      <Select onValueChange={(value) => dispatch(setTheme(value))}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="atomOneDark" />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(Themes).map((theme) => (
            <SelectItem key={theme} className="text-xs" value={theme}>
              {theme}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default ThemSelector;
