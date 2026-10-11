"use client";

import React from "react";
import { Button } from "../ui/button";
import {
  CaretDownIcon,
  CopyIcon,
  DownloadIcon,
  ImageIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { DomToImage } from "@/lib/saveImage";
import { saveFile } from "@/utils/saveFile";
import {
  setExporting,
  setExportSize,
} from "@/redux/Features/CodeEditor/editorSlice";
import { toast } from "sonner";

interface ExportOptionsProps {
  className?: string;
}

export function ExportOptions({ className }: ExportOptionsProps) {
  const editorState = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();
  const node = editorState.node as HTMLDivElement;
  const currentSize = editorState.exportSize || 2;

  const handleDownload = async (
    format: "png" | "svg" | "jpeg",
    scale: number,
  ) => {
    if (!node) {
      toast.error("Code editor not ready yet");
      return;
    }
    dispatch(setExporting(true));
    try {
      let dataUrl = "";
      if (format === "svg") {
        dataUrl = await DomToImage.svg(node, scale);
      } else if (format === "jpeg") {
        dataUrl = await DomToImage.jpeg(node, scale);
      } else {
        dataUrl = await DomToImage.png(node, scale);
      }
      const filename = `${editorState.title || "code-snapshot"}.${format}`;
      saveFile(dataUrl, filename);
      toast.success(`${format.toUpperCase()} downloaded (${scale}x)`);
    } catch (error) {
      console.error(error);
      toast.error(`Failed to export ${format.toUpperCase()}`);
    } finally {
      dispatch(setExporting(false));
    }
  };

  const handleCopyImage = async (scale: number) => {
    if (!node) {
      toast.error("Code editor not ready yet");
      return;
    }
    dispatch(setExporting(true));
    try {
      const blob = await DomToImage.blob(node, scale);
      if (blob && navigator.clipboard && typeof ClipboardItem !== "undefined") {
        await navigator.clipboard.write([
          new ClipboardItem({
            "image/png": blob,
          }),
        ]);
        toast.success(`Image copied to clipboard (${scale}x)!`);
      } else {
        const dataUrl = await DomToImage.png(node, scale);
        const res = await fetch(dataUrl);
        const fetchedBlob = await res.blob();
        await navigator.clipboard.write([
          new ClipboardItem({
            "image/png": fetchedBlob,
          }),
        ]);
        toast.success(`Image copied to clipboard (${scale}x)!`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to copy image to clipboard");
    } finally {
      dispatch(setExporting(false));
    }
  };

  const handleMainExport = () => {
    handleDownload("png", currentSize);
  };

  return (
    <div
      className={`inline-flex items-center rounded-md border border-border/50 bg-secondary/40 shadow-sm backdrop-blur-md transition-all hover:border-border/70 hover:bg-secondary/60 ${className || ""}`}
    >
      {/* Primary Export Button */}
      <Button
        variant="ghost"
        size="sm"
        disabled={editorState.exporting}
        onClick={handleMainExport}
        className="rounded-r-none border-r border-border/40 px-3.5 font-medium text-foreground hover:bg-secondary/30 hover:text-foreground"
      >
        {editorState.exporting ? (
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <DownloadIcon className="mr-2 h-4 w-4" />
        )}
        Export
      </Button>

      {/* Dropdown Menu Trigger in same group */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            disabled={editorState.exporting}
            className="rounded-l-none px-2 text-foreground hover:bg-secondary/30 hover:text-foreground"
            aria-label="Export options"
          >
            <CaretDownIcon className="h-4 w-4 opacity-75 transition-opacity hover:opacity-100" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem
            disabled={editorState.exporting}
            onClick={() => handleDownload("png", currentSize)}
            className="cursor-pointer"
          >
            <ImageIcon className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>PNG</span>
            <span className="ml-auto text-xs text-muted-foreground">.png</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            disabled={editorState.exporting}
            onClick={() => handleDownload("svg", currentSize)}
            className="cursor-pointer"
          >
            <DownloadIcon className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>SVG</span>
            <span className="ml-auto text-xs text-muted-foreground">.svg</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            disabled={editorState.exporting}
            onClick={() => handleCopyImage(currentSize)}
            className="cursor-pointer"
          >
            <CopyIcon className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>Copy Image</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          {/* Size option: on hover opens submenu to select output size */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="cursor-pointer">
              <span>Size</span>
              <span className="ml-auto mr-1 rounded bg-muted px-1.5 py-0.5 text-xs font-semibold text-muted-foreground">
                {currentSize}x
              </span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-36">
              <DropdownMenuRadioGroup
                value={String(currentSize)}
                onValueChange={(val) => dispatch(setExportSize(Number(val)))}
              >
                <DropdownMenuRadioItem value="1" className="cursor-pointer">
                  1x
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="2" className="cursor-pointer">
                  2x{" "}
                  <span className="ml-auto text-[10px] text-muted-foreground">
                    Default
                  </span>
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="3" className="cursor-pointer">
                  3x
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="4" className="cursor-pointer">
                  4x{" "}
                  <span className="ml-auto text-[10px] text-muted-foreground">
                    High Res
                  </span>
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default ExportOptions;
