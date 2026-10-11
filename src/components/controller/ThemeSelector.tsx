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
  CommandSeparator,
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

  const currentTheme =
    customThemes[editorState.theme as ThemesNameT] || customThemes.candy;

  const allKeys = Object.keys(customThemes) as ThemesNameT[];
  const partnerKeys = allKeys.filter((k) => customThemes[k].category === "partner");
  const gradientKeys = allKeys.filter((k) => customThemes[k].category === "gradient");
  const classicKeys = allKeys.filter((k) => customThemes[k].category === "classic");

  const renderThemeItem = (themeKey: ThemesNameT) => {
    const theme = customThemes[themeKey];
    if (!theme) return null;
    const isSelected = editorState.theme === themeKey;

    return (
      <CommandItem
        key={themeKey}
        value={`${theme.name.toLowerCase()} ${themeKey.toLowerCase()}`}
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
        <div className="flex items-center gap-2 overflow-hidden">
          <div
            className="h-4 w-4 shrink-0 rounded-full border border-black/10 shadow-sm"
            style={{
              background: `linear-gradient(140deg, ${theme.background.from}, ${theme.background.to})`,
            }}
          />
          <span className="truncate">{theme.name}</span>
          {theme.partner && (
            <span className="rounded bg-sky-500/15 px-1 py-0.5 text-[9px] font-medium text-sky-400">
              Partner
            </span>
          )}
        </div>
        {isSelected && <CheckIcon className="h-3.5 w-3.5 shrink-0 text-primary" />}
      </CommandItem>
    );
  };

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
            className="flex h-9 min-w-[145px] items-center justify-between gap-2 px-3 text-xs font-normal"
          >
            <div className="flex items-center gap-2 overflow-hidden">
              <div
                className="h-4 w-4 shrink-0 rounded-full border border-black/10 shadow-sm"
                style={{
                  background: `linear-gradient(140deg, ${currentTheme.background.from}, ${currentTheme.background.to})`,
                }}
              />
              <span className="truncate font-medium">{currentTheme.name}</span>
              {currentTheme.partner && (
                <span className="rounded bg-sky-500/15 px-1 py-0.5 text-[9px] font-medium text-sky-400">
                  Partner
                </span>
              )}
            </div>
            <CaretSortIcon className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-64 p-0" align="start">
          <Command>
            <CommandInput placeholder="Search themes (Vercel, Supabase, etc.)..." />
            <CommandList className="max-h-72">
              <CommandEmpty>No theme found.</CommandEmpty>

              <CommandGroup heading="Partner Themes (Ray.so)">
                {partnerKeys.map(renderThemeItem)}
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading="Ray.so Gradients">
                {gradientKeys.map(renderThemeItem)}
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading="Developer Themes">
                {classicKeys.map(renderThemeItem)}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ThemeSelector;
