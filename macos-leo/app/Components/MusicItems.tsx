import { MusicItem } from './Types/MusicType';

// images
import EnemyArcane from "@/public/assets/Icons/EnemyArcane.webp"
import Master from "@/public/assets/Icons/Master.webp"
import FAF from "@/public/assets/Icons/FAF.webp"
import MayakamEnne from "@/public/assets/Icons/MayakamEnne.webp"
import MostWanted from "@/public/assets/Icons/MostWanted.webp"
import OrdinaryPerson from "@/public/assets/Icons/OrdinaryPerson.webp"
import Buildspace from "@/public/assets/Icons/Buildspace.webp"

// music

import BuildspaceMusic from "@/public/assets/Music/all-the-way.mp3"
import DanzaKuduro from "@/public/assets/Music/DanzaKuduro.mp3"
import DisturbedNFS from "@/public/assets/Music/DisturbedNFS.mp3"
import Enemy from "@/public/assets/Music/Enemy.mp3"
import QuitPannuda from "@/public/assets/Music/QuitPannuda.mp3"
import OrdinaryPersonMusic from "@/public/assets/Music/OrdinaryPerson.mp3"
import VodaVoda from "@/public/assets/Music/VodaVoda.mp3"


export const MusicItems : MusicItem[] = [
    {
        id :1,
        title: "Enemy",
        writter: "Imagine Dragons & JID",
        imageSrc: EnemyArcane.src,
        music: Enemy,
    },
    {
        id :2,
        title: "Quit Pannuda",
        writter: "Anirudh Ravichander",
        imageSrc: Master.src,
        music: QuitPannuda,
    },
    {
        id :3,
        title: "Danza Kuduro",
        writter: "Don Omar",
        imageSrc: FAF.src,
        music: DanzaKuduro,
    },
    {
        id :4,
        title: "Voda Voda Dhooram Korayala",
        writter: "Dhanush",
        imageSrc: MayakamEnne.src,
        music: VodaVoda,
    },
    {
        id :5,
        title: "Disturbed NFS",
        writter: "Julius",
        imageSrc: MostWanted.src,
        music: DisturbedNFS,
    },
    {
        id :6,
        title: "Ordinary Person Leo",
        writter: "Anirudh Ravichander & Nikhita Gandhi",
        imageSrc: OrdinaryPerson.src,
        music: OrdinaryPersonMusic,
    },
    {
        id :7,
        title: "All the Way",
        writter: "buildspace & Sommaiya Angrish",
        imageSrc: Buildspace.src,
        music: BuildspaceMusic,
    },
]
