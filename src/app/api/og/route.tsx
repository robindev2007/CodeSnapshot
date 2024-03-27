import { ImageResponse } from "next/og";
// @ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter";
// @ts-ignore
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { NextRequest, NextResponse } from "next/server";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET(req: NextRequest) {
  //   return req.json();
  const codeString =
    "<SyntaxHighlighter language='javascript' style={dark}>  what is that  {codeString}</SyntaxHighlighter>";
  return new ImageResponse(
    (
      <SyntaxHighlighter
        language="javascript"
        style={dark}
        tw="h-full bg-red-500 w-full">
        {codeString}
      </SyntaxHighlighter>
    ),
    {
      width: 1200,
      height: 700,
    }
  );
}
