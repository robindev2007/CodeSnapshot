import React from "react";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setPadding } from "@/redux/Features/CodeEditor/editorSlice";

function PaddingSelector() {
  const dispatch = useAppDispatch();
  const editorState = useAppSelector((state) => state.editor);

  const paddingList = [16, 32, 64, 128];

  return (
    <div className="grid gap-1">
      <span className="text-sm text-muted-foreground">Select Language</span>
      <div className="grid grid-cols-4 gap-1">
        {paddingList.map((padding) => (
          <Button
            key={padding}
            onClick={() => dispatch(setPadding(padding))}
            variant={editorState.padding == padding ? "secondary" : "ghost"}
            size={"sm"}
          >
            {padding}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default PaddingSelector;
