"use client";
import React from "react";
import { CopyIcon } from "@radix-ui/react-icons";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { cn } from "@/lib/utils";

const KeyboardShortCuts = () => {
  const commands = [
    {
      title: "Focus text editor",
      command: "F",
    },
    {
      title: "Unfocus text editor",
      command: "ESC",
    },
    {
      title: "Change themes",
      command: "C",
    },
    {
      title: "Toggle dark mode",
      command: "D",
    },
    {
      title: "Change padding",
      command: "P",
    },
    {
      title: "Select language",
      command: "L",
    },
    {
      title: "Save PNG",
      command: "⌘ Shift S",
    },
    {
      title: "Save SVG",
      command: "⌘ Shift S",
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              disabled
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
              )}
            >
              <MdOutlineKeyboardCommandKey className="size-4" />
              Keyboard Shortcuts
            </TooltipTrigger>
            <TooltipContent>
              <p>Under development</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-sm">Keyboard Shortcuts</DialogTitle>
        </DialogHeader>
        {commands.map((command) => (
          <div
            key={command.title}
            className="flex items-center justify-between"
          >
            <p className="text-sm text-muted-foreground">{command.title}</p>
            <p className="rounded-md border bg-secondary p-1 px-2 text-sm text-muted-foreground">
              {command.command}
            </p>
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default KeyboardShortCuts;

// Save PNG
// ⌘
// S
// Save SVG
// ⌘
// shift
// S
// Copy image
// ⌘
// C
// Copy URL
// ⌘
// shift
// C
// Open shortcuts
// ?
