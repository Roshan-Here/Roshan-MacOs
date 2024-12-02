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
    content: "Important work documents and files",
    initialSize: { width: 300, height: 400 },
    initialPosition: { x: 100, y: 100 },
  },
  {
    id: "safari",
    title: "Safari",
    imageSrc: Safari.src,
    content: "Personal and family photos collection",
    initialSize: { width: 400, height: 300 },
    initialPosition: { x: 200, y: 150 },
  },
  {
    id: "vscode",
    title: "VSCode",
    imageSrc: Vscode.src,
    content: "Personal and family photos collection",
    initialSize: { width: 400, height: 300 },
    initialPosition: { x: 200, y: 150 },
  },
  {
    id: "typora",
    title: "Tyopora",
    imageSrc: Typora.src,
    content: "Personal and family photos collection",
    initialSize: { width: 400, height: 300 },
    initialPosition: { x: 200, y: 150 },
  },
  {
    id: "terminal",
    title: "Terminal",
    imageSrc: Terminal.src,
    content: "Personal and family photos collection",
    initialSize: { width: 400, height: 300 },
    initialPosition: { x: 200, y: 150 },
  },
  {
    id: "github",
    title: "GitHub",
    imageSrc: Github.src,
    content: "Personal and family photos collection",
    initialSize: { width: 400, height: 300 },
    initialPosition: { x: 200, y: 150 },
  },
];
