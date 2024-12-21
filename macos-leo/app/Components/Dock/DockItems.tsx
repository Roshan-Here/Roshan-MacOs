import GlobalProfile from "@/public/assets/Icons/globalprofile.webp";
import Safari from "@/public/assets/Icons/safari.webp";
import Terminal from "@/public/assets/Icons/terminal.webp";
import Typora from "@/public/assets/Icons/typora.webp";
import Vscode from "@/public/assets/Icons/vscode.webp";
import WebDiary from "@/public/assets/Icons/WebDiary.webp";
import Youtube from "@/public/assets/Icons/YouTube.webp";
import GloblaProfileApp from "../MainApps/GloblaProfileApp";
import LiveTermMain from "../MainApps/LiveTerm/LiveTermMain";
import SafariMain from "../MainApps/Safari/SafariMain";
import TyporaApp from "../MainApps/TyporaApp";
import VSCodeApp from "../MainApps/VSCodeApp";
import WebDiaryApp from "../MainApps/WebDiary/WebDiaryApp";
import YoutubeApp from "../MainApps/YoutubeApp";
import { DockItem } from '../Types/FloatingDockType';


export const DockItems: DockItem[] = [
  {
    id: "webdiary",
    title: "WebDiary",
    imageSrc: WebDiary.src,
    content: <WebDiaryApp/>,
    initialSize: { width: 900, height: 470 },
    initialPosition: { x: 200, y: 70 },
  },
  {
    id: "safari",
    title: "Safari",
    imageSrc: Safari.src,
    content: <SafariMain/>,
    initialSize: { width: 700, height: 400 },
    initialPosition: { x: 200, y: 30 },
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
    content: <LiveTermMain />,
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
