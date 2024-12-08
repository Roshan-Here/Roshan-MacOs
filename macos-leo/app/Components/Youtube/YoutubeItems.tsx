export interface Video {
  id: string;
  title: string;
  channelName: string;
  channelImage: string;
  postedDate: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export const videos: Video[] = [
  {
    id: "1",
    title: "React Tutorial for Beginners",
    channelName: "Coding Academy",
    channelImage: "https://picsum.photos/seed/react/50/50",
    postedDate: "2023-05-15",
    thumbnailUrl: "https://img.youtube.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },
  {
    id: "2",
    title: "TypeScript Crash Course",
    channelName: "Dev Insights",
    channelImage: "https://picsum.photos/seed/typescript/50/50",
    postedDate: "2023-06-01",
    thumbnailUrl: "https://img.youtube.com/vi/BCg4U1FzODs/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/BCg4U1FzODs",
  },
  {
    id: "3",
    title: "Tailwind CSS: From Zero to Hero",
    channelName: "CSS Wizards",
    channelImage: "https://picsum.photos/seed/tailwind/50/50",
    postedDate: "2023-06-10",
    thumbnailUrl: "https://img.youtube.com/vi/UBOj6rqRUME/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/UBOj6rqRUME",
  },
  {
    id: "4",
    title: "Next.js 13 Crash Course",
    channelName: "Web Dev Simplified",
    channelImage: "https://picsum.photos/seed/nextjs/50/50",
    postedDate: "2023-06-15",
    thumbnailUrl: "https://img.youtube.com/vi/Y6KDk5iyrYE/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/Y6KDk5iyrYE",
  },
  {
    id: "5",
    title: "GraphQL Basics - Build an API from Scratch",
    channelName: "Backend Mastery",
    channelImage: "https://picsum.photos/seed/graphql/50/50",
    postedDate: "2023-06-20",
    thumbnailUrl: "https://img.youtube.com/vi/YyUWW04HwKY/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/YyUWW04HwKY",
  },
  {
    id: "6",
    title: "Docker for Beginners: Full Course",
    channelName: "DevOps Decoded",
    channelImage: "https://picsum.photos/seed/docker/50/50",
    postedDate: "2023-06-25",
    thumbnailUrl: "https://img.youtube.com/vi/fqMOX6JJhGo/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/fqMOX6JJhGo",
  },
];
