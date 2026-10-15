"use client";

import KeyboardShortCuts from "@/app/_components/top-section/KeyboardShortCuts";
import ExportOptions from "@/components/controller/ExportOptions";
import SyntaxLogo from "@/components/Logo/SyntaxLogo";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-40 w-full bg-background shadow-sm">
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Left: Website Name & Shortcuts */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
          >
            <SyntaxLogo className="h-8 w-8 transition-transform group-hover:scale-105" />
            <span className="text-xl font-bold tracking-tight text-foreground">
              Syntax
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
