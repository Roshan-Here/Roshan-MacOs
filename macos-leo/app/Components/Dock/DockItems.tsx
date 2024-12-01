import Github from "@/public/assets/Icons/github.png";
import Laucnpad from "@/public/assets/Icons/launchpad.png";
import Safari from "@/public/assets/Icons/safari.png";
import Terminal from "@/public/assets/Icons/terminal.png";
import Typora from "@/public/assets/Icons/typora.png";
import Vscode from "@/public/assets/Icons/vscode.png";
import { DockItem } from '../Types/FloatingDockType';


export const DockItems: DockItem[] = [
  {
    id: "home",
    title: "Home",
    imageSrc: Laucnpad.src,
    href: "#",
  },
  {
    id: "products",
    title: "Products",
    imageSrc: Safari.src,
    href: "#",
  },
  {
    id: "components",
    title: "Components",
    imageSrc: Vscode.src,
    href: "#",
  },
  {
    id: "aceternity",
    title: "Aceternity UI",
    imageSrc: Typora.src,
    href: "#",
  },
  {
    id: "twitter",
    title: "Twitter",
    imageSrc: Terminal.src,
    href: "#",
  },
  {
    id: "github",
    title: "GitHub",
    imageSrc: Github.src,
    href: "#",
  },
];
