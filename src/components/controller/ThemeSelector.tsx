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
import { customThemes } from "@/lib/Themes";
import { ThemesNameT } from "@/types/types";
import { EditorState } from "@/redux/Features/CodeEditor/editorSlice";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

interface ThemeSelectorProps {
  setEditorTheme: (value: string) => void;
  editorState: EditorState;
}

const ThemeSelector = ({ setEditorTheme, editorState }: ThemeSelectorProps) => {
  const [open, setOpen] = useState(false);

  const themeKeys = Object.keys(customThemes) as ThemesNameT[];
  const currentTheme =
    customThemes[editorState.theme as ThemesNameT] || customThemes.candy;

  return (
    <div className="grid gap-1 text-sm">
      <span className="text-sm text-muted-foreground">Theme</span>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            role="combobox"
            aria-expanded={open}
            className="flex h-9 min-w-[130px] items-center justify-between gap-2 px-3 text-xs font-normal"
          >
            <div className="flex items-center gap-2 overflow-hidden">
              <div
                className="h-4 w-4 shrink-0 rounded-full border border-black/10 shadow-sm"
                style={{
                  background: `linear-gradient(140deg, ${currentTheme.background.from}, ${currentTheme.background.to})`,
                }}
              />
              <span className="truncate font-medium">{currentTheme.name}</span>
            </div>
            <CaretSortIcon className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-56 p-0" align="start">
          <Command>
            <CommandInput placeholder="Search theme..." />
            <CommandList>
              <CommandEmpty>No theme found.</CommandEmpty>
              <CommandGroup>
                {themeKeys.map((themeKey) => {
                  const theme = customThemes[themeKey];
                  const isSelected = editorState.theme === themeKey;
                  return (
                    <CommandItem
                      key={themeKey}
                      value={`${theme.name} ${themeKey}`}
                      onSelect={() => {
                        setEditorTheme(themeKey);
                        setOpen(false);
                      }}
                      onClick={() => {
                        setEditorTheme(themeKey);
                        setOpen(false);
                      }}
                      className="flex cursor-pointer items-center justify-between py-1.5 text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className="h-4 w-4 shrink-0 rounded-full border border-black/10 shadow-sm"
                          style={{
                            background: `linear-gradient(140deg, ${theme.background.from}, ${theme.background.to})`,
                          }}
                        />
                        <span>{theme.name}</span>
                      </div>
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
};

export default ThemeSelector;
