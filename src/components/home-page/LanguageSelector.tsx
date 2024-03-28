import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setLanguage } from "@/redux/Features/CodeEditor/editorSlice";
import { customLanguages } from "@/lib/supportedCodeLanguage";
import { getLanguageClassNameByKey } from "@/lib/utils";

function LanguageSelector() {
  const dispatch = useAppDispatch();
  const editorState = useAppSelector((state) => state.editor);

  const hangleLanguageChange = (value: string) => {
    console.log(value);
    if (value === "Auto") {
      dispatch(setLanguage(undefined));
      return;
    }

    dispatch(setLanguage(value));
  };

  return (
    <div className="grid gap-1">
      <span className="text-sm text-muted-foreground">Languages</span>

      <Select onValueChange={hangleLanguageChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={"auto"} />
        </SelectTrigger>

        <SelectContent>
          <SelectItem key={"Auto"} value="Auto">
            {`${editorState.detactedLanguage?.toUpperCase()} (Auto)`}
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
