import WDMainSidebar from "./components/WDMainSidebar";
import WDMiddlebar from "./components/WDMiddlebar";
import WDMarkdown from "./components/WDMarkdown";
import { WDData,WDMdData } from "./components/types/WDType";
import { useEffect, useState } from "react";
import { WDItemsData } from './components/WebDiaryItems';

function WebDiaryApp() {
  const [selectedSection, setSelectedSection] = useState<WDData | null>(
    WDItemsData[0]
  );
  const [selectedMd, setSelectedMd] = useState<WDMdData | null>(null);
  const [markdownContent, setMarkdownContent] = useState<string>("");

  const handleSectionClick = (section: WDData) => {
    setSelectedSection(section);
    if (section.md.length > 0) {
      handleMdClick(section.md[0]);
    } else {
      setSelectedMd(null);
      setMarkdownContent("");
    }
  };

  const fixImageURL = (content: string, baseURL: string): string => {
    const baseDir = baseURL.substring(0, baseURL.lastIndexOf('/') + 1);
    return content.replace(
      /!\[([^\]]*)\]\((?!http)([^)]+)\)/g,
      (match, alt, path) => `![${alt}](${baseDir}${path})`
    );
  };


  const handleMdClick = async (md: WDMdData) => {
    setSelectedMd(md);
    try {
      const response = await fetch(md.link || "");
      const content = await response.text();
      const fixedContent = fixImageURL(content, md.link || "");
      setMarkdownContent(fixedContent);
    } catch (error) {
      console.error("Error fetching markdown:", error);
      setMarkdownContent("Error loading content");
    }
  };

  useEffect(() => {
    if (selectedSection && selectedSection.md.length > 0) {
      handleMdClick(selectedSection.md[0]);
    }
  }, []);


  return (
    <div className="flex flex-row w-full h-full">
      <WDMainSidebar 
        items={WDItemsData} 
        selectedSection={selectedSection}
        onSectionSelect={handleSectionClick}
      />
      <WDMiddlebar 
        items={selectedSection?.md || []}
        selectedMd={selectedMd}
        onMdSelect={handleMdClick}
      />
      <WDMarkdown selectedMd={markdownContent} />
    </div>
  );
}

export default WebDiaryApp;
