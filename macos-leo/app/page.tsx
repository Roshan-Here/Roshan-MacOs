"use client";

import MorngBg from "@/public/assets/background/wallpaper-day.webp";
import NightBg from "@/public/assets/background/wallpaper-night.webp";
import MainScreen from "./Components/MainScreen/MainScreen";
import Navbar from "./Components/Navbar";
import { BrightnessStore, UserThemeStore } from "./state/store";

export default function Home() {
  const { isDark } = UserThemeStore();
  const { brightnessvalue} = BrightnessStore()
  return (
    <div
      className={`min-h-screen w-full hide-scrollbar`}
      draggable={false}
      style={{
        backgroundImage: `url(${isDark ? NightBg.src : MorngBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: `brightness(${brightnessvalue}%)`,
      }}
    >
      <Navbar />
      <MainScreen />
    </div>
  );
}
