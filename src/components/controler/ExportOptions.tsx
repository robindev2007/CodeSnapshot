import React, { Fragment } from "react";
import { Button, buttonVariants } from "../ui/button";
import { CaretUpIcon, ReloadIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { DomToImage } from "@/lib/saveImage";
import { saveFile } from "@/utils/saveFile";
import { setExporting } from "@/redux/Features/CodeEditor/editorSlice";
import { toast } from "sonner";

function ExportOptions() {
  const editorState = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();
  const node = editorState.node as HTMLDivElement;

  const imageSaveOptions = [
    {
      title: "Save PNG",
      function: async (scale?: number) => {
        dispatch(setExporting(true));
        const url = await DomToImage.png(node);
        saveFile(url, editorState.title);
        dispatch(setExporting(false));
        toast.success("File downloaded");
      },
    },
    {
      title: "Save JPEG",
      function: async (scale?: number) => {
        dispatch(setExporting(true));
        const url = await DomToImage.jpeg(node);
        saveFile(url, editorState.title);
        dispatch(setExporting(false));
        toast.success("File downloaded");
      },
    },
    {
      title: "Save SVG",
      function: async (scale?: number) => {
        dispatch(setExporting(true));
        const url = await DomToImage.svg(node);
        saveFile(url, editorState.title);
        dispatch(setExporting(false));
        toast.success("File downloaded");
      },
    },
  ];

  return (
    <div className="flex items-center gap-1">
      <Button
        disabled={editorState.exporting}
        onClick={() => imageSaveOptions[0].function()}
      >
        {editorState.exporting && (
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        )}
        Export
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          disabled={editorState.exporting}
          className={cn(buttonVariants({}))}
        >
          <CaretUpIcon />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {imageSaveOptions.map((option, i) => (
            <React.Fragment key={option.title}>
              <DropdownMenuItem
                disabled={editorState.exporting}
                onClick={() => option.function()}
              >
                {option.title}
              </DropdownMenuItem>
              {i !== imageSaveOptions.length - 1 && <DropdownMenuSeparator />}
            </React.Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default ExportOptions;
