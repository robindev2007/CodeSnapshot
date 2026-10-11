"use client";

import React, { useState, useMemo } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { customLanguages } from "@/lib/supportedCodeLanguage";
import { EditorState } from "@/redux/Features/CodeEditor/editorSlice";
import {
  CaretDownIcon,
  CheckIcon,
  Cross2Icon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";

interface LanguageSelectorProps {
  editorState: EditorState;
  changeLanguage: (value: string) => void;
}

function LanguageSelector({
  editorState,
  changeLanguage,
}: LanguageSelectorProps) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const languageKeys = useMemo(() => Object.keys(customLanguages), []);

  const filteredLanguages = useMemo(() => {
    if (!search.trim()) return languageKeys;
    const query = search.toLowerCase().trim();
    return languageKeys.filter((key) => {
      const lang = customLanguages[key];
      return (
        lang.name.toLowerCase().includes(query) ||
        key.toLowerCase().includes(query)
      );
    });
  }, [search, languageKeys]);

  const showAuto = useMemo(() => {
    if (!search.trim()) return true;
    const query = search.toLowerCase().trim();
    return (
      "auto".includes(query) ||
      (editorState.detectedLanguage?.toLowerCase().includes(query) ?? false)
    );
  }, [search, editorState.detectedLanguage]);

  const currentLabel = editorState.language
    ? editorState.language
    : editorState.detectedLanguage
      ? `${editorState.detectedLanguage.toUpperCase()} (Auto)`
      : "Auto";

  return (
    <div className="grid gap-1 text-sm">
      <span className="text-sm text-muted-foreground">Language</span>

      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="flex h-9 min-w-[130px] items-center justify-between gap-2 px-2.5 font-normal"
          >
            <span className="truncate text-xs font-medium">{currentLabel}</span>
            <CaretDownIcon className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start" className="w-52 p-1.5">
          {/* Search Input Box */}
          <div className="mb-1 flex items-center gap-2 rounded-md border border-border/60 bg-muted/40 px-2 py-1">
            <MagnifyingGlassIcon className="h-3.5 w-3.5 shrink-0 opacity-50" />
            <input
              type="text"
              placeholder="Search language..."
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

          {/* Language List */}
          <div className="max-h-56 overflow-y-auto pr-0.5">
            {showAuto && (
              <DropdownMenuItem
                onClick={() => {
                  changeLanguage("Auto");
                  setOpen(false);
                }}
                className="flex cursor-pointer items-center justify-between py-1.5 text-xs"
              >
                <span>
                  {editorState.detectedLanguage
                    ? `${editorState.detectedLanguage.toUpperCase()} (Auto)`
                    : "Auto"}
                </span>
                {!editorState.language && (
                  <CheckIcon className="h-3.5 w-3.5 text-primary" />
                )}
              </DropdownMenuItem>
            )}

            {filteredLanguages.length === 0 && !showAuto ? (
              <div className="py-4 text-center text-xs text-muted-foreground">
                No languages found
              </div>
            ) : (
              filteredLanguages.map((key) => {
                const lang = customLanguages[key];
                const isSelected = editorState.language === lang.name;
                return (
                  <DropdownMenuItem
                    key={key}
                    onClick={() => {
                      changeLanguage(lang.name);
                      setOpen(false);
                    }}
                    className="flex cursor-pointer items-center justify-between py-1.5 text-xs"
                  >
                    <span>{lang.name}</span>
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
}

export default LanguageSelector;
