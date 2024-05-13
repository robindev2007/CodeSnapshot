"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import KeyboardShortCuts from "./KeyboardShortCuts";

const TopSection = () => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="container flex pt-5">
      

      <KeyboardShortCuts />
    </div>
  );
};

export default TopSection;
