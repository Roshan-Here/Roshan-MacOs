import { Thostname, Tusername } from "../hooks/Datas"


function Terminalname() {
  return (
    <div className="">
      <span className="text-green-500 ">
        {Tusername}
      </span>
      <span className="text-violet-800">@</span>
      <span className="text-blue-400 ">
        {Thostname}
      </span>
      <span className="text-red-500">:$ ~ </span>
    </div>
  )
}

export default Terminalname
