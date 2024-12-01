import Github from "@/public/assets/Icons/github.png";
import Laucnpad from "@/public/assets/Icons/launchpad.png";
import Safari from "@/public/assets/Icons/safari.png";
import Terminal from "@/public/assets/Icons/terminal.png";
import Typora from "@/public/assets/Icons/typora.png";
import Vscode from "@/public/assets/Icons/vscode.png";
import { DockItem } from '../Types/FloatingDockType';


export const DockItems: DockItem[] = [
  {
    id: "launchpad",
    title: "Launchpad",
    imageSrc: Laucnpad.src,
    href: "#",
    content: "Important work documents and files",
  },
  {
    id: "safari",
    title: "Safari",
    imageSrc: Safari.src,
    href: "#",
    content: "Personal and family photos collection",
  },
  {
    id: "vscode",
    title: "VSCode",
    imageSrc: Vscode.src,
    href: "#",
    content: "Personal and family photos collection",
  },
  {
    id: "typora",
    title: "Tyopora",
    imageSrc: Typora.src,
    href: "#",
    content: "Personal and family photos collection",
  },
  {
    id: "terminal",
    title: "Terminal",
    imageSrc: Terminal.src,
    href: "#",
    content: "Personal and family photos collection",
  },
  {
    id: "github",
    title: "GitHub",
    imageSrc: Github.src,
    href: "#",
    content: "Personal and family photos collection",
  },
];
