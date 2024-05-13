import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Providers from "@/redux/provider";
import { Toaster } from "sonner";
import Image from "next/image";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jet",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Snapshot",
  description:
    "Convert your code to butyful Snapshots using codesnapshot.vercel.app",
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://codesnapshot.vercel.app"),
};
export const viewport: Viewport = {
  width: "750",
  initialScale: 1,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${jetbrainsMono.variable} min-h-screen `}
      >
        <Providers>
          <Toaster theme="dark" richColors position="top-right" />
          {children}
        </Providers>
        <Image
          priority
          src={"/images/bg.png"}
          height={700}
          width={700}
          alt=""
          className="fixed left-0 top-0 -z-10 h-screen w-screen opacity-70"
        />
      </body>
    </html>
  );
}
