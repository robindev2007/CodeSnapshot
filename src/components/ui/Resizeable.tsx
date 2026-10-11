import React, { Dispatch, ReactNode } from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

const ResizableBoxComponent =
  ResizableBox as unknown as React.ComponentType<any>;

const Resizeable = React.forwardRef<any, any>(
  (
    {
      children,
      onResizeStart,
      onResizeStop,
      onResize,
      className,
      setIsResizing,
    },
    ref,
  ) => {
    return (
      <ResizableBoxComponent
        width={520}
        height={200}
        minConstraints={[520, 100]}
        maxConstraints={[920, Infinity]}
        resizeHandles={["e", "w"]}
        axis="both"
        className="borde relative !h-fit w-full"
        onResize={onResize}
        onResizeStart={() => setIsResizing(true)}
        onResizeStop={() => setIsResizing(false)}
        ref={ref}
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
      </ResizableBoxComponent>
    );
  },
);

Resizeable.displayName = "Resizeable";

export default Resizeable;
