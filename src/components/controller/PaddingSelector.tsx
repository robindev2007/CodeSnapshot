"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function PaddingSelector({
  paddingList,
  editorPadding,
  stePadding,
}: {
  paddingList: number[];
  editorPadding: number;
  stePadding: (value: number) => void;
}) {
  return (
    <div className="grid shrink-0 gap-1 text-sm">
      <span className="text-sm text-muted-foreground">Padding</span>
      <Select
        value={String(editorPadding)}
        onValueChange={(value) => stePadding(Number(value))}
      >
        <SelectTrigger className="h-9 w-24 px-2.5 text-xs font-medium">
          <SelectValue placeholder={`${editorPadding}px`} />
        </SelectTrigger>
        <SelectContent>
          {paddingList.map((padding) => (
            <SelectItem
              key={padding}
              value={String(padding)}
              className="text-xs"
            >
              {padding}px
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default PaddingSelector;
