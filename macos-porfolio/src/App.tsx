import React, { Dispatch, SetStateAction, useState } from 'react'
import Navbar from './Components/Navbar';


export const [DarkTheme, SetDarkTheme] = useState<boolean>(false)

const handleTheme = (
  DarkTheme : boolean,
  SetDarkTheme : Dispatch<SetStateAction<boolean>>
):void =>{
  // pass this on NavBar
  SetDarkTheme(!DarkTheme)
}

function App() {
  return (
    <>
      {/*main div with min-h-screen and width full  */}
      <div className='min-h-screen  w-full'>
        <Navbar DarkTheme={DarkTheme} handleTheme={handleTheme}/>
        {/* fixed top Navbar */}
        {/* CENTER FOR DISPLAYING  */}
        {/* fixed bottom Doggle Bar */}
      </div>
    </>
  )
}

export default App
