import React, { Dispatch, ReactNode } from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

const Resizeable = ({
  children,
  onResizeStart,
  onResizeStop,
  onResize,
  setIsResizing,
  className,
}: {
  children: ReactNode;
  onResizeStop?: any;
  onResizeStart?: any;
  onResize: any;
  className?: string;
  setIsResizing: Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <ResizableBox
      width={520}
      height={200}
      minConstraints={[520, 100]}
      maxConstraints={[920, Infinity]} // Set maximum width and no maximum height
      resizeHandles={["e", "w"]}
      axis="both"
      className="borde relative !h-fit w-full"
      onResize={onResize}
      onResizeStart={() => setIsResizing(true)}
      onResizeStop={() => setIsResizing(false)}
    >
      <div>
        <div className="pointer-events-none absolute left-0 top-0 z-20 grid h-full w-[1px] -translate-x-1/2 items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-white"></div>
        </div>

        <div className="pointer-events-none absolute right-0 top-0 z-20 grid h-full w-[1px] translate-x-1/2 items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-white"></div>
        </div>
        {children}
      </div>
    </ResizableBox>
  );
};

export default Resizeable;
