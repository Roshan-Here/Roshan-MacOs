export interface DockItem {
  id: string;
  title: string;
  imageSrc: string;
  href: string;
  content: string;
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
