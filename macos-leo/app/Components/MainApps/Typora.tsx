import { UserThemeStore } from '@/app/state/store';
import React, { useState } from 'react'

function TyporaApp() {
  const { isDark } = UserThemeStore();
    const DefaultData = "Heyy 👋\n\nIts me Roshan\nNice to meat You"
    const [typordata, settyporadata] = useState<string>(DefaultData)
    const HandleChange=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        settyporadata(e.target.value)
    }
  return (
    <div className="p-4 w-full h-[420px] overflow-hidden">
        <textarea
            className={`w-full h-full border-none focus:outline-none resize-none ${isDark?"text-white bg-gray-800":"text-gray-800 bg-white"}`}
            value={typordata}
            onChange={HandleChange}
        ></textarea>
    </div>
  )
}

export default TyporaApp
