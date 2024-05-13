"use server";

const codes = [
  `module.exports = leftpad
  

function leftpad(str, len, ch) {
  str = String(str)
  
  var i = -1
  

  if (!ch && ch !== 0) ch = " "
  

  len = len - str.length
  

  while (i++ < len) {
    str = ch + str
    
  }
  return str
  
}`,

  `import SwiftUI

struct CircleImage: View {
  var body: some View {
    Image("turtlerock")
      .clipShape(Circle())
  }
}`,
  `import { Detail } from "@raycast/api"
  

export default function Command() {
  return <Detail markdown="Hello World" />
  
}
  `,
];

export const getRandomCode = () => {
  const random = Math.floor(Math.random() * codes.length);

  return codes[random];
};
