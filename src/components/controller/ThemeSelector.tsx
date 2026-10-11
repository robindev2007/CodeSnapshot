"use client";

import React, { useState, useMemo } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { customThemes } from "@/lib/Themes";
import { ThemesNameT } from "@/types/types";
import { EditorState } from "@/redux/Features/CodeEditor/editorSlice";
import {
  CaretDownIcon,
  CheckIcon,
  Cross2Icon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";

const ThemeSelector = ({
  setEditorTheme,
  editorState,
}: {
  setEditorTheme: (value: string) => void;
  editorState: EditorState;
}) => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const themeKeys = useMemo(
    () => Object.keys(customThemes) as ThemesNameT[],
    [],
  );

  const filteredThemes = useMemo(() => {
    if (!search.trim()) return themeKeys;
    const query = search.toLowerCase().trim();
    return themeKeys.filter((key) => {
      const theme = customThemes[key];
      return (
        theme.name.toLowerCase().includes(query) ||
        key.toLowerCase().includes(query)
      );
    });
  }, [search, themeKeys]);

  const currentTheme =
    customThemes[editorState.theme as ThemesNameT] || customThemes.candy;

  return (
    <div className="grid gap-1 text-sm">
      <span className="text-sm text-muted-foreground">Theme</span>

      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="flex h-9 min-w-[120px] items-center justify-between gap-2 px-2.5 font-normal"
          >
            <div className="flex items-center gap-2 overflow-hidden">
              <div
                className="h-4 w-4 shrink-0 rounded-full border border-black/10 shadow-sm"
                style={{
                  background: `linear-gradient(140deg, ${currentTheme.background.from}, ${currentTheme.background.to})`,
                }}
              />
              <span className="truncate text-xs font-medium">
                {currentTheme.name}
              </span>
            </div>
            <CaretDownIcon className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start" className="w-56 p-1.5">
          {/* Search Input Box */}
          <div className="mb-1 flex items-center gap-2 rounded-md border border-border/60 bg-muted/40 px-2 py-1">
            <MagnifyingGlassIcon className="h-3.5 w-3.5 shrink-0 opacity-50" />
            <input
              type="text"
              placeholder="Search theme..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.stopPropagation()}
              className="w-full bg-transparent text-xs outline-none placeholder:text-muted-foreground"
              autoFocus
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="opacity-50 hover:opacity-100"
              >
                <Cross2Icon className="h-3 w-3" />
              </button>
            )}
          </div>

          {/* Theme List */}
          <div className="max-h-56 overflow-y-auto pr-0.5">
            {filteredThemes.length === 0 ? (
              <div className="py-4 text-center text-xs text-muted-foreground">
                No themes found
              </div>
            ) : (
              filteredThemes.map((themeKey) => {
                const theme = customThemes[themeKey];
                const isSelected = editorState.theme === themeKey;
                return (
                  <DropdownMenuItem
                    key={themeKey}
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
                  </DropdownMenuItem>
                );
              })
            )}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ThemeSelector;
