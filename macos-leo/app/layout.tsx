import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammed Roshan P S MacOs Portfolio",
  description: "built with Next.js, TypeScript, and Zustand",
  icons: {
    icon: 'RosLogoWhite.png',
    shortcut: 'RosLogoWhite.png',
  },
  keywords: [
    "Muhammed Roshan P S",
    "Portfolio",
    "MacOS",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Django",
    "FastAPI",
    "Python",
    "JavaScript",
    "Node.js",
    "Web Development",
    "Git",
    "REST API",
    "Docker",
    "macOS Developer Portfolio"
  ]  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
