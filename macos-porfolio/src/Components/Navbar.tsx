import React, { useEffect, useState } from "react";
import { DarkTheme } from "../App";
import { NavbarProps } from "./Types/NavBarType";


function Navbar({DarkTheme,handleTheme}:NavbarProps) {
  const [currentTheme, SetcurrentTheme] = useState<boolean>(false);

  useEffect(() => {
    SetcurrentTheme(DarkTheme);
  }, [DarkTheme]);

  return (
    <div className="flex flex-row w-full p-6 bg-transparent opacity-30">
      {/* Apple icon */}
    </div>
  );
}

export default Navbar;
