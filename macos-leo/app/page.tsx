"use client";

import { DockItems } from "./Components/Dock/DockItems";
import { FloatingDock } from "./Components/Dock/FloatingDock";
import MorngBg from "@/public/assets/background/wallpaper-day.jpg";
import NightBg from "@/public/assets/background/wallpaper-night.jpg";
import Navbar from "./Components/Navbar";
import { UserThemeStore } from "./state/store";

export default function Home() {
  const { setIsDark, isDark } = UserThemeStore();
  return (
    <div
      className={`min-h-screen w-full hide-scrollbar`}
      draggable={false}
      style={{
        backgroundImage: `url(${isDark ? NightBg.src : MorngBg.src})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        filter: "brightness(106%)",
      }}
    >
      <Navbar />
      {/* fixed top Navbar */}
      {/* CENTER FOR DISPLAYING  */}
      {/* fixed bottom Dock Bar */}
      <div className="fixed bottom-0 z-50 flex justify-center items-center w-full">
        {/* <p>Hellooooo Guyss</p> */}
        <FloatingDock items={DockItems} />
      </div>
    </div>
  );
}
