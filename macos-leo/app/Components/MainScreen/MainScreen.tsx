import { useState } from "react";
import { DockItems } from "../Dock/DockItems";
import { FloatingDock } from "../Dock/FloatingDock";
import { FloatingFolder } from "./Folders/Folder";

function MainScreen() {
  const [openFolders, setOpenFolders] = useState<string[]>(["webdiary"])
  const [minimizedFolders, setMinimizedFolders] = useState<string[]>([]);
  const [folderZIndex, setFolderZIndex] = useState<Record<string, number>>({});

  const toggleFolder = (id: string) => {
    if (openFolders.includes(id)) {
      setOpenFolders((prev) => prev.filter((folderId) => folderId !== id));
      setMinimizedFolders((prev) => [...prev, id]);
    } else if (minimizedFolders.includes(id)) {
      setMinimizedFolders((prev) => prev.filter((folderId) => folderId !== id));
      setOpenFolders((prev) => [...prev, id]);
    } else {
      setOpenFolders((prev) => [...prev, id]);
    }
    bringToFront(id);
  };

  const closeFolder = (id: string) => {
    setOpenFolders((prev) => prev.filter((folderId) => folderId !== id));
    setMinimizedFolders((prev) => prev.filter((folderId) => folderId !== id));
  };

  const bringToFront = (id: string) => {
    const maxZIndex = Math.max(...Object.values(folderZIndex), 0);
    setFolderZIndex((prev) => ({ ...prev, [id]: maxZIndex + 1 }));
  };
  return (
    <div className="w-full h-full">
      {DockItems.map((item) => (
        <FloatingFolder
          key={item.id}
          isOpen={openFolders.includes(item.id)}
          onClose={() => closeFolder(item.id)}
          onMinimize={() => toggleFolder(item.id)}
          title={item.title}
          initialSize={item.initialSize}
          initialPosition={item.initialPosition}
          zIndex={folderZIndex[item.id] || 10}
          onBringToFront={() => bringToFront(item.id)}
        >
          {item.content}
        </FloatingFolder>
      ))}

      <div className="fixed bottom-0 z-50 flex justify-center items-center w-full">
        <FloatingDock
          items={DockItems}
          onItemClick={toggleFolder}
          openFolders={openFolders}
          minimizedFolders={minimizedFolders}
        />
      </div>
    </div>
  );
}

export default MainScreen;
