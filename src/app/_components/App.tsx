"use server";
import React from "react";
import { getRandomCode } from "@/lib/constance";
import Header from "@/components/Header/Header";
import Footer from "./Footer";
import MainBody from "./MainBody";

const App = async () => {
  const initialCode = await getRandomCode();

  return (
    <div
      id="a"
      className="flex min-h-screen w-screen flex-col overflow-y-auto pt-16"
    >
      <Header />

      <MainBody initialCode={initialCode} />

      <Footer />
    </div>
  );
};

export default App;
