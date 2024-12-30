import {
  IconBluetooth,
  IconMaximize,
  IconMinimize,
  IconMoon,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerTrackNextFilled,
  IconPlayerTrackPrevFilled,
  IconSun,
  IconSunset2,
  IconVolume,
  IconWifi,
} from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import {
  BrightnessStore,
  UserThemeStore,
  useFileStore,
  SoundStore,
} from "../state/store";
import { formatDate } from "./utils/datetime";
import Image from "next/image";
import { MusicItem } from "./Types/MusicType";
import { MusicItems } from "./MusicItems";

declare global {
  interface HTMLElement {
    mozRequestFullScreen?(): Promise<void>;
    webkitRequestFullscreen?(): Promise<void>;
    msRequestFullscreen?(): Promise<void>;
  }

  interface Document {
    mozCancelFullScreen?(): Promise<void>;
    webkitExitFullscreen?(): Promise<void>;
    msExitFullscreen?(): Promise<void>;
  }
}

function Navbar() {
  const preventDragClass = "select-none";
  const [isControllerOpen, setIsControllerOpen] = useState<boolean>(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const { setIsDark, isDark } = UserThemeStore();
  const { setBrightnessValue, brightnessvalue } = BrightnessStore();
  const { setSoundValue, soundvalue } = SoundStore();
  const FileName = useFileStore((state) => state.name);
  const [currentDate, setCurrentDate] = useState(new Date());

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOpen(!isMenuOpen);
    setIsControllerOpen(false);
  };

  const toggleController = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsControllerOpen(!isControllerOpen);
    setMenuOpen(false);
  };

  // for music
  const [currentTrack, setCurrentTrack] = useState<MusicItem>();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * MusicItems.length);
    setCurrentTrack(MusicItems[randomIndex]);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = soundvalue / 100;
    }
  }, [soundvalue]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    if (currentTrack) {
      const currentIndex = MusicItems.findIndex(
        (item) => item.id === currentTrack.id
      );
      const nextIndex = (currentIndex + 1) % MusicItems.length;
      setCurrentTrack(MusicItems[nextIndex]);
      setIsPlaying(false);
    }
  };

  const handlePrev = () => {
    if (currentTrack) {
      const currentIndex = MusicItems.findIndex(
        (item) => item.id === currentTrack.id
      );
      const prevIndex =
        (currentIndex - 1 + MusicItems.length) % MusicItems.length;
      setCurrentTrack(MusicItems[prevIndex]);
      setIsPlaying(false);
    }
  };

  const BGCHANGE = `flex gap-1 ${
    isDark ? "bg-[#374151cc]" : "bg-gray-200"
  } p-2 rounded-lg opacity-100`;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // full screen setup
  const handleFullscreenChange = () => {
    setIsFullscreen(!!document.fullscreenElement);
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const enterFullscreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      // Chrome, Safari, Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      // IE/Edge
      element.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      // Chrome, Safari, Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      // IE/Edge
      document.msExitFullscreen();
    }
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  };

  return (
    <>
      <div
        className={`flex flex-row fixed justify-between ${preventDragClass} text-sm w-full p-1 text-white font-semibold bg-opacity-20 border-b border-black border-opacity-20`}
      >
        {/* Apple icon  with on click dropdown*/}
        <div onClick={toggleMenu} className="flex flex-row gap-2 items-center">
          <p className="hover:bg-custom-gray hover:border-none hover:rounded-sm hover:bg-opacity-50 p-2 px-3 ml-1 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.82em"
              height="1em"
              viewBox="0 0 256 315"
              fill="white"
            >
              <path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262" />
            </svg>
          </p>
          {/* Open Folders Name */}
          <p className="hover:bg-custom-gray hover:border-none hover:rounded-sm hover:bg-opacity-50 p-1">
            {FileName}
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          {/* battery button */}
          <div className="hover:bg-custom-gray hover:border-none hover:rounded-sm hover:bg-opacity-50 p-1 flex justify-center items-center space-x-2">
            <p className="text-xm">100%</p>
            <svg
              width="24"
              height="19"
              viewBox="0 0 28 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="1" y="4" width="23" height="12" rx="2" fill="#4ADE80" />
              <g clipPath="url(#clip0_126_38)">
                <path
                  d="M11.5143 10.699L9.06563 9.66975L15.8027 3.23832L13.9119 7.73681L16.3606 8.76604L9.62354 15.1975L11.5143 10.699Z"
                  fill="white"
                />
              </g>
              <path
                d="M4.7315 16.5642H20.424C21.939 16.5642 23.215 16.4227 24.119 15.5187C25.023 14.6147 25.147 13.3567 25.147 11.8412V7.29621C25.147 5.78071 25.023 4.51371 24.119 3.61871C23.2065 2.71421 21.939 2.56421 20.424 2.56421H4.705C3.2165 2.56421 1.9405 2.71471 1.0365 3.61871C0.133 4.52221 0 5.78071 0 7.26921V11.8412C0 13.3562 0.133 14.6237 1.0365 15.5187C1.9405 16.4227 3.2165 16.5642 4.7315 16.5642ZM4.4835 15.1377C3.571 15.1377 2.6135 15.0137 2.0825 14.4822C1.5415 13.9412 1.4265 13.0022 1.4265 12.0897V7.07421C1.4265 6.14371 1.5415 5.18671 2.0735 4.65471C2.6135 4.11471 3.58 3.99021 4.51 3.99021H20.672C21.576 3.99021 22.542 4.12321 23.0735 4.65521C23.6135 5.19521 23.7205 6.13471 23.7205 7.04721V12.0892C23.7205 13.0017 23.605 13.9407 23.0735 14.4817C22.542 15.0217 21.576 15.1367 20.672 15.1367L4.4835 15.1377ZM26.361 11.8062C27.061 11.7612 28 10.8667 28 9.51121C28 8.16421 27.0605 7.26921 26.361 7.22521V11.8062Z"
                fill="white"
              />
              <defs>
                <clipPath id="clip0_126_38">
                  <rect
                    width="12.7498"
                    height="14.6391"
                    fill="white"
                    transform="translate(9.67236) rotate(22.7978)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          {/* wifi button */}
          <div className="hover:bg-custom-gray hover:border-none hover:rounded-sm hover:bg-opacity-50 p-1">
            <svg
              width="15"
              height="15"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 5.00001L2 7.00001C6.97 2.03001 15.03 2.03001 20 7.00001L22 5.00001C15.93 -1.06999 6.08 -1.06999 0 5.00001ZM8 13L11 16L14 13C13.6064 12.6054 13.1388 12.2923 12.624 12.0786C12.1092 11.865 11.5574 11.755 11 11.755C10.4426 11.755 9.89076 11.865 9.37596 12.0786C8.86117 12.2923 8.39359 12.6054 8 13ZM4 9.00001L6 11C7.32646 9.67465 9.12487 8.93016 11 8.93016C12.8751 8.93016 14.6735 9.67465 16 11L18 9.00001C14.14 5.14001 7.87 5.14001 4 9.00001Z"
                fill="white"
              />
            </svg>
          </div>
          {/* controller button */}
          <div
            onClick={toggleController}
            className="hover:bg-custom-gray hover:border-none hover:rounded-sm hover:bg-opacity-50 p-1"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 1H5C2.79086 1 1 2.79086 1 5C1 7.20915 2.79086 9 5 9H17C19.2092 9 21 7.20915 21 5C21 2.79086 19.2092 1 17 1Z"
                fill="black"
                fillOpacity="0.25"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M17 13H5C2.79086 13 1 14.7908 1 17C1 19.2092 2.79086 21 5 21H17C19.2092 21 21 19.2092 21 17C21 14.7908 19.2092 13 17 13Z"
                fill="white"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M5 6C5.5523 6 6 5.5523 6 5C6 4.4477 5.5523 4 5 4C4.4477 4 4 4.4477 4 5C4 5.5523 4.4477 6 5 6Z"
                fill="#43CCF8"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M16 18C16.5523 18 17 17.5523 17 17C17 16.4477 16.5523 16 16 16C15.4477 16 15 16.4477 15 17C15 17.5523 15.4477 18 16 18Z"
                fill="black"
                fillOpacity="0.25"
                stroke="black"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p
            className="mr-2 hover:bg-custom-gray hover:border-none hover:rounded-sm hover:bg-opacity-50 p-1"
            onClick={setIsDark}
          >
            {formatDate(currentDate)}
          </p>
        </div>
      </div>

      <div className="flex">
        {/* Menu */}
        {isMenuOpen && (
          <div
            className={`flex  ${
              isDark ? "text-white " : "text-black "
            } justify-start  px-1 w-full mt-9 p-2 select-none text-sm`}
          >
            <div
              className={`flex flex-col ${
                isDark ? "bg-slate-700" : "bg-custom-gray"
              } w-[220px] rounded-lg border border-slate-500`}
            >
              <div className="flex flex-col gap-2 p-2">
                <div className="flex flex-col p-1 border-b border-gray-500">
                  <p className="hover:bg-blue-400 px-1 hover:rounded-sm">
                    About This Mac
                  </p>
                </div>
                <div className="flex flex-col p-1 border-b border-gray-500 gap-1">
                  <p className="hover:bg-blue-400 px-1 hover:rounded-sm">
                    System Preferences...
                  </p>
                  <p className="hover:bg-blue-400 px-1 hover:rounded-sm">
                    App Store...
                  </p>
                </div>
                <div className="flex flex-col p-1 border-b border-gray-500">
                  <p className="hover:bg-blue-400 px-1 hover:rounded-sm">
                    Recent Items
                  </p>
                </div>
                <div className="flex flex-col px-1 border-b border-gray-500">
                  <p className="hover:bg-blue-400 px-1 hover:rounded-sm">
                    Force Quit...
                  </p>
                </div>
                <div className="flex flex-col p-1 border-b border-gray-500 gap-1">
                  <p className="hover:bg-blue-400 px-1 hover:rounded-sm">
                    Sleep
                  </p>
                  <p className="hover:bg-blue-400 px-1 hover:rounded-sm">
                    Restart...
                  </p>
                  <p className="hover:bg-blue-400 px-1 hover:rounded-sm">
                    Shut Down
                  </p>
                </div>
                <div className="flex flex-col p-1 gap-1">
                  <p className="hover:bg-blue-400 px-1 hover:rounded-sm">
                    Lock Screen
                  </p>
                  <p className="hover:bg-blue-400 px-1 hover:rounded-sm">
                    Log Out Roshan.mown...
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* controller settings */}

        {isControllerOpen && (
          <div
            className={`flex ${
              isDark ? "text-white" : "text-black"
            } justify-end  px-1 w-full mt-9 p-2 select-none`}
          >
            <div
              className="flex flex-col w-[306px] rounded-xl border border-slate-500"
              style={{
                backgroundColor: `${
                  isDark
                    ? "rgba(31, 41, 55, 0.45)"
                    : "rgba(243, 244, 246, 0.45)"
                }`,
              }}
            >
              {/* first col */}
              <div className="flex flex-row justify-between gap-2  p-2">
                {/* wifi set box */}
                <div className={`${BGCHANGE} flex-col w-1/2`}>
                  <div className="flex flex-row items-center gap-2">
                    <div className="bg-[#3B82F6] p-1 rounded-full">
                      <IconWifi className="text-white" />
                    </div>
                    <div className="flex flex-col">
                      <p>WI-FI</p>
                      <span className="text-xs">Home</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="bg-[#3B82F6] p-1 rounded-full">
                      <IconBluetooth className="text-white" />
                    </div>
                    <div className="flex flex-col">
                      <p>Bluetooth</p>
                      <span className="text-xs">On</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="bg-[#3B82F6] p-1 rounded-full">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 2C8.19724 1.99922 6.44707 2.60736 5.03322 3.72581C3.61936 4.84427 2.62472 6.40748 2.21054 8.16202C1.79636 9.91655 1.98693 11.7595 2.75134 13.3922C3.51576 15.0249 4.80921 16.3515 6.422 17.157C6.65924 17.2758 6.83956 17.484 6.92329 17.7358C7.00703 17.9875 6.98732 18.2623 6.8685 18.4995C6.74968 18.7367 6.54149 18.9171 6.28972 19.0008C6.03796 19.0845 5.76324 19.0648 5.526 18.946C3.86503 18.1151 2.46827 16.838 1.49225 15.258C0.516223 13.6779 -0.000493699 11.8572 3.53955e-07 10C3.53955e-07 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20.0005 11.8572 19.4838 13.6779 18.5078 15.258C17.5317 16.838 16.135 18.1151 14.474 18.946C14.3565 19.0048 14.2286 19.04 14.0976 19.0494C13.9665 19.0588 13.8349 19.0423 13.7103 19.0008C13.5856 18.9593 13.4703 18.8937 13.371 18.8077C13.2717 18.7217 13.1903 18.617 13.1315 18.4995C13.0727 18.382 13.0375 18.2541 13.0281 18.1231C13.0187 17.992 13.0352 17.8604 13.0767 17.7358C13.1182 17.6111 13.1838 17.4958 13.2698 17.3965C13.3558 17.2972 13.4605 17.2158 13.578 17.157C15.1908 16.3515 16.4842 15.0249 17.2487 13.3922C18.0131 11.7595 18.2036 9.91655 17.7895 8.16202C17.3753 6.40748 16.3806 4.84427 14.9668 3.72581C13.5529 2.60736 11.8028 1.99922 10 2ZM10 6C9.09844 5.99938 8.22311 6.30335 7.51598 6.86261C6.80884 7.42187 6.31137 8.20362 6.10425 9.08107C5.89714 9.95851 5.99251 10.8802 6.37492 11.6966C6.75732 12.5131 7.40433 13.1764 8.211 13.579C8.44198 13.7012 8.61595 13.909 8.69567 14.1578C8.7754 14.4067 8.75454 14.6769 8.63758 14.9105C8.52061 15.1442 8.31682 15.3228 8.06982 15.4081C7.82283 15.4934 7.55225 15.4787 7.316 15.367C6.10732 14.7623 5.13819 13.7673 4.5656 12.5431C3.99301 11.3188 3.8505 9.93718 4.16116 8.62187C4.47182 7.30656 5.21745 6.13465 6.27727 5.29599C7.33708 4.45733 8.649 4.00105 10.0005 4.00105C11.352 4.00105 12.6639 4.45733 13.7237 5.29599C14.7835 6.13465 15.5292 7.30656 15.8398 8.62187C16.1505 9.93718 16.008 11.3188 15.4354 12.5431C14.8628 13.7673 13.8937 14.7623 12.685 15.367C12.4482 15.4834 12.175 15.5015 11.9249 15.4173C11.6748 15.3331 11.4681 15.1535 11.3499 14.9175C11.2317 14.6816 11.2115 14.4086 11.2937 14.1578C11.376 13.9071 11.554 13.699 11.789 13.579C12.5957 13.1764 13.2427 12.5131 13.6251 11.6966C14.0075 10.8802 14.1029 9.95851 13.8957 9.08107C13.6886 8.20362 13.1912 7.42187 12.484 6.86261C11.7769 6.30335 10.9016 5.99938 10 6ZM8 10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8C10.5304 8 11.0391 8.21071 11.4142 8.58579C11.7893 8.96086 12 9.46957 12 10C12 10.5304 11.7893 11.0391 11.4142 11.4142C11.0391 11.7893 10.5304 12 10 12C9.46957 12 8.96086 11.7893 8.58579 11.4142C8.21071 11.0391 8 10.5304 8 10Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <p>AirDrop</p>
                      <span className="text-xs">Contacts Only</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {/* Dark Mode */}
                  <div className={`${BGCHANGE} h-1/2`}>
                    <div
                      onClick={setIsDark}
                      className="flex justify-between items-center  "
                    >
                      <div className="bg-[#3B82F6] p-1 rounded-full flex items-center justify-center">
                        {isDark ? (
                          <IconMoon fill="white" className="text-white" />
                        ) : (
                          <IconSun className="text-white" />
                        )}
                      </div>
                      <p className="ml-2 text-sm">
                        {isDark ? "Dark Mode" : "Light Mode"}
                      </p>
                    </div>
                  </div>
                  {/* 2-row */}
                  <div className="flex h-1/2 w-full gap-1">
                    <div className={`${BGCHANGE} w-1/2`}>
                      <div className="flex flex-col justify-between items-center w-full h-full">
                        <IconSunset2 />
                        <p className="text-xs">Keyboard</p>
                        <p className="text-xs">Brighntness</p>
                      </div>
                    </div>
                    <div
                      onClick={toggleFullscreen}
                      className={`${BGCHANGE} w-1/2`}
                    >
                      <div className="flex flex-col justify-between items-center w-full h-full">
                        {isFullscreen ? (
                          <>
                            <IconMinimize />
                            <p className="text-xs">Exit</p>
                            <p className="text-xs">FullScreen</p>
                          </>
                        ) : (
                          <>
                            <IconMaximize />
                            <p className="text-xs">Enter</p>
                            <p className="text-xs">FullScreen</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* col-2 Brightness */}
              <div className="flex flex-col px-2">
                <div className={`${BGCHANGE} flex-col w-full`}>
                  <p className="text-sm">Display {brightnessvalue - 6}%</p>
                  <div className="relative flex items-center">
                    <IconSun className="absolute left-2 h-5 w-5 " />
                    <input
                      type="range"
                      min="31"
                      max="156"
                      value={brightnessvalue}
                      onChange={(e) => {
                        setBrightnessValue(parseInt(e.target.value));
                      }}
                      className={`w-full h-6 ${
                        isDark ? "bg-slate-600" : "bg-slate-300"
                      }  rounded-lg appearance-none cursor-pointer accent-slate-100 pl-10`}
                    />
                  </div>
                </div>
              </div>
              {/* col-3  Volume*/}
              <div className="flex flex-col p-2">
                <div className={`${BGCHANGE} flex-col w-full`}>
                  <p className="text-sm">Sound {soundvalue}%</p>
                  <div className="relative flex items-center">
                    <IconVolume className="absolute left-2 h-5 w-5 " />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={soundvalue}
                      onChange={(e) => {
                        setSoundValue(parseInt(e.target.value));
                      }}
                      className={`w-full h-6 ${
                        isDark ? "bg-slate-600" : "bg-slate-300"
                      }  rounded-lg appearance-none cursor-pointer accent-slate-100 pl-10`}
                    />
                  </div>
                </div>
              </div>
              {/* col-4 Music */}
              <div className="flex flex-col px-2 mb-2">
                <div className={`${BGCHANGE}  w-full`}>
                  {currentTrack && (
                    <>
                      <audio
                        ref={audioRef}
                        src={currentTrack.music}
                        onEnded={handleNext}
                      />
                      <div className="flex flex-col rounded-xl overflow-hidden justify-center items-center">
                        <Image
                          className="rounded-xl "
                          src={currentTrack.imageSrc}
                          alt={currentTrack.title}
                          width={60}
                          height={60}
                          draggable={false}
                        />
                      </div>
                      <div className="flex flex-col justify-center p-2">
                        <p>{currentTrack.title}</p>
                        <p className="text-xs">{currentTrack.writter}</p>
                      </div>
                      <div className="flex gap-1 justify-center items-center">
                        <IconPlayerTrackPrevFilled
                          className="cursor-pointer"
                          onClick={handlePrev}
                        />
                        {isPlaying ? (
                          <IconPlayerPauseFilled
                            className="cursor-pointer"
                            onClick={handlePlayPause}
                          />
                        ) : (
                          <IconPlayerPlayFilled
                            className="cursor-pointer"
                            onClick={handlePlayPause}
                          />
                        )}
                        <IconPlayerTrackNextFilled
                          className="cursor-pointer"
                          onClick={handleNext}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
