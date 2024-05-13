import React from "react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const SwitchWithLable = ({
  defaultChecked,
  lable,
  className,
  onCheckedChange,
}: {
  defaultChecked: boolean;
  lable: string;
  className?: string;
  onCheckedChange?: (value: boolean) => void;
}) => {
  return (
    <div className={cn("grid", className)}>
      <span className="text-xs">{lable}</span>
      <Switch
        defaultChecked={defaultChecked}
        onChange={(value) => console.log(value)}
        // value={value}
        onCheckedChange={onCheckedChange}
      />
    </div>
  );
};

export default SwitchWithLable;
