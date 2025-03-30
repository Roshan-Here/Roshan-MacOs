import { useState } from "react";
import SafariHeader from "./components/Header";
import IFrameBottom from "./components/IFrameBottom";
import MainFrame from "./components/MainFrame";
import { UserThemeStore } from "@/app/state/store";
function SafariMain() {
  const [showFrame, setShowFrame] = useState<boolean>(false);
  const [currentUrl, setCurrentUrl] = useState<string>("");
  const [isExternalLink, setIsExternalLink] = useState<boolean>(false);
  const { isDark } = UserThemeStore();

  const handleLinkClick = (link: string, isExternal: boolean) => {
    if (isExternal) {
      window.open(link, "_blank");
    } else {
      console.log(isExternalLink)
      setCurrentUrl(link);
      setShowFrame(true);
      setIsExternalLink(false);
    }
  };

  const handleSearch = (searchTerm: string) => {
    let url = searchTerm;

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      if (url.includes(".") && !url.includes(" ")) {
        url = `https://${url}`;
      } else {
        url = `https://www.bing.com/search?q=${encodeURIComponent(searchTerm)}`;
      }
    }
    setCurrentUrl(url);
    setShowFrame(true);
    setIsExternalLink(false);
  };

  const handleGoBack = () => {
    setShowFrame(false);
    setCurrentUrl("");
  };

  return (
    <div className={`w-full h-full overflow-auto ${isDark?"bg-slate-800":"bg-slate-300"}`}>
      <SafariHeader
        onSearch={handleSearch}
        onGoBack={handleGoBack}
        canGoBack={showFrame}
      />
      <div className="w-full h-full">
        {showFrame ? (
          <IFrameBottom url={currentUrl} />
        ) : (
          <MainFrame onLinkClick={handleLinkClick} />
        )}
      </div>
    </div>
  );
}

export default SafariMain;
