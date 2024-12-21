import { UserThemeStore } from '@/app/state/store';
import {WDMiddlebarProps} from './types/WDType'

function WDMiddlebar({ items, selectedMd, onMdSelect }: WDMiddlebarProps) {
  const { isDark } = UserThemeStore();
    return (
        <div className="flex flex-col h-full w-96 overflow-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className={`p-3 border-0 border-l-2 cursor-pointer flex flex-col gap-2
              ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}
              ${selectedMd?.id === item.id ? 'border-l-orange-500' : 'border-l-transparent'}`}
            onClick={() => onMdSelect(item)}
          >
            <h1 className="font-bold">{item.title}</h1>
            <p className="text-sm ">{item.smallDescription}</p>
          </div>
        ))}
      </div>
  )
}

export default WDMiddlebar
