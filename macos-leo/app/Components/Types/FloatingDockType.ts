import { ReactNode } from "react";

export interface DockItem {
  id: string;
  title: string;
  imageSrc: string;
  content: ReactNode;
  initialSize: { width: number; height: number };
  initialPosition: { x: number; y: number };
}

export interface FloatingDockDesktopProps {
  items: DockItem[];
  className?: string;
}

export interface FloatingDockProps {
  items: DockItem[];
  className?: string;
  onItemClick: (id: string) => void;
  openFolders: string[];
  minimizedFolders: string[];
}
