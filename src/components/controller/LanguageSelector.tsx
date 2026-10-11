"use client";

import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { customLanguages } from "@/lib/supportedCodeLanguage";
import { EditorState } from "@/redux/Features/CodeEditor/editorSlice";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

interface LanguageSelectorProps {
  editorState: EditorState;
  changeLanguage: (value: string) => void;
}

function LanguageSelector({
  editorState,
  changeLanguage,
}: LanguageSelectorProps) {
  const [open, setOpen] = useState(false);

  const currentLabel = editorState.language
    ? editorState.language
    : editorState.detectedLanguage
      ? `${editorState.detectedLanguage.toUpperCase()} (Auto)`
      : "Auto";

  const autoLabel = editorState.detectedLanguage
    ? `${editorState.detectedLanguage.toUpperCase()} (Auto)`
    : "Auto";

  return (
    <div className="grid gap-1 text-sm">
      <span className="text-sm text-muted-foreground">Language</span>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            role="combobox"
            aria-expanded={open}
            className="flex h-9 min-w-[140px] items-center justify-between gap-2 px-3 text-xs font-normal"
          >
            <span className="truncate font-medium">{currentLabel}</span>
            <CaretSortIcon className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-56 p-0" align="start">
          <Command>
            <CommandInput placeholder="Search language..." />
            <CommandList>
              <CommandEmpty>No language found.</CommandEmpty>
              <CommandGroup>
                <CommandItem
                  value={`auto ${editorState.detectedLanguage || ""}`}
                  onSelect={() => {
                    changeLanguage("Auto");
                    setOpen(false);
                  }}
                  className="flex cursor-pointer items-center justify-between py-1.5 text-xs"
                >
                  <span>{autoLabel}</span>
                  {!editorState.language && (
                    <CheckIcon className="h-3.5 w-3.5 text-primary" />
                  )}
                </CommandItem>
                {Object.keys(customLanguages).map((key) => {
                  const lang = customLanguages[key];
                  const isSelected = editorState.language === lang.name;
                  return (
                    <CommandItem
                      key={key}
                      value={`${lang.name} ${key}`}
                      onSelect={() => {
                        changeLanguage(lang.name);
                        setOpen(false);
                      }}
                      className="flex cursor-pointer items-center justify-between py-1.5 text-xs"
                    >
                      <span>{lang.name}</span>
                      {isSelected && (
                        <CheckIcon className="h-3.5 w-3.5 text-primary" />
                      )}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default LanguageSelector;
