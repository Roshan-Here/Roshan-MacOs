import React, { Dispatch, SetStateAction, useState } from 'react'
import Navbar from './Components/Navbar';
import NightBg from './assets/background/wallpaper-night.jpg'
import MorngBg from './assets/background/wallpaper-day.jpg'
import store from './state/store' 


function App() {
  const {UserThemeStore } = store;
  const { setIsDark, isDark } = UserThemeStore();
  
  return (
    <>
      {/*main div with min-h-screen and width full  */}
      <div className={`min-h-screen  w-full`}
      draggable={false}
      style={{ backgroundImage: `url(${isDark? NightBg:MorngBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <Navbar />
        {/* fixed top Navbar */}
        {/* CENTER FOR DISPLAYING  */}
        {/* fixed bottom Doggle Bar */}
      </div>
    </>
  )
}

export default App
