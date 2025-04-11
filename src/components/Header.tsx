
import React from "react";
import { useVisitorCount } from "../contexts/VisitorContext";
import { TreePine } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  const { visitorCount } = useVisitorCount();

  return (
    <header className="w-full border-b dark:border-[#19376D] bg-background dark:bg-background backdrop-blur-md fixed top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="text-xl font-bold  bg-text-clip ">
Nptel Swayam
          </h1>
        </Link>

        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          <div className="text-sm text-205781 dark:text-[#A5D7E8] hidden md:flex items-center">
            <span className="font-medium">{visitorCount.toLocaleString()}</span>
            <span className="ml-1 text-4F959D dark:text-[#A5D7E8]/70">visitors</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
