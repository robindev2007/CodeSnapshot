"use client";

import nodeToImage from "dom-to-image";

const config = {};

export const DomToImage = {
  png: (node: HTMLDivElement, scale?: number) => {
    return nodeToImage.toPng(node, {
      height: node.offsetHeight * (scale ? scale : 2),
      width: node.offsetWidth * (scale ? scale : 2),
      style: {
        transform: `scale(${scale ? scale : 2})`,
        transformOrigin: "top left",
        alignItems: "start",
        justifyContent: "start",
      },
    });
  },
  jpeg: (node: HTMLDivElement, scale?: number) => {
    return nodeToImage.toJpeg(node, {
      height: node.offsetHeight * (scale ? scale : 2),
      width: node.offsetWidth * (scale ? scale : 2),
      style: {
        transform: `scale(${scale ? scale : 2})`,
        transformOrigin: "top left",
        alignItems: "start",
        justifyContent: "start",
      },
    });
  },
  svg: (node: HTMLDivElement, scale?: number) => {
    return nodeToImage.toSvg(node, {
      height: node.offsetHeight * (scale ? scale : 2),
      width: node.offsetWidth * (scale ? scale : 2),
      style: {
        transform: `scale(${scale ? scale : 2})`,
        transformOrigin: "top left",
        alignItems: "start",
        justifyContent: "start",
      },
    });
  },
};
