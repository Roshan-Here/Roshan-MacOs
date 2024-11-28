import React, { useEffect, useState } from "react";
import store from "../state/store";

function Navbar() {
  const {UserThemeStore } = store;
  const { setIsDark } = UserThemeStore(); // set dartheme working fine

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
      <p onClick={setIsDark}>Date time</p>
    </div>
  );
}

export default Navbar;
