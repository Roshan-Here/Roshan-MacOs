import React, { Dispatch, SetStateAction, useState } from 'react'
import Navbar from './Components/Navbar';



function App() {
  const [DarkTheme, SetDarkTheme] = useState<boolean>(false)

  const handleTheme = (
    DarkTheme : boolean,
    SetDarkTheme : Dispatch<SetStateAction<boolean>>
  ):void =>{
    // pass this on NavBar
    SetDarkTheme(!DarkTheme)
  }
  
  return (
    <>
      {/*main div with min-h-screen and width full  */}
      <div className='min-h-screen  w-full bg-gray-400'>
        <Navbar DarkTheme={DarkTheme} handleTheme={handleTheme}/>
        {/* fixed top Navbar */}
        {/* CENTER FOR DISPLAYING  */}
        {/* fixed bottom Doggle Bar */}
      </div>
    </>
  )
}

export default App
