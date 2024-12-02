export interface FloatingFolderProps {
  isOpen: boolean;
  onClose: () => void;
  onMinimize: () => void;
  children: React.ReactNode;
  title: string;
  initialSize: { width: number; height: number };
  initialPosition: { x: number; y: number };
  zIndex: number;
  onBringToFront: () => void;
}