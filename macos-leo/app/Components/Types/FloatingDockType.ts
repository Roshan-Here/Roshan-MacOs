export interface DockItem {
  id: string;
  title: string;
  imageSrc: string;
  href: string;
}


  
  export interface FloatingDockDesktopProps {
    items: DockItem[];
    className?: string;
  }