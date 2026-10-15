import Providers from "@/redux/provider";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import { Toaster } from "sonner";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jet",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syntax – Beautiful Code Snapshots & Snippets",
  description:
    "Transform your code snippets into beautiful, customizable, high-resolution images ready to share.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Syntax – Beautiful Code Snapshots & Snippets",
    description:
      "Transform your code snippets into beautiful, customizable, high-resolution images ready to share.",
    siteName: "Syntax",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Syntax Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syntax – Beautiful Code Snapshots & Snippets",
    description:
      "Transform your code snippets into beautiful, customizable, high-resolution images ready to share.",
    images: ["/android-chrome-512x512.png"],
  },
  metadataBase: new URL("https://codesnapshot.vercel.app"),
  verification: {
    google: "F34cI-FmqcyPEdSVNhug_a4m_pbKSqI6rQzQGQ-ulEs",
  },
};
// <meta name="google-site-verification" content="F34cI-FmqcyPEdSVNhug_a4m_pbKSqI6rQzQGQ-ulEs" />
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
        className={`${inter.className} ${jetbrainsMono.variable} min-h-screen w-screen overflow-x-hidden`}
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
