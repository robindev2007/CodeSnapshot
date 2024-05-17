import React from "react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const SwitchWithLabel = ({
  defaultChecked,
  label,
  className,
  onCheckedChange,
}: {
  defaultChecked: boolean;
  label: string;
  className?: string;
  onCheckedChange?: (value: boolean) => void;
}) => {
  return (
    <div className={cn("grid", className)}>
      <span className="text-xs">{label}</span>
      <Switch
        defaultChecked={defaultChecked}
        onChange={(value) => console.log(value)}
        // value={value}
        onCheckedChange={onCheckedChange}
      />
    </div>
  );
};

export default SwitchWithLabel;
