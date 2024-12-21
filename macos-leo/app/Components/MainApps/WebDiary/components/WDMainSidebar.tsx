import {
  IconAdjustments,
  IconBrandCupra,
  IconBrandGithub,
  IconCloudOff,
} from "@tabler/icons-react";
import { WDMainSidebarProps } from "./types/WDType";

function WDMainSidebar({
  items,
  selectedSection,
  onSectionSelect,
}: WDMainSidebarProps) {
  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "about":
        return <IconBrandCupra size={20} />;
      case "projects":
        return <IconBrandGithub size={20} />;
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col w-56 h-full bg-gray-700 text-white">
      <div className="flex justify-end gap-2 p-2">
        <IconCloudOff size={20} />
        <IconAdjustments size={20} />
      </div>
      <div className="flex flex-col">
        {items.map((item) => (
          <div
            key={item.id}
            className={`flex px-4 items-center py-2 cursor-pointer
              ${
                selectedSection?.id === item.id
                  ? "bg-orange-500"
                  : "hover:bg-gray-400"
              }`}
            onClick={() => onSectionSelect(item)}
          >
            {getIcon(item.title)}
            <p className="ml-2">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WDMainSidebar;
