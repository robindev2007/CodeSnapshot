"use client";
import { useAppSelector } from "@/redux/store";
import nodeToImage from "dom-to-image";
import { toast } from "sonner";

export const SaveDomAsImage = async ({
  node,
  exportSize,
  extensition,
  mode,
  title,
}: {
  node: HTMLDivElement;
  exportSize?: number;
  extensition: "png" | "svg" | "jpeg";
  mode?: "Copy Image" | "download";
  title: string;
}) => {
  const scale = exportSize ? exportSize : 4;

  const width = node.offsetWidth * scale;
  const height = node.offsetHeight * scale;

  const config = {
    style: {
      transform: `scale(${scale})`,
      transformOrigin: "top left",
      alignItems: "start",
      justifyContent: "start",
    },

    height,
    width,
  };

  if (mode && mode == "Copy Image") {
    const imageSrc = await nodeToImage.toPng(node, config);
    const copy = await copyImgToClipboard(imageSrc);
    return "success";
  }

  if (extensition === "png") {
    const imageSrc = await nodeToImage.toPng(node, config);
    const download = donwloadFile(imageSrc, title + `.${extensition}`);
    if (download.error) {
      return toast.warning("Something went worng | Refresh Browser");
    }

    return "success";
  }

  if (extensition === "svg") {
    const imageSrc = await nodeToImage.toSvg(node, config);
    const download = donwloadFile(imageSrc, title + `.${extensition}`);
    if (download.error) {
      return toast.warning("Something went worng | Refresh Browser");
    }

    return "success";
  }

  if (extensition === "jpeg") {
    const imageSrc = await nodeToImage.toJpeg(node, config);
    const download = donwloadFile(imageSrc, title + `.${extensition}`);
    if (download.error) {
      return toast.warning("Something went worng | Refresh Browser");
    }

    return "success";
  }
};

export const donwloadFile = (url: string, fileName: string) => {
  try {
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName ? fileName : url;
    a.click();

    return { code: "success", error: null };
  } catch (error) {
    return { code: "error", error };
  }
};

async function copyImgToClipboard(imgUrl: string) {
  try {
    const data = await fetch(imgUrl);
    const blob = await data.blob();
    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob,
      }),
    ]);
    return "Image copied to keyboard";
  } catch (err) {
    console.error(err);
    return "Error: Something went worng";
  }
}
