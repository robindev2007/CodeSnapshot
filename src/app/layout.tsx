import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Providers from "@/redux/provider";
import { Toaster } from "sonner";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jet",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code to Image",
  description:
    "Convert your code to butyfull images using code2image.vercel.app",
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
      <body className={`${inter.className} ${jetbrainsMono.variable}`}>
        <Providers>
          <Toaster theme="dark" richColors position="top-right" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
