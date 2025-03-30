import { MusicItem } from './Types/MusicType';

// images
import Buildspace from "@/public/assets/Icons/Buildspace.webp";
import EnemyArcane from "@/public/assets/Icons/EnemyArcane.webp";
import FAF from "@/public/assets/Icons/FAF.webp";
import Master from "@/public/assets/Icons/Master.webp";
import MayakamEnne from "@/public/assets/Icons/MayakamEnne.webp";
import MostWanted from "@/public/assets/Icons/MostWanted.webp";
import OrdinaryPerson from "@/public/assets/Icons/OrdinaryPerson.webp";



export const MusicItems : MusicItem[] = [
    {
        id :1,
        title: "Enemy",
        writter: "Imagine Dragons & JID",
        imageSrc: EnemyArcane.src,
        music: "https://raw.githubusercontent.com/Roshan-Here/BasicTask/projects.me/Music/Enemy.mp3",
    },
    {
        id :2,
        title: "Quit Pannuda",
        writter: "Anirudh Ravichander",
        imageSrc: Master.src,
        music: "https://raw.githubusercontent.com/Roshan-Here/BasicTask/projects.me/Music/QuitPannuda.mp3",
    },
    {
        id :3,
        title: "Danza Kuduro",
        writter: "Don Omar",
        imageSrc: FAF.src,
        music: "https://raw.githubusercontent.com/Roshan-Here/BasicTask/projects.me/Music/DanzaKuduro.mp3",
    },
    {
        id :4,
        title: "Voda Voda Dhooram Korayala",
        writter: "Dhanush",
        imageSrc: MayakamEnne.src,
        music: "https://raw.githubusercontent.com/Roshan-Here/BasicTask/projects.me/Music/VodaVoda.mp3",
    },
    {
        id :5,
        title: "Disturbed NFS",
        writter: "Julius",
        imageSrc: MostWanted.src,
        music: "https://raw.githubusercontent.com/Roshan-Here/BasicTask/projects.me/Music/DisturbedNFS.mp3",
    },
    {
        id :6,
        title: "Ordinary Person Leo",
        writter: "Anirudh Ravichander & Nikhita Gandhi",
        imageSrc: OrdinaryPerson.src,
        music: "https://raw.githubusercontent.com/Roshan-Here/BasicTask/projects.me/Music/OrdinaryPerson.mp3",
    },
    {
        id :7,
        title: "All the Way",
        writter: "buildspace & Sommaiya Angrish",
        imageSrc: Buildspace.src,
        music: "https://raw.githubusercontent.com/Roshan-Here/BasicTask/projects.me/Music/all-the-way.mp3",
    },
]
