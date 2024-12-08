import GlobalProfile from "@/public/assets/Icons/globalprofile.png";
import Laucnpad from "@/public/assets/Icons/launchpad.png";
import Safari from "@/public/assets/Icons/safari.png";
import Terminal from "@/public/assets/Icons/terminal.png";
import Typora from "@/public/assets/Icons/typora.png";
import Youtube from "@/public/assets/Icons/YouTube.png";
import Vscode from "@/public/assets/Icons/vscode.png";
import { DockItem } from '../Types/FloatingDockType';
import TyporaApp from "../MainApps/TyporaApp";
import VSCodeApp from "../MainApps/VSCodeApp";
import GloblaProfileApp from "../MainApps/GloblaProfileApp";
import YoutubeApp from "../MainApps/YoutubeApp";
import TerminalApp from "../MainApps/TerminalApp";


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
    id: "youtube",
    title: "Youtube",
    imageSrc: Youtube.src,
    content: (<YoutubeApp/>),
    initialSize: { width: 860, height: 560 },
    initialPosition: { x: 200, y: 20 },
  },
  {
    id: "typora",
    title: "Tyopora",
    imageSrc: Typora.src,
    content: (<TyporaApp/>),
    initialSize: { width: 500, height: 500 },
    initialPosition: { x: 400, y: 50 },
  },
  {
    id: "vscode",
    title: "VSCode",
    imageSrc: Vscode.src,
    content: (<VSCodeApp/>),
    initialSize: { width: 660, height: 560 },
    initialPosition: { x: 600, y: 30 },
  },
  {
    id: "terminal",
    title: "Terminal",
    imageSrc: Terminal.src,
    content: <TerminalApp/>,
    initialSize: { width: 660, height: 560 },
    initialPosition: { x: 100, y: 20 },
  },
  {
    id: "globalprofile",
    title: "GlobalProfile",
    imageSrc: GlobalProfile.src,
    content: (<GloblaProfileApp/>),
    initialSize: { width: 800, height: 600 },
    initialPosition: { x: 200, y: 150 },
  },
];
