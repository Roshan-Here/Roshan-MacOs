import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { DockItem } from "../Types/FloatingDockType";
import { cn } from "../utils/utils";
import { FloatingDockProps } from "./../Types/FloatingDockType";
import { useFileStore } from "@/app/state/store";

export const FloatingDock: React.FC<FloatingDockProps> = ({
  items,
  className,
  onItemClick,
  openFolders,
  minimizedFolders,
}) => {
  let mouseX = useMotionValue(Infinity);
  const SetFile = useFileStore((state) => state.setFile);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "fixed bottom-1 left-1/2 -translate-x-1/2 mx-auto flex h-[74px] z-50 items-end rounded-2xl bg-white/10 px-4 pb-2 backdrop-blur-md",
        className
      )}
      style={{ zIndex: 99999 }}
    >
      {items.map((item) => (
        <IconContainer
          mouseX={mouseX}
          key={item.id}
          {...item}
          onClick={() => {
            SetFile(item.title);
            onItemClick(item.id);
          }}
          isOpen={openFolders.includes(item.id)}
          isMinimized={minimizedFolders.includes(item.id)}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  id,
  title,
  imageSrc,
  onClick,
  isOpen,
  isMinimized,
}: DockItem & {
  mouseX: MotionValue<number>;
  onClick: () => void;
  isOpen: boolean;
  isMinimized: boolean;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [60, 120, 60]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [60, 120, 60]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      style={{ width, height }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative mx-1 flex flex-col items-center justify-center"
    >
      <motion.div style={{ width, height, position: "relative" }}>
        <Image
          src={imageSrc}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={title}
          width={300}
          height={300}
          style={{ objectFit: "contain" }}
        />
      </motion.div>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -top-8 rounded-md bg-black/75 px-2 py-1 text-xs text-white"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      {(isOpen || isMinimized) && (
        <motion.div
          className="absolute -bottom-1 h-1 w-1 rounded-full bg-white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        />
      )}
    </motion.div>
  );
}
