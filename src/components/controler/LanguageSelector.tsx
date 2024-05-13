import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  EditorState,
  setLanguage,
} from "@/redux/Features/CodeEditor/editorSlice";
import { customLanguages } from "@/lib/supportedCodeLanguage";
import { getLanguageClassNameByKey } from "@/lib/utils";

function LanguageSelector({
  editorState,
  changeLanguage,
}: {
  editorState: EditorState;
  changeLanguage: (value: string) => void;
}) {
  const dispatch = useAppDispatch();

  return (
    <div className="grid gap-1">
      <span className="text-sm text-muted-foreground">Languages</span>

      <Select onValueChange={(e) => setLanguage(e)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue
            className="capitalize"
            placeholder={
              editorState.detactedLanguage
                ? editorState.detactedLanguage + " (Auto)"
                : "auto"
            }
          />
        </SelectTrigger>

        <SelectContent>
          <SelectItem key={"Auto"} value="Auto">
            {`${editorState.detactedLanguage ? editorState.detactedLanguage.toUpperCase() : "Auto"} (Auto)`}
          </SelectItem>
          {Object.keys(customLanguages).map((key) => (
            <SelectItem
              key={key}
              value={getLanguageClassNameByKey(
                customLanguages,
                customLanguages[key].name,
              )}
            >
              {customLanguages[key].name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default LanguageSelector;
