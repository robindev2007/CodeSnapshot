import React, { ReactNode } from "react";
import { ResizableBox } from "react-resizable";

const Resizeable = ({ children }: { children: ReactNode }) => {
  return (
    <ResizableBox
      width={520}
      height={200}
      minConstraints={[520, 100]}
      maxConstraints={[920, Infinity]} // Set maximum width and no maximum height
      resizeHandles={["e", "w"]}
      className="borde relative !h-fit w-fit"
    >
      <div>
        <div className="pointer-events-none absolute left-0 top-0 z-20 grid h-full w-[1px] -translate-x-1/2 items-center justify-center bg-white bg-opacity-40">
          <div className="h-3 w-3 rounded-full bg-white"></div>
        </div>

        <div className="pointer-events-none absolute right-0 top-0 z-20 grid h-full w-[1px] translate-x-1/2 items-center justify-center bg-white bg-opacity-40">
          <div className="h-3 w-3 rounded-full bg-white"></div>
        </div>
        {children}
      </div>
    </ResizableBox>
  );
};

export default Resizeable;
