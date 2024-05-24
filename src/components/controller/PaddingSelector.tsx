import React from "react";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/store";

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
    <div className="grid shrink-0 gap-1">
      <span className="text-sm text-muted-foreground">Set Padding</span>
      <div className="grid grid-cols-4 gap-1">
        {paddingList.map((padding) => (
          <Button
            key={padding}
            onClick={() => stePadding(padding)}
            variant={editorPadding == padding ? "secondary" : "ghost"}
            size={"sm"}
            className="shrink-0"
          >
            {padding}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default PaddingSelector;
