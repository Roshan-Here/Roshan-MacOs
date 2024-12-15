import Image from "next/image";
import Website from "@/public/RosLogo.png";
import Github from "@/public/assets/Icons/github.svg";
import Linkedin from "@/public/assets/Icons/linkedin.svg";
import GlobalProfile from "@/public/assets/Icons/globalprofile.webp"
import { MainFrameProps, SnsLinksProps } from "../Type/ManeFrameProps";

const SNSLINKS: SnsLinksProps[] = [
  {
    name: "website",
    imgurl: Website.src,
    sitelink: "https://one-compiler.vercel.app/",
  },
  {
    name: "Github",
    imgurl: Github.src,
    sitelink: "github.com/feed/",
  },
  {
    name: "Linkedin",
    imgurl: Linkedin.src,
    sitelink: "linkedin.com/feed/",
  },
  {
    name: "GlobalProfile",
    imgurl: GlobalProfile.src,
    sitelink: "https://globalprofile.vercel.app/",
  },
];

function MainFrame({ onLinkClick }: MainFrameProps) {
  const handleLinkClick = (link: string, isExternal: boolean) => {
    onLinkClick(link, isExternal);
  };
  return (
    <div className="w-full h-full flex flex-col">
      {/* sns links section */}
      <div className="flex flex-col justify-start items-start md:mx-12 mx-auto">
        <h1 className="text-xl py-4">SNS Links</h1>
        <div className="flex flex-row justify-start">
          {SNSLINKS.map((item, index) => (
            <div key={index} className="flex flex-col gap-3 items-center">
              <button
                onClick={() =>
                  handleLinkClick(item.sitelink, item.name !== "website" && item.name!== "GlobalProfile")
                }
                className="mx-2"
              >
                <Image
                  draggable={false}
                  src={item.imgurl}
                  height={60}
                  width={60}
                  alt={item.name}
                  className="object-contain"
                />
              </button>
              <p className="text-md">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:mx-12 mx-auto">
        <h1 className="text-xl py-4">Recent Usage Report</h1>
        <div className="flex flex-row justify-start gap-4 p-2 border rounded-lg shadow-md border-gray-400 shadow-green-300">
          <div className="flex flex-col gap-2">
            <p className="text-xl">314,766</p>
            <p>Trackers & ads blocked</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl">2.37GB</p>
            <p>Bandwidth saved</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl">4.4hours</p>
            <p>Time saved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainFrame;
