
import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { Toggle } from "@/components/ui/toggle";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Toggle 
      aria-label="Toggle theme" 
      pressed={theme === "dark"}
      onPressedChange={toggleTheme}
      className="p-2 transition-colors rounded-full bg-opacity-40"
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-A5D7E8" />
      ) : (
        <Moon size={20} className="text-205781" />
      )}
    </Toggle>
  );
};

export default ThemeSwitcher;
