import {WDMiddlebarProps} from './types/WDType'

function WDMiddlebar({ items, selectedMd, onMdSelect }: WDMiddlebarProps) {
    return (
        <div className="flex flex-col h-full w-72 overflow-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className={`p-3 border-0 border-l-2 cursor-pointer
              ${selectedMd?.id === item.id ? 'border-l-orange-500 bg-gray-100' : 'border-l-transparent hover:bg-gray-50'}`}
            onClick={() => onMdSelect(item)}
          >
            <h1 className="font-bold">{item.title}</h1>
            <p className="text-sm text-gray-600">{item.smallDescription}</p>
          </div>
        ))}
      </div>
  )
}

export default WDMiddlebar
