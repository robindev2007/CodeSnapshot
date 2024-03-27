import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch } from "@/redux/store";
import { setLanguage } from "@/redux/Features/CodeEditor/editorSlice";
// @ts-ignore
import * as Languages from "react-syntax-highlighter/dist/esm/languages/hljs";

function LanguageSelector() {
  const dispatch = useAppDispatch();

  return (
    <div className="grid gap-1">
      <span className="text-sm text-muted-foreground">Languages</span>

      <Select onValueChange={(value) => dispatch(setLanguage(value))}>
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="auto" />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(Languages).map((Language) => (
            <SelectItem key={Language} value={Language}>
              {Language}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default LanguageSelector;
