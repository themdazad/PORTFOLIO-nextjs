import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md. Azad - Software Developer",
  description: "I'm Md. Azad, a passionate software developer with expertise in building web applications. Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
