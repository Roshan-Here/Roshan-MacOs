import { ReactNode } from "react";

export interface WDMdData {
  id: string;
  title: string;
  file: string;
  smallDescription: string;
  link?: string;
}

export interface WDData {
  id: string;
  title: string;
  md: WDMdData[];
}

export interface WDMainSidebarProps {
  items: WDData[];
  selectedSection: WDData | null;
  onSectionSelect: (section: WDData) => void;
}

export interface WDMiddlebarProps {
  items: WDMdData[];
  selectedMd: WDMdData | null;
  onMdSelect: (md: WDMdData) => void;
}

export interface WDMarkdownProps {
  selectedMd: string | null;
}