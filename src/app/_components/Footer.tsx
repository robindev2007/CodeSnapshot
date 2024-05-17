import Controller from "@/components/controller/Controller";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="relative mt-auto flex h-fit py-1">
      <div className="center fixed bottom-[5%] left-1/2 z-20 w-full -translate-x-1/2">
        <Controller />
      </div>

      <div className="relative mx-auto mt-auto flex items-center gap-7 py-1 text-sm text-muted-foreground transition-all duration-200 ease-out">
        <p className="text-muted-foreground">
          Made by{" "}
          <Link
            className="text-base text-foreground transition-all hover:text-foreground"
            target="_blank"
            href={"http://robinport.vercel.app"}
          >
            Robin
          </Link>
        </p>
        <Link
          className="transition-all hover:text-foreground"
          href={"mailto:robindev2007@gmail.com"}
        >
          Send Feedback
        </Link>
      </div>
    </div>
  );
};

export default Footer;
