"use client";
import React, { useEffect, useRef, useState } from "react";
import Resizeable from "../ui/Resizeable";
import { setNode, setTitle } from "@/redux/Features/CodeEditor/editorSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import EditorHeader from "./EditorHeader";
import EditorBackground from "./EditorBackground";
import EditorBody from "./EditorBody";

const Editor = ({ initialCode }: { initialCode: string }) => {
  const [code, setCode] = useState(initialCode);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeableW, setResizeableW] = useState(0);

  const dispatch = useAppDispatch();
  const editorState = useAppSelector((state) => state.editor);

  const nodeRef = useRef<HTMLDivElement>(null);
  const resizeableRef = useRef<HTMLDivElement>(null);

  const setStateCode = (code: string) => {
    setCode(code);
    console.log(code);
  };

  const setHeaderTitle = (title: string) => {
    dispatch(setTitle(title));
  };

  // @ts-ignore
  const handleResize = (e, date) => {
    console.log(e, date);
  };

  useEffect(() => {
    nodeRef.current && dispatch(setNode(nodeRef.current));
  }, [nodeRef.current, nodeRef]);

  return (
    <div className="relative">
      {editorState.exporting&&
      <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-card/90 backdrop-blur-sm">
        <p>Exporting</p>
      </div>
      }
      <div ref={resizeableRef} className="relative">
        <Resizeable setIsResizing={setIsResizing} onResize={handleResize}>
          <div ref={nodeRef}>
            <EditorBackground editorState={editorState}>
              <div>
                <EditorHeader setTitle={setHeaderTitle} />
                <EditorBody theme={"dark"} code={code} setCode={setStateCode} />
              </div>
            </EditorBackground>
          </div>
          {isResizing && (
            <div className="absolute left-0 top-full mt-3 flex w-full items-center gap-2 text-sm">
              <div className="h-[1px] w-full bg-red-400"></div>
              <p className="my-auto shrink-0 whitespace-nowrap">
                {resizeableW} px
              </p>
              <div className="h-[1px] w-full bg-red-400"></div>
            </div>
          )}
        </Resizeable>
      </div>
    </div>
  );
};

export default Editor;

