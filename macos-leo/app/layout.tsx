import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roshan MacOs",
  description: "Inspired from Xiaohan Zou",
  icons: {
    icon: 'RosLogoWhite.png',
    shortcut: 'RosLogoWhite.png',
  },
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
