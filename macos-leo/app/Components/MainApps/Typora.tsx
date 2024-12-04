import React, { useState } from 'react'

function TyporaApp() {
    const DefaultData = "Heyy 👋\n\nIts me Roshan\nNice to meat You"
    const [typordata, settyporadata] = useState<string>(DefaultData)
    const HandleChange=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        settyporadata(e.target.value)
    }
  return (
    <div className='w-full h-[420px] overflow-hidden'>
        <textarea
            className="w-full h-full border-none focus:outline-none resize-none"
            value={typordata}
            onChange={HandleChange}
        ></textarea>
    </div>
  )
}

export default TyporaApp
