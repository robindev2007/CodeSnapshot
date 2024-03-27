"use client";

const codes = [
  `module.exports = leftpad;

function leftpad(str, len, ch) {
  str = String(str);
  var i = -1;

  if (!ch && ch !== 0) ch = " ";

  len = len - str.length;

  while (i++ < len) {
    str = ch + str;
  }
  return str;
}`,

  `import SwiftUI

struct CircleImage: View {
  var body: some View {
    Image("turtlerock")
      .clipShape(Circle())
  }
}`,
  `import { Detail } from "@raycast/api";

export default function Command() {
  return <Detail markdown="Hello World" />;
}
  `,
];

export const getRandomCode = () => {
  const random = Math.floor(Math.random() * codes.length);
  return codes[random];
};

import {
  atomOneDark,
  a11yDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

const themes = ["atomOneDark", "a11yDark"];

const g = [
  {
    name: "mono",
    theme: {
      dark: "atomOneDark",
      lite: "",
    },
    bg: "linear-gradient(140deg, rgb(51, 51, 51), rgb(24, 24, 24));",
  },
  {
    name: "breeze",
    bg: "linear-gradient(140deg, rgb(207, 47, 152), rgb(106, 61, 236));",
  },
  {
    name: "candy",
    bg: "linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))",
  },
  {
    name: "falcon",
    bg: "linear-gradient(140deg, rgb(189, 227, 236), rgb(54, 54, 84))",
  },
  {
    name: "midnight",
    bg: "linear-gradient(140deg, rgb(76, 200, 200), rgb(32, 32, 51))",
  },
  {
    name: "raindrop",
    bg: "linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170))",
  },
  {
    name: "sun set",
    bg: "linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47))",
  },
];
