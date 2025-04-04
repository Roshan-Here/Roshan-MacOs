import React, { useEffect, useRef, useState } from "react";
import { FloatingFolderProps } from "../../Types/FolderType";
import { IconMinus, IconX } from "@tabler/icons-react";
import { UserThemeStore } from "@/app/state/store";

const preventDragClass = "select-none pointer-events-none";

export const FloatingFolder: React.FC<FloatingFolderProps> = ({
  isOpen = true,
  onClose,
  onMinimize,
  children,
  title = "Folder",
  initialSize = { width: 400, height: 300 },
  initialPosition = { x: 100, y: 100 },
  zIndex = 10,
  onBringToFront,
}) => {
  const { isDark } = UserThemeStore();
  const [isMaximized, setIsMaximized] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);

  const folderRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);

  const handleBringToFront = () => {
    if (onBringToFront) {
      onBringToFront();
    }
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };
  
  const handleDoubleClickMaximize = () => {
    handleMaximize(); 
  };

  const maximizedStyle = isMaximized
    ? ({
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1000,
      } as React.CSSProperties)
    : {};

  // Resize functionality
  const startResize = (direction: string) => (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);

    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = size.width;
    const startHeight = size.height;
    const startLeft = position.x;
    const startTop = position.y;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;

      let newWidth = startWidth;
      let newHeight = startHeight;
      let newLeft = startLeft;
      let newTop = startTop;

      switch (direction) {
        case "right":
          newWidth = Math.max(300, startWidth + deltaX);
          break;
        case "left":
          newWidth = Math.max(300, startWidth - deltaX);
          newLeft = startLeft + (startWidth - newWidth);
          break;
        case "bottom":
          newHeight = Math.max(200, startHeight + deltaY);
          break;
        case "top":
          newHeight = Math.max(200, startHeight - deltaY);
          newTop = startTop + (startHeight - newHeight);
          break;
        case "bottom-right":
          newWidth = Math.max(300, startWidth + deltaX);
          newHeight = Math.max(200, startHeight + deltaY);
          break;
        case "bottom-left":
          newWidth = Math.max(300, startWidth - deltaX);
          newHeight = Math.max(200, startHeight + deltaY);
          newLeft = startLeft + (startWidth - newWidth);
          break;
        case "top-right":
          newWidth = Math.max(300, startWidth + deltaX);
          newHeight = Math.max(200, startHeight - deltaY);
          newTop = startTop + (startHeight - newHeight);
          break;
        case "top-left":
          newWidth = Math.max(300, startWidth - deltaX);
          newHeight = Math.max(200, startHeight - deltaY);
          newLeft = startLeft + (startWidth - newWidth);
          newTop = startTop + (startHeight - newHeight);
          break;
      }

      setSize({ width: newWidth, height: newHeight });
      setPosition({ x: newLeft, y: newTop });
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (dragRef.current && dragRef.current.contains(e.target as Node)) {
      setIsDragging(true);
      const startX = e.clientX - position.x;
      const startY = e.clientY - position.y;

      const handleMouseMove = (moveEvent: MouseEvent) => {
        setPosition({
          x: moveEvent.clientX - startX,
          y: moveEvent.clientY - startY,
        });
      };

      const handleMouseUp = () => {
        setIsDragging(false);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
  };

  useEffect(() => {
    if (isDragging || isResizing) {
      document.body.style.userSelect = "none";
    } else {
      document.body.style.userSelect = "auto";
    }
  }, [isDragging, isResizing]);

  if (!isOpen) return null;

  return (
    <div
      ref={folderRef}
      className={`fixed ${isDark?"bg-gray-800 text-white":"bg-white text-black"} rounded-lg shadow-xl`}
      style={{
        width: `${size.width}px`,
        height: `${size.height}px`,
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? "grabbing" : "default",
        zIndex: zIndex,
        ...maximizedStyle,
      }}
      onClick={handleBringToFront}
      onMouseDown={handleBringToFront}
    >
      {/* Drag Handle */}
      <div
        ref={dragRef}
        onMouseDown={handleMouseDown}
        onDoubleClick={handleDoubleClickMaximize}
        className={`w-full h-10 ${isDark?"bg-folder-top-dark":"bg-gray-200"} rounded-t-lg flex items-center px-4 `}
      >
        <div className="flex items-center space-x-2">
          <div className="rounded-full p-2 bg-red-500 group relative">
            <IconX
              className="text-black group-hover:block text-xl hidden cursor-pointer absolute top-0 left-0 right-0 bottom-0 m-auto"
              size={10}
              onClick={onClose}
            />
          </div>
          <div className="rounded-full p-2 bg-yellow-500 group relative">
            <IconMinus
              className="text-black group-hover:block text-xl hidden cursor-pointer absolute top-0 left-0 right-0 bottom-0 m-auto"
              size={10}
              onClick={onMinimize}
            />
          </div>
          <div
            className="rounded-full p-2 bg-green-500 group relative cursor-pointer"
            onClick={handleMaximize}
          >
            <svg
              className="text-black group-hover:block text-xl hidden cursor-pointer absolute top-0 left-0 right-0 bottom-0 m-auto"
              width="10"
              height="10"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 16H2V11M11 2H16V7"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className={`flex-grow text-center ${preventDragClass}`}>
          <span className={` ${isDark?"text-white":"text-gray-900"} font-medium`}>{title}</span>
        </div>
      </div>

      {/* Folder Content */}
      <div
        className={`overflow-auto h-[calc(100%-2.5rem)]`}
      >
        {children}
      </div>

      {/* Resize Handles */}
      <div
        onMouseDown={startResize("right")}
        className="absolute right-0 top-0 bottom-0 w-2 cursor-col-resize"
        style={{ height: "calc(100% - 2.5rem)" }}
      />
      <div
        onMouseDown={startResize("left")}
        className="absolute left-0 top-0 bottom-0 w-2 cursor-col-resize"
        style={{ height: "calc(100% - 2.5rem)" }}
      />
      <div
        onMouseDown={startResize("bottom")}
        className="absolute bottom-0 left-0 right-0 h-2 cursor-row-resize"
      />
      <div
        onMouseDown={startResize("top")}
        className="absolute top-0 left-0 right-0 h-2 cursor-row-resize"
      />
      <div
        onMouseDown={startResize("bottom-right")}
        className="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize"
      >
        <div className="w-full h-full hover:bg-gray-200 opacity-50 rounded-br-lg"></div>
      </div>
      <div
        onMouseDown={startResize("bottom-left")}
        className="absolute bottom-0 left-0 w-4 h-4 cursor-nesw-resize"
      >
        <div className="w-full h-full hover:bg-gray-200 opacity-50 rounded-bl-lg"></div>
      </div>
      <div
        onMouseDown={startResize("top-right")}
        className="absolute top-0 right-0 w-4 h-4 cursor-nesw-resize"
      >
        <div className="w-full h-full hover:bg-gray-200 opacity-50 rounded-tr-lg"></div>
      </div>
      <div
        onMouseDown={startResize("top-left")}
        className="absolute top-0 left-0 w-4 h-4 cursor-nwse-resize"
      >
        <div className="w-full h-full hover:bg-gray-200 opacity-50 rounded-tl-lg"></div>
      </div>
    </div>
  );
};
