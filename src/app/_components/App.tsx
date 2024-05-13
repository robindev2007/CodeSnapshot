"use server";
import React from "react";
import { getRandomCode } from "@/lib/constance";
import Editor from "@/components/Editor/Editor";
import Controller from "@/components/controler/Controller";
import Image from "next/image";
import Link from "next/link";
import TopSection from "./top-section/TopSection";
import Footer from "./Footer";
import MainBody from "./MainBody";

const App = async () => {
  const initialCode = await getRandomCode();

  return (
    <div
      id="a"
      className="grid-row-5 grid h-screen w-screen gap-3 overflow-y-scroll"
    >
      <TopSection />

      <MainBody initialCode={initialCode} />

      <Footer />
    </div>
  );
};

export default App;
