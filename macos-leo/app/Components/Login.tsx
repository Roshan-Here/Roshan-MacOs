"use client";

import MorngBg from "@/public/assets/background/wallpaper-day.webp";
import NightBg from "@/public/assets/background/wallpaper-night.webp";
import { BrightnessStore, usePowerUpStore, UserThemeStore } from "../state/store";
import RosLogoWhite from "@/public/RosLogoWhite.png";
import Image from "next/image";
import React, { useState } from 'react'
function Login() {
    const { isDark } = UserThemeStore();
    const { setPowerUP } = usePowerUpStore();
    const { brightnessvalue} = BrightnessStore()
    const [passworddata, setpassword] = useState<string>("")
    const HandleChange=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
      setpassword(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault(); 
      setPowerUP(2); 
    };

  return (
    <div className={`min-h-screen w-full hide-scrollbar`}
    draggable={false}
    style={{
      backgroundImage: `url(${isDark ? NightBg.src : MorngBg.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      filter: `brightness(${brightnessvalue}%)`,
    }}
    >
        <div className="flex flex-col gap-3 items-center justify-center h-full">
        <Image
          className="rounded-lg"
          src={RosLogoWhite.src}
          alt = "Roshan logo"
          width={50}
          draggable={false}
          height={50}
        />
            <p className="text-white font-bold text-xl">Muhammed Roshan</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input type="password" value="" 
            placeholder="Enter Password"
            className="bg-slate-400 placeholder:text-slate-300 bg-opacity-50 border-0 rounded-lg text-white focus:outline-none px-1 "
            value={passworddata}
            onChange={HandleChange}
            />
            <button className="mb-3 text-white text-sm" type="submit">Click to Enter</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login
