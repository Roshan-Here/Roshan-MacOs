// handlechange, handleBack
import { UserThemeStore } from "@/app/state/store";
import {
  IconChevronLeft,
  IconChevronRight,
  IconLayoutBottombar,
  IconShieldHalfFilled,
  IconUpload,
  IconCopy,
} from "@tabler/icons-react";
function SafariHeader() {
    const { isDark } = UserThemeStore();
  return (
    <div className={`${isDark?"bg-black":"bg-slate-200"} fixed-0 w-full p-1 flex flex-row justify-between items-center`}>
      <div className="flex flex-row justify-start gap-2 items-center">
        <div className="p-1">
          <button className="p-1 rounded-lg items-center border border-slate-600">
            <IconChevronLeft size={16} />
          </button>
          <button className="p-1 rounded-lg items-center border border-slate-600">
            <IconChevronRight size={16} />
          </button>
        </div>
        <button className="p-1 px-2 rounded-lg items-center border border-slate-600">
          <IconLayoutBottombar className="rotate-90" size={16} />
        </button>
      </div>
      <div className="flex justify-center gap-2 items-center">
        <button className="p-1 px-2 rounded-lg items-center border border-slate-600">
          <IconShieldHalfFilled
            className="transform scale-x-[-1]"
            size={16}
          />
        </button>
        <input
          className={`${isDark?"bg-slate-600 placeholder-gray":"bg-slate-300 placeholder-gray"}  outline-none border-transparent focus:outline-blue-500 border-none w-56 p-1  h-6 text-sm rounded-md text-center`}
          type="text"
          placeholder="Search or enter website name"
        />
      </div>
      <div className="flex justify-end gap-2">
        <button className="p-1 px-2 rounded-lg items-center border border-slate-600">
          <IconUpload size={16} />
        </button>
        <button className="p-1 px-2 rounded-lg items-center border border-slate-600">
          <IconCopy size={16} />
        </button>
      </div>
    </div>
  );
}

export default SafariHeader;
