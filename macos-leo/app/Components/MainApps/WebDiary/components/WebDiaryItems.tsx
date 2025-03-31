import { WDData } from "./types/WDType";

export const WDItemsData : WDData[] = [
    {
        id: "1",
        title: "About",
        md: [
            {
                id: "1",
                title: "About me",
                file: "web-diary",
                smallDescription: "Web Diary is a simple diary app that allows you to write your thoughts and ideas in markdown format.",
                link: "https://raw.githubusercontent.com/Roshan-Here/Roshan-Here/master/README.md"
            },
            {
                id: "2",
                title: "About this site",
                file: "aboutsite",
                smallDescription: "My new macOS-inspired portfolio.",
                link: "https://raw.githubusercontent.com/Roshan-Here/Roshan-MacOs/main/Readme.md"
            }
            ]
        },
        {
            id: "2",
            title: "Projects",
            md: [
                {
                    id: "1",
                    title: "GlobalProfile",
                    file: "proj1",
                    smallDescription: "GlobalProfile helps you showcase your skills and experience with beautifully designed portfolio and resume templates.",
                    link: "https://raw.githubusercontent.com/Roshan-Here/BasicTask/refs/heads/projects.me/globalprofile.md"
                },
                {
                    id: "2",
                    title: "OneCompiler",
                    file: "proj2",
                    smallDescription: "OneCompiler is an advanced, fully responsive web application designed to....",
                    link: "https://raw.githubusercontent.com/Roshan-Here/OneCompiler/refs/heads/development/Readme.md"
                },
                {
                    id: "3",
                    title: "IT Park Updates",
                    file: "proj3",
                    smallDescription: "Stay ahead with the latest job openings in Infopark, Technopark, and IT PARK Kerala.",
                    link: "https://raw.githubusercontent.com/Roshan-Here/BasicTask/refs/heads/projects.me/WhatsppChannel.md"
                }
            ]
        }
]
