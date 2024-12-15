export interface SnsLinksProps {
    name: string
    imgurl : string
    sitelink : string
}

export interface IFrameBottomProps {
    url: string;
}

export interface SafariHeaderProps {
    onSearch: (searchTerm: string) => void;
    onGoBack: () => void;
    canGoBack: boolean;  
}

export interface MainFrameProps {
    onLinkClick: (link: string, isExternal: boolean) => void;
}