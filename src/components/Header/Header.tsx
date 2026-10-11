"use client";

import React from "react";
import Link from "next/link";
import ExportOptions from "@/components/controller/ExportOptions";
import KeyboardShortCuts from "@/app/_components/top-section/KeyboardShortCuts";
import { CameraIcon } from "@radix-ui/react-icons";

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-40 w-full border-b border-border bg-background shadow-sm">
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Left: Website Name & Shortcuts */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-sm">
              <CameraIcon className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              Code Snapshot
            </span>
          </Link>
          <div className="hidden sm:block">
            <KeyboardShortCuts />
          </div>
        </div>

        {/* Right: Export Button Group */}
        <div className="flex items-center gap-2">
          <ExportOptions />
        </div>
      </div>
    </header>
  );
};

export default Header;
