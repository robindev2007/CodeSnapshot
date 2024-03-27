import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { CaretUpIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { SaveDomAsImage } from "@/lib/DomToImageConverter";
import { useAppSelector } from "@/redux/store";

function ExportOptions({ node }: { node: HTMLDivElement }) {
  const editorState = useAppSelector((state) => state.editor);

  return (
    <div className="flex items-center gap-1">
      <Button
        onClick={() =>
          SaveDomAsImage({ extensition: "png", node, title: editorState.title })
        }
      >
        Export
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger className={cn(buttonVariants({}))}>
          <CaretUpIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() =>
              SaveDomAsImage({
                extensition: "svg",
                node,
                title: editorState.title,
              })
            }
          >
            Save SVG
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() =>
              SaveDomAsImage({
                extensition: "png",
                node,
                title: editorState.title,
              })
            }
          >
            Save PNG
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() =>
              SaveDomAsImage({
                extensition: "jpeg",
                node,
                title: editorState.title,
              })
            }
          >
            Save JPG
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() =>
              SaveDomAsImage({
                mode: "Copy Image",
                extensition: "png",
                node: node,
                title: editorState.title,
              })
            }
          >
            Copy Image
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default ExportOptions;
