import React from "react";
import { Switch } from "../ui/switch";

function SwitchWithLable({
  lable,
  onChange,
  defaultChecked,
}: {
  lable?: string;
  onChange?: (e: boolean) => void;
  defaultChecked?: boolean;
}) {
  return (
    <div className="grid gap-1">
      {lable && <span className="text-xs text-muted-foreground">{lable}</span>}
      <Switch
        defaultChecked={defaultChecked}
        onCheckedChange={(e) => onChange && onChange(e)}
      />
    </div>
  );
}

export default SwitchWithLable;
