import React, { useEffect, useState } from "react";
import { NavbarProps } from "./Types/NavBarType";

function Navbar({ DarkTheme, handleTheme }: NavbarProps) {
  const [currentTheme, SetcurrentTheme] = useState<boolean>(false);

  useEffect(() => {
    SetcurrentTheme(DarkTheme);
  }, [DarkTheme]);

  return (
    <div className="flex flex-row w-full p-1  bg-opacity-20 border-b border-black border-opacity-20">
      {/* Apple icon  with on click dropdown*/}
      <p className="">Apple Icon</p>
      {/* Open Folders Name */}
      <p>Folder Name</p>

      {/* end */}
      <p>Battery icon</p>
      <p>Wifi Icon</p>
      <p>More Function Button</p>
      <p>Date time</p>
    </div>
  );
}

export default Navbar;
