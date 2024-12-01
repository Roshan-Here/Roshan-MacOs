export interface FloatingFolderProps {
    isOpen: boolean;
    onClose: () => void;
    onMinimize: () => void;
    children: React.ReactNode;
    className?: string;
    title: string;
    initialPosition: { x: number; y: number };
    zIndex: number;
    onBringToFront: () => void;
  }