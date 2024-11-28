import { useEffect, useState } from "react";
import store from "../state/store";
import { formatDate } from "./utils/datetime";

function Navbar() {
  const { UserThemeStore } = store;
  const { setIsDark } = UserThemeStore(); // set dartheme working fine
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-row justify-between text-sm w-full p-1 text-custom-gray font-semibold bg-opacity-20 border-b border-black border-opacity-20">
      {/* Apple icon  with on click dropdown*/}
      <div className="flex flex-row gap-2 items-center">
        <p className="px-3 flex justify-center items-center">
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
        <p>Folder Name</p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        {/* end */}
        <div className="hover:bg-slate-200 hover:border-none hover:rounded-lg hover:bg-opacity-50 p-1 flex justify-center items-center space-x-2">
          <p>100%</p>
          <svg
            width="28"
            height="19"
            viewBox="0 0 28 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="1" y="4" width="23" height="12" rx="2" fill="#4ADE80" />
            <g clip-path="url(#clip0_126_38)">
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
        <p>Wifi Icon</p>
        <p>More Function Button</p>
        <p onClick={setIsDark}>{formatDate(currentDate)}</p>
      </div>
    </div>
  );
}

export default Navbar;
