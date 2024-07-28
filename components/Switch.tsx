import React from "react";
import { MoonIcon, SunIcon } from "lucide-react";

interface SwitchProps {
  id: string;
  onClick: () => void;
  theme: string;
}

const Switch: React.FC<SwitchProps> = ({ id, onClick, theme }) => {
  return (
    <div className="relative inline-flex items-center">
      <input type="checkbox" id={id} className="sr-only" onClick={onClick} />
      <div
        className="flex items-center justify-center w-7 h-7 rounded-full cursor-pointer"
        onClick={onClick}
        title={
          theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
        }
      >
        {theme === "dark" ? (
          <MoonIcon className="w-7 h-7 text-yellow-400" />
        ) : (
          <SunIcon className="w-7 h-7 text-orange-600" />
        )}
      </div>
    </div>
  );
};

export default Switch;
